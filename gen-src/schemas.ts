// Auto-generated from ClinicalTrials.gov OpenAPI spec version 2.0.0-beta1.
import * as coda from "@codahq/packs-sdk";

export const FieldNodeSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    altPieceNames: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
    children: {
      type: coda.ValueType.Array,
      items: {
        type: coda.ValueType.Object,
        properties: {},
        includeUnknownProperties: true,
      },
    },
    dedLink: {type: coda.ValueType.String},
    definition: {type: coda.ValueType.String},
    historicOnly: {type: coda.ValueType.Boolean},
    indexedOnly: {type: coda.ValueType.Boolean},
    isEnum: {type: coda.ValueType.Boolean},
    maxChars: {type: coda.ValueType.Number},
    name: {type: coda.ValueType.String, required: true},
    nested: {type: coda.ValueType.Boolean},
    piece: {type: coda.ValueType.String, required: true},
    rules: {type: coda.ValueType.String},
    sourceType: {type: coda.ValueType.String, required: true},
    synonyms: {type: coda.ValueType.Boolean},
    title: {type: coda.ValueType.String},
    type: {type: coda.ValueType.String, required: true},
  },
});

export const FieldNodeListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: FieldNodeSchema,
});

export const SearchPartSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    isEnum: {type: coda.ValueType.Boolean, required: true},
    isSynonyms: {type: coda.ValueType.Boolean, required: true},
    pieces: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
      required: true,
    },
    type: {type: coda.ValueType.String, required: true},
    weight: {type: coda.ValueType.Number, required: true},
  },
});

export const SearchAreaSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    name: {type: coda.ValueType.String, required: true},
    param: {type: coda.ValueType.String},
    parts: {
      type: coda.ValueType.Array,
      items: SearchPartSchema,
      required: true,
    },
    uiLabel: {type: coda.ValueType.String},
  },
});

export const SearchDocumentSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    areas: {
      type: coda.ValueType.Array,
      items: SearchAreaSchema,
      required: true,
    },
    name: {type: coda.ValueType.String, required: true},
  },
});

export const SearchDocumentListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: SearchDocumentSchema,
});

export const EnumItemSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    exceptions: {
      type: coda.ValueType.Object,
      properties: {},
      includeUnknownProperties: true,
    },
    legacyValue: {type: coda.ValueType.String, required: true},
    value: {type: coda.ValueType.String, required: true},
  },
});

export const EnumInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    pieces: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
      required: true,
    },
    type: {type: coda.ValueType.String, required: true},
    values: {type: coda.ValueType.Array, items: EnumItemSchema, required: true},
  },
});

export const EnumInfoListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: EnumInfoSchema,
});

export const StudySizeSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String, required: true},
    sizeBytes: {type: coda.ValueType.Number, required: true},
  },
});

export const DistItemSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    sizeRange: {type: coda.ValueType.String, required: true},
    studiesCount: {type: coda.ValueType.Number, required: true},
  },
});

export const GzipStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    averageSizeBytes: {type: coda.ValueType.Number, required: true},
    largestStudies: {
      type: coda.ValueType.Array,
      items: StudySizeSchema,
      required: true,
    },
    percentiles: {
      type: coda.ValueType.Object,
      properties: {},
      includeUnknownProperties: true,
      required: true,
    },
    ranges: {type: coda.ValueType.Array, items: DistItemSchema, required: true},
    totalStudies: {type: coda.ValueType.Number, required: true},
  },
});

export const ListSizeSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    size: {type: coda.ValueType.Number, required: true},
    studiesCount: {type: coda.ValueType.Number, required: true},
  },
});

export const ListSizesSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String, required: true},
    maxSize: {type: coda.ValueType.Number},
    minSize: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String, required: true},
    topSizes: {type: coda.ValueType.Array, items: ListSizeSchema},
    uniqueSizesCount: {type: coda.ValueType.Number, required: true},
  },
});

export const ListSizesListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: ListSizesSchema,
});

export const ValueCountSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    studiesCount: {type: coda.ValueType.Number, required: true},
    value: {type: coda.ValueType.String, required: true},
  },
});

export const FieldStatsTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Enum", value: "ENUM"},
    {display: "String", value: "STRING"},
    {display: "Date", value: "DATE"},
    {display: "Integer", value: "INTEGER"},
    {display: "Number", value: "NUMBER"},
    {display: "Boolean", value: "BOOLEAN"},
  ],
});

export const EnumStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String, required: true},
    missingStudiesCount: {type: coda.ValueType.Number, required: true},
    piece: {type: coda.ValueType.String, required: true},
    topValues: {type: coda.ValueType.Array, items: ValueCountSchema},
    type: FieldStatsTypeSchema,
    uniqueValuesCount: {type: coda.ValueType.Number, required: true},
  },
});

export const LongestStringSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    length: {type: coda.ValueType.Number, required: true},
    nctId: {type: coda.ValueType.String, required: true},
    value: {type: coda.ValueType.String, required: true},
  },
});

export const StringStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String, required: true},
    longest: LongestStringSchema,
    missingStudiesCount: {type: coda.ValueType.Number, required: true},
    piece: {type: coda.ValueType.String, required: true},
    topValues: {type: coda.ValueType.Array, items: ValueCountSchema},
    type: FieldStatsTypeSchema,
    uniqueValuesCount: {type: coda.ValueType.Number, required: true},
  },
});

export const DateStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String, required: true},
    formats: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
      required: true,
    },
    max: {type: coda.ValueType.String},
    min: {type: coda.ValueType.String},
    missingStudiesCount: {type: coda.ValueType.Number, required: true},
    piece: {type: coda.ValueType.String, required: true},
    type: FieldStatsTypeSchema,
  },
});

