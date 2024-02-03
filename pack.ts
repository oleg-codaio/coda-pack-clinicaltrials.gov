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

pack.addSyncTable({
  name: "Studies",
  identityName: "Study",
  schema: StudySchema,
  formula: {
    name: "Studies",
    description: "Returns data of multiple studies.",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "cond",
        description: '"Conditions or disease" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "term",
        description: '"Other terms" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "locn",
        description: '"Location terms" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "titles",
        description: '"Title / acronym" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "intr",
        description: '"Intervention / treatment" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "outc",
        description: '"Outcome measure" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "spons",
        description: '"Sponsor / collaborator" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "lead",
        description: 'Searches in "LeadSponsorName" field.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "id",
        description: '"Study IDs" query.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "patient",
        description: 'See "PatientSearch Area" on Search Areas for more details.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "overallStatus",
        description: "Filter by comma- or pipe-separated list of statuses",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "geo",
        description:
          "Filter by geo-function. Currently only distance function is supported. Format: distance(latitude,longitude,distance)",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "ids",
        description: "Filter by comma- or pipe-separated list of NCT numbers (a.k.a. ClinicalTrials.gov identifiers)",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "advanced",
        description: "Filter by query in Essie expression syntax.",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "synonyms",
        description: "Filter by comma- or pipe-separated list of area:synonym_id pairs.",
        optional: true,
      }),
      // TODO(oleg): add postFilter.
      // TODO(oleg): add aggFilters, geoDecay, fields.
    ],
    execute: async function (
      [cond, term, locn, titlesintr, outc, spons, lead, id, patient, overallStatus, geo, ids, advanced, synonyms],
      context
    ) {
      const url = coda.withQueryParams(`${ApiBaseUrl}/studies`, {
        format: "json",
        markupFormat: "markdown",
        cond,
        term,
        locn,
        titlesintr,
        outc,
        spons,
        lead,
        id,
        patient,
        overallStatus,
        geo,
        ids,
        advanced,
        synonyms,
        pageToken: context.sync.continuation,
      });
      const response = await context.fetcher.fetch({method: "GET", url});

      return {result: response.body.studies, continuation: response.body.nextPageToken};
    },
  },
});
