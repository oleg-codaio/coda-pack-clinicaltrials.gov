import * as OpenAPIParser from "@readme/openapi-parser";
import {OpenAPIV3} from "openapi-types";
import * as fs from "fs";
import {assertCondition, ensureUnreachable} from "@codahq/packs-sdk";
import * as prettier from "prettier";

function getRefName(ref: string): string {
  return ref.split("/").pop()!;
}

function generateSchemaBody(
  parentName: string,
  srcSchema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
  deps: Set<string>,
  components: OpenAPIV3.ComponentsObject["schemas"]
): string {
  if ("$ref" in srcSchema) {
    const name = getRefName(srcSchema.$ref);
    if (name === parentName) {
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

        // TODO(oleg): validate that the properties are compatible.
        replacementSchema.properties[name] = prop;
      }
    }
    console.log("replacementSchema", replacementSchema);
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
      break;

    case "object":
      output += "type: coda.ValueType.Object, properties: {";
      for (const [name, prop] of Object.entries(srcSchema.properties ?? {})) {
        output += `${name}: ${generateSchemaBody(parentName, prop, deps, components)},`;
      }
      output += "}";
      break;

    case "array":
      output += "type: coda.ValueType.Array, items: ";
      output += generateSchemaBody(parentName, srcSchema.items, deps, components);
      break;

    default:
      ensureUnreachable(srcSchema, `Unknown schema type: ${(srcSchema as any).type}`);
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
    const schemaBody = generateSchemaBody(name, srcSchema, deps, srcSchemas);
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