export const IntegerStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    avg: {type: coda.ValueType.Number},
    field: {type: coda.ValueType.String, required: true},
    max: {type: coda.ValueType.Number},
    min: {type: coda.ValueType.Number},
    missingStudiesCount: {type: coda.ValueType.Number, required: true},
    piece: {type: coda.ValueType.String, required: true},
    type: FieldStatsTypeSchema,
  },
});

export const NumberStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    avg: {type: coda.ValueType.Number},
    field: {type: coda.ValueType.String, required: true},
    max: {type: coda.ValueType.Number},
    min: {type: coda.ValueType.Number},
    missingStudiesCount: {type: coda.ValueType.Number, required: true},
    piece: {type: coda.ValueType.String, required: true},
    type: FieldStatsTypeSchema,
  },
});

export const BooleanStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    falseCount: {type: coda.ValueType.Number, required: true},
    field: {type: coda.ValueType.String, required: true},
    missingStudiesCount: {type: coda.ValueType.Number, required: true},
    piece: {type: coda.ValueType.String, required: true},
    trueCount: {type: coda.ValueType.Number, required: true},
    type: FieldStatsTypeSchema,
  },
});

export const VersionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    apiVersion: {type: coda.ValueType.String, required: true},
    dataTimestamp: {type: coda.ValueType.String},
  },
});

export const OrgStudyIdTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Nih", value: "NIH"},
    {display: "Fda", value: "FDA"},
    {display: "Va", value: "VA"},
    {display: "Cdc", value: "CDC"},
    {display: "Ahrq", value: "AHRQ"},
    {display: "Samhsa", value: "SAMHSA"},
  ],
});

export const OrgStudyIdInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    type: OrgStudyIdTypeSchema,
    link: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const SecondaryIdTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Nih", value: "NIH"},
    {display: "Fda", value: "FDA"},
    {display: "Va", value: "VA"},
    {display: "Cdc", value: "CDC"},
    {display: "Ahrq", value: "AHRQ"},
    {display: "Samhsa", value: "SAMHSA"},
    {display: "Other Grant", value: "OTHER_GRANT"},
    {display: "Eudract Number", value: "EUDRACT_NUMBER"},
    {display: "Registry", value: "REGISTRY"},
    {display: "Other", value: "OTHER"},
  ],
});

export const SecondaryIdInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    type: SecondaryIdTypeSchema,
    domain: {type: coda.ValueType.String},
    link: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const AgencyClassSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Nih", value: "NIH"},
    {display: "Fed", value: "FED"},
    {display: "Other Gov", value: "OTHER_GOV"},
    {display: "Indiv", value: "INDIV"},
    {display: "Industry", value: "INDUSTRY"},
    {display: "Network", value: "NETWORK"},
    {display: "Ambig", value: "AMBIG"},
    {display: "Other", value: "OTHER"},
    {display: "Unknown", value: "UNKNOWN"},
  ],
});

export const OrganizationSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    fullName: {type: coda.ValueType.String},
    class: AgencyClassSchema,
  },
  includeUnknownProperties: true,
});

export const IdentificationModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    nctId: {type: coda.ValueType.String},
    nctIdAliases: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
    orgStudyIdInfo: OrgStudyIdInfoSchema,
    secondaryIdInfos: {
      type: coda.ValueType.Array,
      items: SecondaryIdInfoSchema,
    },
    briefTitle: {type: coda.ValueType.String},
    officialTitle: {type: coda.ValueType.String},
    acronym: {type: coda.ValueType.String},
    organization: OrganizationSchema,
  },
  includeUnknownProperties: true,
});

export const PartialDateSchema = coda.makeSchema({type: coda.ValueType.String});

export const StatusSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Active Not Recruiting", value: "ACTIVE_NOT_RECRUITING"},
    {display: "Completed", value: "COMPLETED"},
    {display: "Enrolling By Invitation", value: "ENROLLING_BY_INVITATION"},
    {display: "Not Yet Recruiting", value: "NOT_YET_RECRUITING"},
    {display: "Recruiting", value: "RECRUITING"},
    {display: "Suspended", value: "SUSPENDED"},
    {display: "Terminated", value: "TERMINATED"},
    {display: "Withdrawn", value: "WITHDRAWN"},
    {display: "Available", value: "AVAILABLE"},
    {display: "No Longer Available", value: "NO_LONGER_AVAILABLE"},
    {display: "Temporarily Not Available", value: "TEMPORARILY_NOT_AVAILABLE"},
    {display: "Approved For Marketing", value: "APPROVED_FOR_MARKETING"},
    {display: "Withheld", value: "WITHHELD"},
    {display: "Unknown", value: "UNKNOWN"},
  ],
});

export const ExpandedAccessStatusSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Available", value: "AVAILABLE"},
    {display: "No Longer Available", value: "NO_LONGER_AVAILABLE"},
    {display: "Temporarily Not Available", value: "TEMPORARILY_NOT_AVAILABLE"},
    {display: "Approved For Marketing", value: "APPROVED_FOR_MARKETING"},
  ],
});

export const ExpandedAccessInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    hasExpandedAccess: {type: coda.ValueType.Boolean},
    nctId: {type: coda.ValueType.String},
    statusForNctId: ExpandedAccessStatusSchema,
  },
  includeUnknownProperties: true,
});

export const DateTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Actual", value: "ACTUAL"},
    {display: "Estimated", value: "ESTIMATED"},
  ],
});

export const PartialDateStructSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {date: PartialDateSchema, type: DateTypeSchema},
  includeUnknownProperties: true,
});

export const DateStructSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    date: {type: coda.ValueType.String, codaType: coda.ValueHintType.Date},
    type: DateTypeSchema,
  },
  includeUnknownProperties: true,
});

