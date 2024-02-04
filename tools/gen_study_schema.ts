import * as fs from "fs";
import {ensureExists, ensureUnreachable} from "@codahq/packs-sdk";
import * as prettier from "prettier";
import {components, paths} from "../gen-src/api-types";

type FieldNode = components["schemas"]["FieldNode"];

interface Context {
  enums: components["schemas"]["EnumInfoList"];
}

function capSnakeCaseToReadable(s: string): string {
  // SOME_VALUE -> Some Value
  return s
    .split("_")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

function generateSchemaBody(context: Context, namePath: string[], field: FieldNode, required?: boolean): string {
  let output = "{";

  if (field.sourceType.startsWith("FUNC ")) {
    field.sourceType = "TEXT";
  }

  const isList = field.type.endsWith("[]");
  if (isList) {
    output += "type: coda.ValueType.Array, items: {";
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

      if (field.isEnum) {
        const enumType = ensureExists(
          context.enums.find((e) => e.type === field.type.replace("[]", "")),
          `Enum not found: ${field.type}`
        );
        output += ", codaType: coda.ValueHintType.SelectList";
        output += ", options: [";
        for (const option of enumType.values) {
          output += `{display: "${option.legacyValue}", value: "${option.value}"},`;
        }
        output += "]";
      }
      break;

    case "STRUCT":
      output += "type: coda.ValueType.Object, properties: {";
      for (const child of field.children ?? []) {
        const propRequired = child.rules === "Required";
        output += `${child.piece}: ${generateSchemaBody(context, [...namePath, child.name], child, propRequired)},`;
      }
      output += "}";

      const maybeDisplayChild = field.children.find((c) => c.name === "name");
      if (maybeDisplayChild) {
        output += `, displayProperty: "${maybeDisplayChild.piece}"`;
      }

      break;

    default:
      ensureUnreachable(field.sourceType as never, `Unknown schema type: ${field.sourceType}`);
  }

  if (isList) {
    output += "}";
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

// Generate schema from OpenAPI spec.
async function generateSchema() {
  const metadata = (await (
    await fetch("https://www.clinicaltrials.gov/api/v2/studies/metadata")
  ).json()) as paths["/studies/metadata"]["get"]["responses"]["200"]["content"]["application/json"];
  const enums = (await (
    await fetch("https://www.clinicaltrials.gov/api/v2/studies/enums")
  ).json()) as paths["/studies/enums"]["get"]["responses"]["200"]["content"]["application/json"];

  const context: Context = {enums};
  const studyField: FieldNode = {
    name: "study",
    piece: "Study",
    sourceType: "STRUCT",
    type: "Study",
    children: metadata,
  };
  const studyOutputBody = generateSchemaBody(context, ["study"], studyField);
  const studyOutput = `export const StudySchema = coda.makeSchema(${studyOutputBody});`;

  const output = `\
// Auto-generated from ClinicalTrials.gov API on ${new Date().toDateString()}.
import * as coda from "@codahq/packs-sdk";

${studyOutput}`;
  const prettyOutput = await prettier.format(output, {parser: "typescript", bracketSpacing: false});
  fs.writeFileSync("gen-src/schemas.ts", prettyOutput);
}

void generateSchema();
