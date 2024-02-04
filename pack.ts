import * as coda from "@codahq/packs-sdk";
import {StudySchema} from "./gen-src/schemas";
import {components} from "./gen-src/api-types";

const StudySchemaRefined = coda.makeSchema({
  ...StudySchema,
  idProperty: "NCTId",
  displayProperty: "NCTId",
  featuredProperties: ["Link"],
  properties: {
    ...StudySchema.properties,
    NCTId: StudySchema.properties.ProtocolSection.properties.IdentificationModule.properties.NCTId,
    Link: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Url,
      fromKey: "link",
      required: true,
    },
  },
});

function makeStudyRefined(study: coda.SchemaType<typeof StudySchema>): coda.SchemaType<typeof StudySchema> {
  const nctId = study.protocolSection.identificationModule.nctId;
  return {
    ...study,
    nctId,
    link: `https://clinicaltrials.gov/study/${nctId}`,
  };
}

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
  schema: StudySchemaRefined,
  examples: [{params: ["NCT00841061"], result: "Study"}],
  execute: async function ([nctId], context) {
    const url = coda.withQueryParams(`${ApiBaseUrl}/studies/${nctId}`, {format: "json", markupFormat: "markdown"});
    const response = await context.fetcher.fetch({method: "GET", url});
    return makeStudyRefined(response.body);
  },
});

pack.addSyncTable({
  name: "Studies",
  identityName: "Study",
  schema: StudySchemaRefined,
  formula: {
    name: "Studies",
    description: "Returns data of multiple studies.",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "conditions",
        description: "Conditions or disease",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "terms",
        description: "Other terms",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "location",
        description: "Location terms.",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "titles",
        description: "Title / acronym",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "intervention",
        description: "Intervention / treatment",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "outcome",
        description: "Outcome measure",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "sponsor",
        description: "Sponsor / collaborator",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "lead",
        description: "Lead sponsor name",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "id",
        description: "Study ID",
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
        autocomplete: StudySchema.properties.ProtocolSection.properties.StatusModule.properties.OverallStatus.options,
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
      // filter.* and postFilter.* parameters have same effect as there is no aggregation calculation.
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "aggFilters",
        description:
          "Apply aggregation filters, aggregation counts will not be provided. The value is comma- or pipe-separated list of pairs filter_id:space-separated list of option keys for the checked options.",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "geoDecay",
        description:
          "Set proximity factor by distance from geo location to the closest LocationGeoPoint of a study. Ignored, if geo parameter is not set or response contains more than 10,000 studies.",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.StringArray,
        name: "fields",
        description:
          "If specified, must be non-empty comma- or pipe-separated list of fields to return. If unspecified, all fields will be returned. Order of the fields does not matter.",
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.StringArray,
        name: "sort",
        description:
          "Comma- or pipe-separated list of sorting options of the studies. Every list item contains a field/piece name and an optional sort direction (asc for ascending or desc for descending) after colon character. List of eligible fields here: https://www.clinicaltrials.gov/data-api/about-api/study-data-structure",
        optional: true,
      }),
    ],
    execute: async function (
      [
        cond,
        term,
        locn,
        titles,
        intr,
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
        aggFilters,
        geoDecay,
        fields,
        sort,
      ],
      context
    ) {
      const url = coda.withQueryParams(`${ApiBaseUrl}/studies`, {
        format: "json",
        markupFormat: "markdown",
        "query.cond": cond,
        "query.term": term,
        "query.locn": locn,
        "query.titles": titles,
        "query.intr": intr,
        "query.outc": outc,
        "query.spons": spons,
        "query.lead": lead,
        "query.id": id,
        "query.patient": patient,
        "filter.overallStatus": overallStatus,
        "filter.geo": geo,
        "filter.ids": ids,
        "filter.advanced": advanced,
        "filter.synonyms": synonyms,
        aggFilters: aggFilters,
        geoDecay: geoDecay,
        fields: fields?.join(",") || undefined,
        sort: sort?.join(",") || undefined,
        pageToken: context.sync.continuation?.nextPageToken,
      });
      const response = await context.fetcher.fetch<components["schemas"]["PagedStudies"]>({method: "GET", url});

      return {
        result: response.body.studies.map((s) => makeStudyRefined(s)),
        continuation: {nextPageToken: response.body.nextPageToken},
      };
    },
  },
});