export const StatusModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    statusVerifiedDate: PartialDateSchema,
    overallStatus: StatusSchema,
    lastKnownStatus: StatusSchema,
    delayedPosting: {type: coda.ValueType.Boolean},
    whyStopped: {type: coda.ValueType.String},
    expandedAccessInfo: ExpandedAccessInfoSchema,
    startDateStruct: PartialDateStructSchema,
    primaryCompletionDateStruct: PartialDateStructSchema,
    completionDateStruct: PartialDateStructSchema,
    studyFirstSubmitDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    studyFirstSubmitQcDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    studyFirstPostDateStruct: DateStructSchema,
    resultsFirstSubmitDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    resultsFirstSubmitQcDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    resultsFirstPostDateStruct: DateStructSchema,
    dispFirstSubmitDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    dispFirstSubmitQcDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    dispFirstPostDateStruct: DateStructSchema,
    lastUpdateSubmitDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    lastUpdatePostDateStruct: DateStructSchema,
  },
  includeUnknownProperties: true,
});

export const ResponsiblePartyTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Sponsor", value: "SPONSOR"},
    {display: "Principal Investigator", value: "PRINCIPAL_INVESTIGATOR"},
    {display: "Sponsor Investigator", value: "SPONSOR_INVESTIGATOR"},
  ],
});

export const ResponsiblePartySchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: ResponsiblePartyTypeSchema,
    investigatorFullName: {type: coda.ValueType.String},
    investigatorTitle: {type: coda.ValueType.String},
    investigatorAffiliation: {type: coda.ValueType.String},
    oldNameTitle: {type: coda.ValueType.String},
    oldOrganization: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const SponsorSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {name: {type: coda.ValueType.String}, class: AgencyClassSchema},
  includeUnknownProperties: true,
});

export const SponsorCollaboratorsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    responsibleParty: ResponsiblePartySchema,
    leadSponsor: SponsorSchema,
    collaborators: {type: coda.ValueType.Array, items: SponsorSchema},
  },
  includeUnknownProperties: true,
});

export const OversightModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    oversightHasDmc: {type: coda.ValueType.Boolean},
    isFdaRegulatedDrug: {type: coda.ValueType.Boolean},
    isFdaRegulatedDevice: {type: coda.ValueType.Boolean},
    isUnapprovedDevice: {type: coda.ValueType.Boolean},
    isPpsd: {type: coda.ValueType.Boolean},
    isUsExport: {type: coda.ValueType.Boolean},
    fdaaa801Violation: {type: coda.ValueType.Boolean},
  },
  includeUnknownProperties: true,
});

export const DescriptionModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    briefSummary: {type: coda.ValueType.String},
    detailedDescription: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const ConditionsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    conditions: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
    keywords: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
  },
  includeUnknownProperties: true,
});

export const StudyTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Expanded Access", value: "EXPANDED_ACCESS"},
    {display: "Interventional", value: "INTERVENTIONAL"},
    {display: "Observational", value: "OBSERVATIONAL"},
  ],
});

export const ExpandedAccessTypesSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    individual: {type: coda.ValueType.Boolean},
    intermediate: {type: coda.ValueType.Boolean},
    treatment: {type: coda.ValueType.Boolean},
  },
  includeUnknownProperties: true,
});

export const PhaseSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Na", value: "NA"},
    {display: "Early Phase1", value: "EARLY_PHASE1"},
    {display: "Phase1", value: "PHASE1"},
    {display: "Phase2", value: "PHASE2"},
    {display: "Phase3", value: "PHASE3"},
    {display: "Phase4", value: "PHASE4"},
  ],
});

export const DesignAllocationSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Randomized", value: "RANDOMIZED"},
    {display: "Non Randomized", value: "NON_RANDOMIZED"},
    {display: "Na", value: "NA"},
  ],
});

export const InterventionalAssignmentSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Single Group", value: "SINGLE_GROUP"},
    {display: "Parallel", value: "PARALLEL"},
    {display: "Crossover", value: "CROSSOVER"},
    {display: "Factorial", value: "FACTORIAL"},
    {display: "Sequential", value: "SEQUENTIAL"},
  ],
});

export const PrimaryPurposeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Treatment", value: "TREATMENT"},
    {display: "Prevention", value: "PREVENTION"},
    {display: "Diagnostic", value: "DIAGNOSTIC"},
    {display: "Ect", value: "ECT"},
    {display: "Supportive Care", value: "SUPPORTIVE_CARE"},
    {display: "Screening", value: "SCREENING"},
    {display: "Health Services Research", value: "HEALTH_SERVICES_RESEARCH"},
    {display: "Basic Science", value: "BASIC_SCIENCE"},
    {display: "Device Feasibility", value: "DEVICE_FEASIBILITY"},
    {display: "Other", value: "OTHER"},
  ],
});

export const ObservationalModelSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Cohort", value: "COHORT"},
    {display: "Case Control", value: "CASE_CONTROL"},
    {display: "Case Only", value: "CASE_ONLY"},
    {display: "Case Crossover", value: "CASE_CROSSOVER"},
    {display: "Ecologic Or Community", value: "ECOLOGIC_OR_COMMUNITY"},
    {display: "Family Based", value: "FAMILY_BASED"},
    {display: "Defined Population", value: "DEFINED_POPULATION"},
    {display: "Natural History", value: "NATURAL_HISTORY"},
    {display: "Other", value: "OTHER"},
  ],
});

export const DesignTimePerspectiveSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Retrospective", value: "RETROSPECTIVE"},
    {display: "Prospective", value: "PROSPECTIVE"},
    {display: "Cross Sectional", value: "CROSS_SECTIONAL"},
    {display: "Other", value: "OTHER"},
  ],
});

export const DesignMaskingSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "None", value: "NONE"},
    {display: "Single", value: "SINGLE"},
    {display: "Double", value: "DOUBLE"},
    {display: "Triple", value: "TRIPLE"},
    {display: "Quadruple", value: "QUADRUPLE"},
  ],
});

export const WhoMaskedSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Participant", value: "PARTICIPANT"},
    {display: "Care Provider", value: "CARE_PROVIDER"},
    {display: "Investigator", value: "INVESTIGATOR"},
    {display: "Outcomes Assessor", value: "OUTCOMES_ASSESSOR"},
  ],
});

