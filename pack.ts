import * as coda from "@codahq/packs-sdk";
import {StudySchema} from "./gen-src/schemas";

const ApiBaseUrl = "https://clinicaltrials.gov/api/v2";

export const pack = coda.newPack();

pack.addNetworkDomain("clinicaltrials.gov");

pack.addFormula({
  name: "Study",
  description: "Returns data of a single study.",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "nctId",
      description: "NCT Number of a study.",
    }),
  ],
  resultType: coda.ValueType.Object,
  schema: StudySchema,
  examples: [{params: ["NCT00841061"], result: "Hello World!"}],
  execute: async function ([nctId], context) {
    const url = coda.withQueryParams(`${ApiBaseUrl}/studies/${nctId}`, {
      format: "json",
      markupFormat: "markdown",
    });
    const response = await context.fetcher.fetch({method: "GET", url});
    return response.body;
  },
});
