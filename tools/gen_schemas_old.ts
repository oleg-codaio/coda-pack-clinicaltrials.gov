import * as OpenAPIParser from "@readme/openapi-parser";
import {OpenAPIV3} from "openapi-types";
import * as fs from "fs";
import {assertCondition, ensureUnreachable} from "@codahq/packs-sdk";
import * as prettier from "prettier";

function capSnakeCaseToReadable(s: string): string {
  // SOME_VALUE -> Some Value
  return s
    .split("_")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

function getRefName(ref: string): string {
  return ref.split("/").pop()!;
}

// NOTE(oleg): the OpenAPI spec doesn't contain information on which fields are Markdown, so hardcoding it here.
const markdownFields = ["EligibilityModule.eligibilityCriteria"];

function generateSchemaBody(
  namePath: string[],
  srcSchema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
  deps: Set<string>,
  components: OpenAPIV3.ComponentsObject["schemas"],
  required?: boolean
): string {
  if ("$ref" in srcSchema) {
    const name = getRefName(srcSchema.$ref);
    if (name === namePath[0]) {
      // Handle recursive schemas.
      return `{type: coda.ValueType.Object, properties: {}, includeUnknownProperties: true}`;
    }
    deps.add(name);
    return `${name}Schema`;
  }

  if (srcSchema.anyOf) {
    // Combine all the anyOf schemas into a single schema.
    const replacementSchema: OpenAPIV3.NonArraySchemaObject = {type: "object", properties: {}};
    for (let schema of srcSchema.anyOf) {
      if ("$ref" in schema) {
        schema = components[getRefName(schema.$ref)];
      }
      assertCondition("type" in schema && schema.type === "object");
      for (const [name, prop] of Object.entries(schema.properties ?? {})) {
        const existingProp = replacementSchema.properties[name];
        if (existingProp) {
          if ("$ref" in existingProp) {
            assertCondition("$ref" in prop);
            assertCondition(existingProp.$ref === prop.$ref);
          } else {
            assertCondition(!("$ref" in prop));
            if (existingProp.type !== prop.type) {
              assertCondition(existingProp.type !== "object" && prop.type !== "object");
              assertCondition(existingProp.type !== "array" && prop.type !== "array");
              existingProp.type = "string";
            }
          }
        }

        replacementSchema.properties[name] = prop;
      }
    }
    srcSchema = replacementSchema;
  }

  let output = "{";

  switch (srcSchema.type) {
    case "boolean":
      output += "type: coda.ValueType.Boolean";
      break;

    case "integer":
    case "number":
      output += "type: coda.ValueType.Number";
      break;

    case "string":
      output += "type: coda.ValueType.String";

      if (markdownFields.includes(namePath.join("."))) {
        output += ", codaType: coda.ValueHintType.Markdown";
      } else if (srcSchema.format === "date") {
        output += ", codaType: coda.ValueHintType.Date";
      } else if (srcSchema.enum) {
        output += ", codaType: coda.ValueHintType.SelectList";
        output += ", options: [";
        for (const option of srcSchema.enum) {
          output += `{display: "${capSnakeCaseToReadable(option)}", value: "${option}"},`;
        }
        output += "]";
      }

      break;

    case "object":
      output += "type: coda.ValueType.Object, properties: {";
      for (const [name, prop] of Object.entries(srcSchema.properties ?? {})) {
        const propRequired = (srcSchema.required ?? []).includes(name);
        output += `${name}: ${generateSchemaBody([...namePath, name], prop, deps, components, propRequired)},`;
      }
      output += "}";
      if (srcSchema.additionalProperties !== false) {
        output += ", includeUnknownProperties: true";
      }
      break;

    case "array":
      output += "type: coda.ValueType.Array, items: ";
      output += generateSchemaBody([...namePath, "0"], srcSchema.items, deps, components);
      break;

    default:
      ensureUnreachable(srcSchema, `Unknown schema type: ${(srcSchema as any).type}`);
  }

  if (required) {
    output += ", required: true";
  }

  output += "}";
  return output;
}

// Generate schema from OpenAPI spec.
async function generateSchema() {
  const doc = (await OpenAPIParser.bundle("https://www.clinicaltrials.gov/api/oas/v2")) as OpenAPIV3.Document<{}>;
  const {schemas: srcSchemas} = doc.components;

  const outputSchemas: Record<string, {output: string; deps: Set<string>}> = {};
  for (const [name, srcSchema] of Object.entries(srcSchemas)) {
    const deps = new Set<string>();
    const schemaBody = generateSchemaBody([name], srcSchema, deps, srcSchemas);
    outputSchemas[name] = {output: `export const ${name}Schema = coda.makeSchema(${schemaBody});`, deps};
  }

  // Topologically sort the schemas to ensure that dependencies are defined before they are used.
  const sortedSchemas = [];
  const seen = new Set<string>();
  function visit(name: string) {
    if (seen.has(name)) {
      return;
    }
    seen.add(name);
    for (const dep of outputSchemas[name].deps) {
      visit(dep);
    }
    sortedSchemas.push(outputSchemas[name]);
  }
  for (const name of Object.keys(outputSchemas)) {
    visit(name);
  }

  const version = doc.info.version;
  const output = `\
// Auto-generated from ClinicalTrials.gov OpenAPI spec version ${version}.
import * as coda from "@codahq/packs-sdk";

${sortedSchemas.map((s) => s.output).join("\n\n")}
`;
  const prettyOutput = await prettier.format(output, {parser: "typescript", bracketSpacing: false});
  fs.writeFileSync("gen-src/schemas.ts", prettyOutput);
}

void generateSchema();