export const MaskingBlockSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    masking: DesignMaskingSchema,
    maskingDescription: {type: coda.ValueType.String},
    whoMasked: {type: coda.ValueType.Array, items: WhoMaskedSchema},
  },
  includeUnknownProperties: true,
});

export const DesignInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    allocation: DesignAllocationSchema,
    interventionModel: InterventionalAssignmentSchema,
    interventionModelDescription: {type: coda.ValueType.String},
    primaryPurpose: PrimaryPurposeSchema,
    observationalModel: ObservationalModelSchema,
    timePerspective: DesignTimePerspectiveSchema,
    maskingInfo: MaskingBlockSchema,
  },
  includeUnknownProperties: true,
});

export const BioSpecRetentionSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "None Retained", value: "NONE_RETAINED"},
    {display: "Samples With Dna", value: "SAMPLES_WITH_DNA"},
    {display: "Samples Without Dna", value: "SAMPLES_WITHOUT_DNA"},
  ],
});

export const BioSpecSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    retention: BioSpecRetentionSchema,
    description: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const EnrollmentTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Actual", value: "ACTUAL"},
    {display: "Estimated", value: "ESTIMATED"},
  ],
});

export const EnrollmentInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    count: {type: coda.ValueType.Number},
    type: EnrollmentTypeSchema,
  },
  includeUnknownProperties: true,
});

export const DesignModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    studyType: StudyTypeSchema,
    nPtrsToThisExpAccNctId: {type: coda.ValueType.Number},
    expandedAccessTypes: ExpandedAccessTypesSchema,
    patientRegistry: {type: coda.ValueType.Boolean},
    targetDuration: {type: coda.ValueType.String},
    phases: {type: coda.ValueType.Array, items: PhaseSchema},
    designInfo: DesignInfoSchema,
    bioSpec: BioSpecSchema,
    enrollmentInfo: EnrollmentInfoSchema,
  },
  includeUnknownProperties: true,
});

export const ArmGroupTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Experimental", value: "EXPERIMENTAL"},
    {display: "Active Comparator", value: "ACTIVE_COMPARATOR"},
    {display: "Placebo Comparator", value: "PLACEBO_COMPARATOR"},
    {display: "Sham Comparator", value: "SHAM_COMPARATOR"},
    {display: "No Intervention", value: "NO_INTERVENTION"},
    {display: "Other", value: "OTHER"},
  ],
});

export const ArmGroupSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    label: {type: coda.ValueType.String},
    type: ArmGroupTypeSchema,
    description: {type: coda.ValueType.String},
    interventionNames: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
  },
  includeUnknownProperties: true,
});

export const InterventionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Behavioral", value: "BEHAVIORAL"},
    {display: "Biological", value: "BIOLOGICAL"},
    {display: "Combination Product", value: "COMBINATION_PRODUCT"},
    {display: "Device", value: "DEVICE"},
    {display: "Diagnostic Test", value: "DIAGNOSTIC_TEST"},
    {display: "Dietary Supplement", value: "DIETARY_SUPPLEMENT"},
    {display: "Drug", value: "DRUG"},
    {display: "Genetic", value: "GENETIC"},
    {display: "Procedure", value: "PROCEDURE"},
    {display: "Radiation", value: "RADIATION"},
    {display: "Other", value: "OTHER"},
  ],
});

export const InterventionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: InterventionTypeSchema,
    name: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
    armGroupLabels: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
    otherNames: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
  },
  includeUnknownProperties: true,
});

export const ArmsInterventionsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    armGroups: {type: coda.ValueType.Array, items: ArmGroupSchema},
    interventions: {type: coda.ValueType.Array, items: InterventionSchema},
  },
  includeUnknownProperties: true,
});

export const OutcomeSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    measure: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
    timeFrame: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const OutcomesModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    primaryOutcomes: {type: coda.ValueType.Array, items: OutcomeSchema},
    secondaryOutcomes: {type: coda.ValueType.Array, items: OutcomeSchema},
    otherOutcomes: {type: coda.ValueType.Array, items: OutcomeSchema},
  },
  includeUnknownProperties: true,
});

export const SexSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Female", value: "FEMALE"},
    {display: "Male", value: "MALE"},
    {display: "All", value: "ALL"},
  ],
});

export const StandardAgeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Child", value: "CHILD"},
    {display: "Adult", value: "ADULT"},
    {display: "Older Adult", value: "OLDER_ADULT"},
  ],
});

export const SamplingMethodSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Probability Sample", value: "PROBABILITY_SAMPLE"},
    {display: "Non Probability Sample", value: "NON_PROBABILITY_SAMPLE"},
  ],
});

export const EligibilityModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    eligibilityCriteria: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Markdown,
    },
    healthyVolunteers: {type: coda.ValueType.Boolean},
    sex: SexSchema,
    genderBased: {type: coda.ValueType.Boolean},
    genderDescription: {type: coda.ValueType.String},
    minimumAge: {type: coda.ValueType.String},
    maximumAge: {type: coda.ValueType.String},
    stdAges: {type: coda.ValueType.Array, items: StandardAgeSchema},
    studyPopulation: {type: coda.ValueType.String},
    samplingMethod: SamplingMethodSchema,
  },
  includeUnknownProperties: true,
});

export const ContactRoleSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Study Chair", value: "STUDY_CHAIR"},
    {display: "Study Director", value: "STUDY_DIRECTOR"},
    {display: "Principal Investigator", value: "PRINCIPAL_INVESTIGATOR"},
    {display: "Sub Investigator", value: "SUB_INVESTIGATOR"},
    {display: "Contact", value: "CONTACT"},
  ],
});

