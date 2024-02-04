import * as fs from "fs";
import {ensureUnreachable} from "@codahq/packs-sdk";
import * as prettier from "prettier";
import {components} from "../gen-src/api-types";

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

function generateSchemaBody(namePath: string[], field: FieldNode, required?: boolean): string {
  // if ("$ref" in srcSchema) {
  //   const name = getRefName(srcSchema.$ref);
  //   if (name === namePath[0]) {
  //     // Handle recursive schemas.
  //     return `{type: coda.ValueType.Object, properties: {}, includeUnknownProperties: true}`;
  //   }
  //   deps.add(name);
  //   return `${name}Schema`;
  // }

  // if (srcSchema.anyOf) {
  //   // Combine all the anyOf schemas into a single schema.
  //   const replacementSchema: OpenAPIV3.NonArraySchemaObject = {type: "object", properties: {}};
  //   for (let schema of srcSchema.anyOf) {
  //     // if ("$ref" in schema) {
  //     //   schema = components[getRefName(schema.$ref)];
  //     // }
  //     assertCondition("type" in schema && schema.type === "object");
  //     for (const [name, prop] of Object.entries(schema.properties ?? {})) {
  //       const existingProp = replacementSchema.properties[name];
  //       if (existingProp) {
  //         if ("$ref" in existingProp) {
  //           assertCondition("$ref" in prop);
  //           assertCondition(existingProp.$ref === prop.$ref);
  //         } else {
  //           assertCondition(!("$ref" in prop));
  //           if (existingProp.type !== prop.type) {
  //             assertCondition(existingProp.type !== "object" && prop.type !== "object");
  //             assertCondition(existingProp.type !== "array" && prop.type !== "array");
  //             existingProp.type = "string";
  //           }
  //         }
  //       }

  //       replacementSchema.properties[name] = prop;
  //     }
  //   }
  //   srcSchema = replacementSchema;
  // }

  let output = "{";

  if (field.sourceType.startsWith("FUNC ")) {
    field.sourceType = "TEXT";
  }

  switch (field.sourceType) {
    case "BOOLEAN":
      output += "type: coda.ValueType.Boolean";
      break;

    case "NUMERIC":
      output += "type: coda.ValueType.Number";
      break;

    case "DATE":
      output += "type: coda.ValueType.String";
      output += ", codaType: coda.ValueHintType.Date";
      break;

    case "TIME":
      output += "type: coda.ValueType.String";
      output += ", codaType: coda.ValueHintType.DateTime";
      break;

    case "MARKUP":
      output += "type: coda.ValueType.String";
      output += ", codaType: coda.ValueHintType.Markdown";
      break;

    case "TEXT":
      output += "type: coda.ValueType.String";

      // if (markdownFields.includes(namePath.join("."))) {
      //   output += ", codaType: coda.ValueHintType.Markdown";
      // } else if (srcSchema.format === "date") {
      //   output += ", codaType: coda.ValueHintType.Date";
      // } else if (srcSchema.enum) {
      //   output += ", codaType: coda.ValueHintType.SelectList";
      //   output += ", options: [";
      //   for (const option of srcSchema.enum) {
      //     output += `{display: "${capSnakeCaseToReadable(option)}", value: "${option}"},`;
      //   }
      //   output += "]";
      // }

      break;

    case "STRUCT":
      output += "type: coda.ValueType.Object, properties: {";
      for (const child of field.children ?? []) {
        const propRequired = child.rules === "Required";
        output += `${child.piece}: ${generateSchemaBody([...namePath, child.name], child, propRequired)},`;
      }
      output += "}";
      // if (srcSchema.additionalProperties !== false) {
      //   output += ", includeUnknownProperties: true";
      // }
      break;

    case "array":
      // output += "type: coda.ValueType.Array, items: ";
      // output += generateSchemaBody([...namePath, "0"], srcSchema.items, deps, components);
      break;

    default:
      ensureUnreachable(field.sourceType as never, `Unknown schema type: ${field.sourceType}`);
  }

  output += `, fromKey: ${JSON.stringify(field.name)}`;
  if (field.title || field.definition) {
    output += `, description: ${JSON.stringify(`${[field.title, field.definition].filter(Boolean).join(". ")}.`)}`;
  }
  if (required) {
    output += ", required: true";
  }

  output += "}";
  return output;
}

type FieldNodeList = components["schemas"]["FieldNodeList"];
type FieldNode = components["schemas"]["FieldNode"];

// Generate schema from OpenAPI spec.
async function generateSchema() {
  const metadata = (await (
    await fetch("https://www.clinicaltrials.gov/api/v2/studies/metadata")
  ).json()) as FieldNodeList;

  const studyField: FieldNode = {
    name: "study",
    piece: "Study",
    sourceType: "STRUCT",
    type: "Study",
    children: metadata,
  };
  const studyOutputBody = generateSchemaBody(["study"], studyField);
  const studyOutput = `export const StudySchema = coda.makeSchema(${studyOutputBody});`;

  const output = `\
// Auto-generated from ClinicalTrials.gov API on ${new Date().toDateString()}.
import * as coda from "@codahq/packs-sdk";

${studyOutput}`;
  const prettyOutput = await prettier.format(output, {parser: "typescript", bracketSpacing: false});
  fs.writeFileSync("gen-src/schemas.ts", prettyOutput);
}

void generateSchema();