export const ContactSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    name: {type: coda.ValueType.String},
    role: ContactRoleSchema,
    phone: {type: coda.ValueType.String},
    phoneExt: {type: coda.ValueType.String},
    email: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const OfficialRoleSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Study Chair", value: "STUDY_CHAIR"},
    {display: "Study Director", value: "STUDY_DIRECTOR"},
    {display: "Principal Investigator", value: "PRINCIPAL_INVESTIGATOR"},
    {display: "Sub Investigator", value: "SUB_INVESTIGATOR"},
  ],
});

export const OfficialSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    name: {type: coda.ValueType.String},
    affiliation: {type: coda.ValueType.String},
    role: OfficialRoleSchema,
  },
  includeUnknownProperties: true,
});

export const RecruitmentStatusSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Active Not Recruiting", value: "ACTIVE_NOT_RECRUITING"},
    {display: "Completed", value: "COMPLETED"},
    {display: "Enrolling By Invitation", value: "ENROLLING_BY_INVITATION"},
    {display: "Not Yet Recruiting", value: "NOT_YET_RECRUITING"},
    {display: "Recruiting", value: "RECRUITING"},
    {display: "Suspended", value: "SUSPENDED"},
    {display: "Terminated", value: "TERMINATED"},
    {display: "Withdrawn", value: "WITHDRAWN"},
    {display: "Available", value: "AVAILABLE"},
  ],
});

export const GeoPointSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    lat: {type: coda.ValueType.Number, required: true},
    lon: {type: coda.ValueType.Number, required: true},
  },
  includeUnknownProperties: true,
});

export const LocationSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    facility: {type: coda.ValueType.String},
    status: RecruitmentStatusSchema,
    city: {type: coda.ValueType.String},
    state: {type: coda.ValueType.String},
    zip: {type: coda.ValueType.String},
    country: {type: coda.ValueType.String},
    contacts: {type: coda.ValueType.Array, items: ContactSchema},
    geoPoint: GeoPointSchema,
  },
  includeUnknownProperties: true,
});

export const ContactsLocationsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    centralContacts: {type: coda.ValueType.Array, items: ContactSchema},
    overallOfficials: {type: coda.ValueType.Array, items: OfficialSchema},
    locations: {type: coda.ValueType.Array, items: LocationSchema},
  },
  includeUnknownProperties: true,
});

export const ReferenceTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Background", value: "BACKGROUND"},
    {display: "Result", value: "RESULT"},
    {display: "Derived", value: "DERIVED"},
  ],
});

export const RetractionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    pmid: {type: coda.ValueType.String},
    source: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const ReferenceSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    pmid: {type: coda.ValueType.String},
    type: ReferenceTypeSchema,
    citation: {type: coda.ValueType.String},
    retractions: {type: coda.ValueType.Array, items: RetractionSchema},
  },
  includeUnknownProperties: true,
});

export const SeeAlsoLinkSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    label: {type: coda.ValueType.String},
    url: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const AvailIpdSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    type: {type: coda.ValueType.String},
    url: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const ReferencesModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    references: {type: coda.ValueType.Array, items: ReferenceSchema},
    seeAlsoLinks: {type: coda.ValueType.Array, items: SeeAlsoLinkSchema},
    availIpds: {type: coda.ValueType.Array, items: AvailIpdSchema},
  },
  includeUnknownProperties: true,
});

export const IpdSharingSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Yes", value: "YES"},
    {display: "No", value: "NO"},
    {display: "Undecided", value: "UNDECIDED"},
  ],
});

export const IpdSharingInfoTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Study Protocol", value: "STUDY_PROTOCOL"},
    {display: "Sap", value: "SAP"},
    {display: "Icf", value: "ICF"},
    {display: "Csr", value: "CSR"},
    {display: "Analytic Code", value: "ANALYTIC_CODE"},
  ],
});

export const IpdSharingStatementModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    ipdSharing: IpdSharingSchema,
    description: {type: coda.ValueType.String},
    infoTypes: {type: coda.ValueType.Array, items: IpdSharingInfoTypeSchema},
    timeFrame: {type: coda.ValueType.String},
    accessCriteria: {type: coda.ValueType.String},
    url: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const ProtocolSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    identificationModule: IdentificationModuleSchema,
    statusModule: StatusModuleSchema,
    sponsorCollaboratorsModule: SponsorCollaboratorsModuleSchema,
    oversightModule: OversightModuleSchema,
    descriptionModule: DescriptionModuleSchema,
    conditionsModule: ConditionsModuleSchema,
    designModule: DesignModuleSchema,
    armsInterventionsModule: ArmsInterventionsModuleSchema,
    outcomesModule: OutcomesModuleSchema,
    eligibilityModule: EligibilityModuleSchema,
    contactsLocationsModule: ContactsLocationsModuleSchema,
    referencesModule: ReferencesModuleSchema,
    ipdSharingStatementModule: IpdSharingStatementModuleSchema,
  },
  includeUnknownProperties: true,
});

export const FlowGroupSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    title: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const FlowStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    groupId: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
    numSubjects: {type: coda.ValueType.String},
    numUnits: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const FlowMilestoneSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
    achievements: {type: coda.ValueType.Array, items: FlowStatsSchema},
  },
  includeUnknownProperties: true,
});

export const DropWithdrawSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
    reasons: {type: coda.ValueType.Array, items: FlowStatsSchema},
  },
  includeUnknownProperties: true,
});

export const FlowPeriodSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    milestones: {type: coda.ValueType.Array, items: FlowMilestoneSchema},
    dropWithdraws: {type: coda.ValueType.Array, items: DropWithdrawSchema},
  },
  includeUnknownProperties: true,
});

export const ParticipantFlowModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    preAssignmentDetails: {type: coda.ValueType.String},
    recruitmentDetails: {type: coda.ValueType.String},
    typeUnitsAnalyzed: {type: coda.ValueType.String},
    groups: {type: coda.ValueType.Array, items: FlowGroupSchema},
    periods: {type: coda.ValueType.Array, items: FlowPeriodSchema},
  },
  includeUnknownProperties: true,
});

export const MeasureGroupSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    title: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const DenomCountSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    groupId: {type: coda.ValueType.String},
    value: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const DenomSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    units: {type: coda.ValueType.String},
    counts: {type: coda.ValueType.Array, items: DenomCountSchema},
  },
  includeUnknownProperties: true,
});

export const MeasureParamSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Geometric Mean", value: "GEOMETRIC_MEAN"},
    {
      display: "Geometric Least Squares Mean",
      value: "GEOMETRIC_LEAST_SQUARES_MEAN",
    },
    {display: "Least Squares Mean", value: "LEAST_SQUARES_MEAN"},
    {display: "Log Mean", value: "LOG_MEAN"},
    {display: "Mean", value: "MEAN"},
    {display: "Median", value: "MEDIAN"},
    {display: "Number", value: "NUMBER"},
    {display: "Count Of Participants", value: "COUNT_OF_PARTICIPANTS"},
    {display: "Count Of Units", value: "COUNT_OF_UNITS"},
  ],
});

export const MeasureDispersionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Na", value: "NA"},
    {display: "Standard Deviation", value: "STANDARD_DEVIATION"},
    {display: "Standard Error", value: "STANDARD_ERROR"},
    {display: "Inter Quartile Range", value: "INTER_QUARTILE_RANGE"},
    {display: "Full Range", value: "FULL_RANGE"},
    {display: "Confidence 80", value: "CONFIDENCE_80"},
    {display: "Confidence 90", value: "CONFIDENCE_90"},
    {display: "Confidence 95", value: "CONFIDENCE_95"},
    {display: "Confidence 975", value: "CONFIDENCE_975"},
    {display: "Confidence 99", value: "CONFIDENCE_99"},
    {display: "Confidence Other", value: "CONFIDENCE_OTHER"},
    {display: "Geometric Coefficient", value: "GEOMETRIC_COEFFICIENT"},
  ],
});

export const MeasurementSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    groupId: {type: coda.ValueType.String},
    value: {type: coda.ValueType.String},
    spread: {type: coda.ValueType.String},
    lowerLimit: {type: coda.ValueType.String},
    upperLimit: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const MeasureCategorySchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    measurements: {type: coda.ValueType.Array, items: MeasurementSchema},
  },
  includeUnknownProperties: true,
});

export const MeasureClassSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    denoms: {type: coda.ValueType.Array, items: DenomSchema},
    categories: {type: coda.ValueType.Array, items: MeasureCategorySchema},
  },
  includeUnknownProperties: true,
});

export const BaselineMeasureSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
    populationDescription: {type: coda.ValueType.String},
    paramType: MeasureParamSchema,
    dispersionType: MeasureDispersionTypeSchema,
    unitOfMeasure: {type: coda.ValueType.String},
    calculatePct: {type: coda.ValueType.Boolean},
    denomUnitsSelected: {type: coda.ValueType.String},
    denoms: {type: coda.ValueType.Array, items: DenomSchema},
    classes: {type: coda.ValueType.Array, items: MeasureClassSchema},
  },
  includeUnknownProperties: true,
});

export const BaselineCharacteristicsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    populationDescription: {type: coda.ValueType.String},
    typeUnitsAnalyzed: {type: coda.ValueType.String},
    groups: {type: coda.ValueType.Array, items: MeasureGroupSchema},
    denoms: {type: coda.ValueType.Array, items: DenomSchema},
    measures: {type: coda.ValueType.Array, items: BaselineMeasureSchema},
  },
  includeUnknownProperties: true,
});

export const OutcomeMeasureTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Primary", value: "PRIMARY"},
    {display: "Secondary", value: "SECONDARY"},
    {display: "Other Pre Specified", value: "OTHER_PRE_SPECIFIED"},
    {display: "Post Hoc", value: "POST_HOC"},
  ],
});

export const ReportingStatusSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Not Posted", value: "NOT_POSTED"},
    {display: "Posted", value: "POSTED"},
  ],
});

export const AnalysisDispersionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Standard Deviation", value: "STANDARD_DEVIATION"},
    {display: "Standard Error Of Mean", value: "STANDARD_ERROR_OF_MEAN"},
  ],
});

export const ConfidenceIntervalNumSidesSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "One Sided", value: "ONE_SIDED"},
    {display: "Two Sided", value: "TWO_SIDED"},
  ],
});

export const NonInferiorityTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Superiority", value: "SUPERIORITY"},
    {display: "Non Inferiority", value: "NON_INFERIORITY"},
    {display: "Equivalence", value: "EQUIVALENCE"},
    {display: "Other", value: "OTHER"},
    {
      display: "Non Inferiority Or Equivalence",
      value: "NON_INFERIORITY_OR_EQUIVALENCE",
    },
    {display: "Superiority Or Other", value: "SUPERIORITY_OR_OTHER"},
    {
      display: "Non Inferiority Or Equivalence Legacy",
      value: "NON_INFERIORITY_OR_EQUIVALENCE_LEGACY",
    },
    {
      display: "Superiority Or Other Legacy",
      value: "SUPERIORITY_OR_OTHER_LEGACY",
    },
  ],
});

export const MeasureAnalysisSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    paramType: {type: coda.ValueType.String},
    paramValue: {type: coda.ValueType.String},
    dispersionType: AnalysisDispersionTypeSchema,
    dispersionValue: {type: coda.ValueType.String},
    statisticalMethod: {type: coda.ValueType.String},
    statisticalComment: {type: coda.ValueType.String},
    pValue: {type: coda.ValueType.String},
    pValueComment: {type: coda.ValueType.String},
    ciNumSides: ConfidenceIntervalNumSidesSchema,
    ciPctValue: {type: coda.ValueType.String},
    ciLowerLimit: {type: coda.ValueType.String},
    ciUpperLimit: {type: coda.ValueType.String},
    ciLowerLimitComment: {type: coda.ValueType.String},
    ciUpperLimitComment: {type: coda.ValueType.String},
    estimateComment: {type: coda.ValueType.String},
    testedNonInferiority: {type: coda.ValueType.Boolean},
    nonInferiorityType: NonInferiorityTypeSchema,
    nonInferiorityComment: {type: coda.ValueType.String},
    otherAnalysisDescription: {type: coda.ValueType.String},
    groupDescription: {type: coda.ValueType.String},
    groupIds: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
  },
  includeUnknownProperties: true,
});

export const OutcomeMeasureSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: OutcomeMeasureTypeSchema,
    title: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
    populationDescription: {type: coda.ValueType.String},
    reportingStatus: ReportingStatusSchema,
    anticipatedPostingDate: PartialDateSchema,
    paramType: MeasureParamSchema,
    dispersionType: {type: coda.ValueType.String},
    unitOfMeasure: {type: coda.ValueType.String},
    calculatePct: {type: coda.ValueType.Boolean},
    timeFrame: {type: coda.ValueType.String},
    typeUnitsAnalyzed: {type: coda.ValueType.String},
    denomUnitsSelected: {type: coda.ValueType.String},
    groups: {type: coda.ValueType.Array, items: MeasureGroupSchema},
    denoms: {type: coda.ValueType.Array, items: DenomSchema},
    classes: {type: coda.ValueType.Array, items: MeasureClassSchema},
    analyses: {type: coda.ValueType.Array, items: MeasureAnalysisSchema},
  },
  includeUnknownProperties: true,
});

export const OutcomeMeasuresModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    outcomeMeasures: {type: coda.ValueType.Array, items: OutcomeMeasureSchema},
  },
  includeUnknownProperties: true,
});

export const EventGroupSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    title: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
    deathsNumAffected: {type: coda.ValueType.Number},
    deathsNumAtRisk: {type: coda.ValueType.Number},
    seriousNumAffected: {type: coda.ValueType.Number},
    seriousNumAtRisk: {type: coda.ValueType.Number},
    otherNumAffected: {type: coda.ValueType.Number},
    otherNumAtRisk: {type: coda.ValueType.Number},
  },
  includeUnknownProperties: true,
});

export const EventAssessmentSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Non Systematic Assessment", value: "NON_SYSTEMATIC_ASSESSMENT"},
    {display: "Systematic Assessment", value: "SYSTEMATIC_ASSESSMENT"},
  ],
});

export const EventStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    groupId: {type: coda.ValueType.String},
    numEvents: {type: coda.ValueType.Number},
    numAffected: {type: coda.ValueType.Number},
    numAtRisk: {type: coda.ValueType.Number},
  },
  includeUnknownProperties: true,
});

export const AdverseEventSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    term: {type: coda.ValueType.String},
    organSystem: {type: coda.ValueType.String},
    sourceVocabulary: {type: coda.ValueType.String},
    assessmentType: EventAssessmentSchema,
    notes: {type: coda.ValueType.String},
    stats: {type: coda.ValueType.Array, items: EventStatsSchema},
  },
  includeUnknownProperties: true,
});

export const AdverseEventsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    frequencyThreshold: {type: coda.ValueType.String},
    timeFrame: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
    allCauseMortalityComment: {type: coda.ValueType.String},
    eventGroups: {type: coda.ValueType.Array, items: EventGroupSchema},
    seriousEvents: {type: coda.ValueType.Array, items: AdverseEventSchema},
    otherEvents: {type: coda.ValueType.Array, items: AdverseEventSchema},
  },
  includeUnknownProperties: true,
});

export const LimitationsAndCaveatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {description: {type: coda.ValueType.String}},
  includeUnknownProperties: true,
});

export const AgreementRestrictionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Lte60", value: "LTE60"},
    {display: "Gt60", value: "GT60"},
    {display: "Other", value: "OTHER"},
  ],
});

export const CertainAgreementSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    piSponsorEmployee: {type: coda.ValueType.Boolean},
    restrictionType: AgreementRestrictionTypeSchema,
    restrictiveAgreement: {type: coda.ValueType.Boolean},
    otherDetails: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const PointOfContactSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    organization: {type: coda.ValueType.String},
    email: {type: coda.ValueType.String},
    phone: {type: coda.ValueType.String},
    phoneExt: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const MoreInfoModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    limitationsAndCaveats: LimitationsAndCaveatsSchema,
    certainAgreement: CertainAgreementSchema,
    pointOfContact: PointOfContactSchema,
  },
  includeUnknownProperties: true,
});

export const ResultsSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    participantFlowModule: ParticipantFlowModuleSchema,
    baselineCharacteristicsModule: BaselineCharacteristicsModuleSchema,
    outcomeMeasuresModule: OutcomeMeasuresModuleSchema,
    adverseEventsModule: AdverseEventsModuleSchema,
    moreInfoModule: MoreInfoModuleSchema,
  },
  includeUnknownProperties: true,
});

export const UnpostedEventTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Reset", value: "RESET"},
    {display: "Release", value: "RELEASE"},
    {display: "Unrelease", value: "UNRELEASE"},
  ],
});

export const UnpostedEventSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: UnpostedEventTypeSchema,
    date: {type: coda.ValueType.String, codaType: coda.ValueHintType.Date},
    dateUnknown: {type: coda.ValueType.Boolean},
  },
  includeUnknownProperties: true,
});

export const UnpostedAnnotationSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    unpostedResponsibleParty: {type: coda.ValueType.String},
    unpostedEvents: {type: coda.ValueType.Array, items: UnpostedEventSchema},
  },
  includeUnknownProperties: true,
});

export const ViolationEventTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Violation Identified", value: "VIOLATION_IDENTIFIED"},
    {display: "Correction Confirmed", value: "CORRECTION_CONFIRMED"},
    {display: "Penalty Imposed", value: "PENALTY_IMPOSED"},
  ],
});

export const ViolationEventSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: ViolationEventTypeSchema,
    description: {type: coda.ValueType.String},
    creationDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    issuedDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    releaseDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    postedDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
  },
  includeUnknownProperties: true,
});

export const ViolationAnnotationSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    violationEvents: {type: coda.ValueType.Array, items: ViolationEventSchema},
  },
  includeUnknownProperties: true,
});

export const AnnotationModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    unpostedAnnotation: UnpostedAnnotationSchema,
    violationAnnotation: ViolationAnnotationSchema,
  },
  includeUnknownProperties: true,
});

export const AnnotationSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {annotationModule: AnnotationModuleSchema},
  includeUnknownProperties: true,
});

export const DateTimeMinutesSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const LargeDocSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    typeAbbrev: {type: coda.ValueType.String},
    hasProtocol: {type: coda.ValueType.Boolean},
    hasSap: {type: coda.ValueType.Boolean},
    hasIcf: {type: coda.ValueType.Boolean},
    label: {type: coda.ValueType.String},
    date: {type: coda.ValueType.String, codaType: coda.ValueHintType.Date},
    uploadDate: DateTimeMinutesSchema,
    filename: {type: coda.ValueType.String},
    size: {type: coda.ValueType.Number},
  },
  includeUnknownProperties: true,
});

export const LargeDocumentModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    noSap: {type: coda.ValueType.Boolean},
    largeDocs: {type: coda.ValueType.Array, items: LargeDocSchema},
  },
  includeUnknownProperties: true,
});

export const DocumentSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {largeDocumentModule: LargeDocumentModuleSchema},
  includeUnknownProperties: true,
});

export const FirstMcpInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {postDateStruct: DateStructSchema},
  includeUnknownProperties: true,
});

export const SubmissionInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    releaseDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    unreleaseDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    unreleaseDateUnknown: {type: coda.ValueType.Boolean},
    resetDate: {type: coda.ValueType.String, codaType: coda.ValueHintType.Date},
    mcpReleaseN: {type: coda.ValueType.Number},
  },
  includeUnknownProperties: true,
});

export const SubmissionTrackingSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    estimatedResultsFirstSubmitDate: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    firstMcpInfo: FirstMcpInfoSchema,
    submissionInfos: {type: coda.ValueType.Array, items: SubmissionInfoSchema},
  },
  includeUnknownProperties: true,
});

export const BmiLimitsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    minBmi: {type: coda.ValueType.Number},
    maxBmi: {type: coda.ValueType.Number},
  },
  includeUnknownProperties: true,
});

export const ModelPredictionsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {bmiLimits: BmiLimitsSchema},
  includeUnknownProperties: true,
});

export const MiscInfoModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    versionHolder: {
      type: coda.ValueType.String,
      codaType: coda.ValueHintType.Date,
    },
    removedCountries: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
    submissionTracking: SubmissionTrackingSchema,
    modelPredictions: ModelPredictionsSchema,
  },
  includeUnknownProperties: true,
});

export const MeshSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    term: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const BrowseLeafRelevanceSchema = coda.makeSchema({
  type: coda.ValueType.String,
  codaType: coda.ValueHintType.SelectList,
  options: [
    {display: "Low", value: "LOW"},
    {display: "High", value: "HIGH"},
  ],
});

export const BrowseLeafSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    name: {type: coda.ValueType.String},
    asFound: {type: coda.ValueType.String},
    relevance: BrowseLeafRelevanceSchema,
  },
  includeUnknownProperties: true,
});

export const BrowseBranchSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    abbrev: {type: coda.ValueType.String},
    name: {type: coda.ValueType.String},
  },
  includeUnknownProperties: true,
});

export const BrowseModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    meshes: {type: coda.ValueType.Array, items: MeshSchema},
    ancestors: {type: coda.ValueType.Array, items: MeshSchema},
    browseLeaves: {type: coda.ValueType.Array, items: BrowseLeafSchema},
    browseBranches: {type: coda.ValueType.Array, items: BrowseBranchSchema},
  },
  includeUnknownProperties: true,
});

export const DerivedSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    miscInfoModule: MiscInfoModuleSchema,
    conditionBrowseModule: BrowseModuleSchema,
    interventionBrowseModule: BrowseModuleSchema,
  },
  includeUnknownProperties: true,
});

export const StudySchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    protocolSection: ProtocolSectionSchema,
    resultsSection: ResultsSectionSchema,
    annotationSection: AnnotationSectionSchema,
    documentSection: DocumentSectionSchema,
    derivedSection: DerivedSectionSchema,
    hasResults: {type: coda.ValueType.Boolean},
  },
  includeUnknownProperties: true,
});

export const StudyListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: StudySchema,
});

export const PagedStudiesSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    nextPageToken: {type: coda.ValueType.String},
    studies: StudyListSchema,
    totalCount: {type: coda.ValueType.Number},
  },
});

export const FieldValuesStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String},
    missingStudiesCount: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    topValues: {type: coda.ValueType.Array, items: ValueCountSchema},
    type: FieldStatsTypeSchema,
    uniqueValuesCount: {type: coda.ValueType.Number},
    longest: LongestStringSchema,
    formats: {type: coda.ValueType.Array, items: {type: coda.ValueType.String}},
    max: {type: coda.ValueType.Number},
    min: {type: coda.ValueType.Number},
    avg: {type: coda.ValueType.Number},
    falseCount: {type: coda.ValueType.Number},
    trueCount: {type: coda.ValueType.Number},
  },
  includeUnknownProperties: true,
});

export const FieldValuesStatsListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: FieldValuesStatsSchema,
});

export const StudiesCsvSchema = coda.makeSchema({type: coda.ValueType.String});

export const StudiesZipSchema = coda.makeSchema({type: coda.ValueType.String});

export const StudyFhirSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {},
  includeUnknownProperties: true,
});

export const errorMessageSchema = coda.makeSchema({
  type: coda.ValueType.String,
});
