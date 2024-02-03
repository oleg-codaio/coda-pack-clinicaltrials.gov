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
    name: {type: coda.ValueType.String},
    nested: {type: coda.ValueType.Boolean},
    piece: {type: coda.ValueType.String},
    rules: {type: coda.ValueType.String},
    sourceType: {type: coda.ValueType.String},
    synonyms: {type: coda.ValueType.Boolean},
    title: {type: coda.ValueType.String},
    type: {type: coda.ValueType.String},
  },
});

export const FieldNodeListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: FieldNodeSchema,
});

export const SearchPartSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    isEnum: {type: coda.ValueType.Boolean},
    isSynonyms: {type: coda.ValueType.Boolean},
    pieces: {type: coda.ValueType.Array, items: {type: coda.ValueType.String}},
    type: {type: coda.ValueType.String},
    weight: {type: coda.ValueType.Number},
  },
});

export const SearchAreaSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    name: {type: coda.ValueType.String},
    param: {type: coda.ValueType.String},
    parts: {type: coda.ValueType.Array, items: SearchPartSchema},
    uiLabel: {type: coda.ValueType.String},
  },
});

export const SearchDocumentSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    areas: {type: coda.ValueType.Array, items: SearchAreaSchema},
    name: {type: coda.ValueType.String},
  },
});

export const SearchDocumentListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: SearchDocumentSchema,
});

export const EnumItemSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    exceptions: {type: coda.ValueType.Object, properties: {}},
    legacyValue: {type: coda.ValueType.String},
    value: {type: coda.ValueType.String},
  },
});

export const EnumInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    pieces: {type: coda.ValueType.Array, items: {type: coda.ValueType.String}},
    type: {type: coda.ValueType.String},
    values: {type: coda.ValueType.Array, items: EnumItemSchema},
  },
});

export const EnumInfoListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: EnumInfoSchema,
});

export const StudySizeSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    sizeBytes: {type: coda.ValueType.Number},
  },
});

export const DistItemSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    sizeRange: {type: coda.ValueType.String},
    studiesCount: {type: coda.ValueType.Number},
  },
});

export const GzipStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    averageSizeBytes: {type: coda.ValueType.Number},
    largestStudies: {type: coda.ValueType.Array, items: StudySizeSchema},
    percentiles: {type: coda.ValueType.Object, properties: {}},
    ranges: {type: coda.ValueType.Array, items: DistItemSchema},
    totalStudies: {type: coda.ValueType.Number},
  },
});

export const ListSizeSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    size: {type: coda.ValueType.Number},
    studiesCount: {type: coda.ValueType.Number},
  },
});

export const ListSizesSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String},
    maxSize: {type: coda.ValueType.Number},
    minSize: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    topSizes: {type: coda.ValueType.Array, items: ListSizeSchema},
    uniqueSizesCount: {type: coda.ValueType.Number},
  },
});

export const ListSizesListSchema = coda.makeSchema({
  type: coda.ValueType.Array,
  items: ListSizesSchema,
});

export const ValueCountSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    studiesCount: {type: coda.ValueType.Number},
    value: {type: coda.ValueType.String},
  },
});

export const FieldStatsTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const EnumStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String},
    missingStudiesCount: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    topValues: {type: coda.ValueType.Array, items: ValueCountSchema},
    type: FieldStatsTypeSchema,
    uniqueValuesCount: {type: coda.ValueType.Number},
  },
});

export const LongestStringSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    length: {type: coda.ValueType.Number},
    nctId: {type: coda.ValueType.String},
    value: {type: coda.ValueType.String},
  },
});

export const StringStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String},
    longest: LongestStringSchema,
    missingStudiesCount: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    topValues: {type: coda.ValueType.Array, items: ValueCountSchema},
    type: FieldStatsTypeSchema,
    uniqueValuesCount: {type: coda.ValueType.Number},
  },
});

export const DateStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    field: {type: coda.ValueType.String},
    formats: {type: coda.ValueType.Array, items: {type: coda.ValueType.String}},
    max: {type: coda.ValueType.String},
    min: {type: coda.ValueType.String},
    missingStudiesCount: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    type: FieldStatsTypeSchema,
  },
});

export const IntegerStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    avg: {type: coda.ValueType.Number},
    field: {type: coda.ValueType.String},
    max: {type: coda.ValueType.Number},
    min: {type: coda.ValueType.Number},
    missingStudiesCount: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    type: FieldStatsTypeSchema,
  },
});

export const NumberStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    avg: {type: coda.ValueType.Number},
    field: {type: coda.ValueType.String},
    max: {type: coda.ValueType.Number},
    min: {type: coda.ValueType.Number},
    missingStudiesCount: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    type: FieldStatsTypeSchema,
  },
});

export const BooleanStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    falseCount: {type: coda.ValueType.Number},
    field: {type: coda.ValueType.String},
    missingStudiesCount: {type: coda.ValueType.Number},
    piece: {type: coda.ValueType.String},
    trueCount: {type: coda.ValueType.Number},
    type: FieldStatsTypeSchema,
  },
});

export const VersionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    apiVersion: {type: coda.ValueType.String},
    dataTimestamp: {type: coda.ValueType.String},
  },
});

export const OrgStudyIdTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const OrgStudyIdInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    type: OrgStudyIdTypeSchema,
    link: {type: coda.ValueType.String},
  },
});

export const SecondaryIdTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const SecondaryIdInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    type: SecondaryIdTypeSchema,
    domain: {type: coda.ValueType.String},
    link: {type: coda.ValueType.String},
  },
});

export const AgencyClassSchema = coda.makeSchema({type: coda.ValueType.String});

export const OrganizationSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    fullName: {type: coda.ValueType.String},
    class: AgencyClassSchema,
  },
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
});

export const PartialDateSchema = coda.makeSchema({type: coda.ValueType.String});

export const StatusSchema = coda.makeSchema({type: coda.ValueType.String});

export const ExpandedAccessStatusSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const ExpandedAccessInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    hasExpandedAccess: {type: coda.ValueType.Boolean},
    nctId: {type: coda.ValueType.String},
    statusForNctId: ExpandedAccessStatusSchema,
  },
});

export const DateTypeSchema = coda.makeSchema({type: coda.ValueType.String});

export const PartialDateStructSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {date: PartialDateSchema, type: DateTypeSchema},
});

export const DateStructSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {date: {type: coda.ValueType.String}, type: DateTypeSchema},
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
    studyFirstSubmitDate: {type: coda.ValueType.String},
    studyFirstSubmitQcDate: {type: coda.ValueType.String},
    studyFirstPostDateStruct: DateStructSchema,
    resultsFirstSubmitDate: {type: coda.ValueType.String},
    resultsFirstSubmitQcDate: {type: coda.ValueType.String},
    resultsFirstPostDateStruct: DateStructSchema,
    dispFirstSubmitDate: {type: coda.ValueType.String},
    dispFirstSubmitQcDate: {type: coda.ValueType.String},
    dispFirstPostDateStruct: DateStructSchema,
    lastUpdateSubmitDate: {type: coda.ValueType.String},
    lastUpdatePostDateStruct: DateStructSchema,
  },
});

export const ResponsiblePartyTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
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
});

export const SponsorSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {name: {type: coda.ValueType.String}, class: AgencyClassSchema},
});

export const SponsorCollaboratorsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    responsibleParty: ResponsiblePartySchema,
    leadSponsor: SponsorSchema,
    collaborators: {type: coda.ValueType.Array, items: SponsorSchema},
  },
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
});

export const DescriptionModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    briefSummary: {type: coda.ValueType.String},
    detailedDescription: {type: coda.ValueType.String},
  },
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
});

export const StudyTypeSchema = coda.makeSchema({type: coda.ValueType.String});

export const ExpandedAccessTypesSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    individual: {type: coda.ValueType.Boolean},
    intermediate: {type: coda.ValueType.Boolean},
    treatment: {type: coda.ValueType.Boolean},
  },
});

export const PhaseSchema = coda.makeSchema({type: coda.ValueType.String});

export const DesignAllocationSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const InterventionalAssignmentSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const PrimaryPurposeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const ObservationalModelSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const DesignTimePerspectiveSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const DesignMaskingSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const WhoMaskedSchema = coda.makeSchema({type: coda.ValueType.String});

export const MaskingBlockSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    masking: DesignMaskingSchema,
    maskingDescription: {type: coda.ValueType.String},
    whoMasked: {type: coda.ValueType.Array, items: WhoMaskedSchema},
  },
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
});

export const BioSpecRetentionSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const BioSpecSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    retention: BioSpecRetentionSchema,
    description: {type: coda.ValueType.String},
  },
});

export const EnrollmentTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const EnrollmentInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    count: {type: coda.ValueType.Number},
    type: EnrollmentTypeSchema,
  },
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
});

export const ArmGroupTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
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
});

export const InterventionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
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
});

export const ArmsInterventionsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    armGroups: {type: coda.ValueType.Array, items: ArmGroupSchema},
    interventions: {type: coda.ValueType.Array, items: InterventionSchema},
  },
});

export const OutcomeSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    measure: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
    timeFrame: {type: coda.ValueType.String},
  },
});

export const OutcomesModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    primaryOutcomes: {type: coda.ValueType.Array, items: OutcomeSchema},
    secondaryOutcomes: {type: coda.ValueType.Array, items: OutcomeSchema},
    otherOutcomes: {type: coda.ValueType.Array, items: OutcomeSchema},
  },
});

export const SexSchema = coda.makeSchema({type: coda.ValueType.String});

export const StandardAgeSchema = coda.makeSchema({type: coda.ValueType.String});

export const SamplingMethodSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const EligibilityModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    eligibilityCriteria: {type: coda.ValueType.String},
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
});

export const ContactRoleSchema = coda.makeSchema({type: coda.ValueType.String});

export const ContactSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    name: {type: coda.ValueType.String},
    role: ContactRoleSchema,
    phone: {type: coda.ValueType.String},
    phoneExt: {type: coda.ValueType.String},
    email: {type: coda.ValueType.String},
  },
});

export const OfficialRoleSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const OfficialSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    name: {type: coda.ValueType.String},
    affiliation: {type: coda.ValueType.String},
    role: OfficialRoleSchema,
  },
});

export const RecruitmentStatusSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const GeoPointSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    lat: {type: coda.ValueType.Number},
    lon: {type: coda.ValueType.Number},
  },
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
});

export const ContactsLocationsModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    centralContacts: {type: coda.ValueType.Array, items: ContactSchema},
    overallOfficials: {type: coda.ValueType.Array, items: OfficialSchema},
    locations: {type: coda.ValueType.Array, items: LocationSchema},
  },
});

export const ReferenceTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const RetractionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    pmid: {type: coda.ValueType.String},
    source: {type: coda.ValueType.String},
  },
});

export const ReferenceSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    pmid: {type: coda.ValueType.String},
    type: ReferenceTypeSchema,
    citation: {type: coda.ValueType.String},
    retractions: {type: coda.ValueType.Array, items: RetractionSchema},
  },
});

export const SeeAlsoLinkSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    label: {type: coda.ValueType.String},
    url: {type: coda.ValueType.String},
  },
});

export const AvailIpdSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    type: {type: coda.ValueType.String},
    url: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
  },
});

export const ReferencesModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    references: {type: coda.ValueType.Array, items: ReferenceSchema},
    seeAlsoLinks: {type: coda.ValueType.Array, items: SeeAlsoLinkSchema},
    availIpds: {type: coda.ValueType.Array, items: AvailIpdSchema},
  },
});

export const IpdSharingSchema = coda.makeSchema({type: coda.ValueType.String});

export const IpdSharingInfoTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
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
});

export const FlowGroupSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    title: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
  },
});

export const FlowStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    groupId: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
    numSubjects: {type: coda.ValueType.String},
    numUnits: {type: coda.ValueType.String},
  },
});

export const FlowMilestoneSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
    achievements: {type: coda.ValueType.Array, items: FlowStatsSchema},
  },
});

export const DropWithdrawSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: {type: coda.ValueType.String},
    comment: {type: coda.ValueType.String},
    reasons: {type: coda.ValueType.Array, items: FlowStatsSchema},
  },
});

export const FlowPeriodSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    milestones: {type: coda.ValueType.Array, items: FlowMilestoneSchema},
    dropWithdraws: {type: coda.ValueType.Array, items: DropWithdrawSchema},
  },
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
});

export const MeasureGroupSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    title: {type: coda.ValueType.String},
    description: {type: coda.ValueType.String},
  },
});

export const DenomCountSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    groupId: {type: coda.ValueType.String},
    value: {type: coda.ValueType.String},
  },
});

export const DenomSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    units: {type: coda.ValueType.String},
    counts: {type: coda.ValueType.Array, items: DenomCountSchema},
  },
});

export const MeasureParamSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const MeasureDispersionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
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
});

export const MeasureCategorySchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    measurements: {type: coda.ValueType.Array, items: MeasurementSchema},
  },
});

export const MeasureClassSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    title: {type: coda.ValueType.String},
    denoms: {type: coda.ValueType.Array, items: DenomSchema},
    categories: {type: coda.ValueType.Array, items: MeasureCategorySchema},
  },
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
});

export const OutcomeMeasureTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const ReportingStatusSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const AnalysisDispersionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const ConfidenceIntervalNumSidesSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const NonInferiorityTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
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
});

export const OutcomeMeasuresModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    outcomeMeasures: {type: coda.ValueType.Array, items: OutcomeMeasureSchema},
  },
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
});

export const EventAssessmentSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const EventStatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    groupId: {type: coda.ValueType.String},
    numEvents: {type: coda.ValueType.Number},
    numAffected: {type: coda.ValueType.Number},
    numAtRisk: {type: coda.ValueType.Number},
  },
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
});

export const LimitationsAndCaveatsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {description: {type: coda.ValueType.String}},
});

export const AgreementRestrictionTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const CertainAgreementSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    piSponsorEmployee: {type: coda.ValueType.Boolean},
    restrictionType: AgreementRestrictionTypeSchema,
    restrictiveAgreement: {type: coda.ValueType.Boolean},
    otherDetails: {type: coda.ValueType.String},
  },
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
});

export const MoreInfoModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    limitationsAndCaveats: LimitationsAndCaveatsSchema,
    certainAgreement: CertainAgreementSchema,
    pointOfContact: PointOfContactSchema,
  },
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
});

export const UnpostedEventTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const UnpostedEventSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: UnpostedEventTypeSchema,
    date: {type: coda.ValueType.String},
    dateUnknown: {type: coda.ValueType.Boolean},
  },
});

export const UnpostedAnnotationSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    unpostedResponsibleParty: {type: coda.ValueType.String},
    unpostedEvents: {type: coda.ValueType.Array, items: UnpostedEventSchema},
  },
});

export const ViolationEventTypeSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const ViolationEventSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    type: ViolationEventTypeSchema,
    description: {type: coda.ValueType.String},
    creationDate: {type: coda.ValueType.String},
    issuedDate: {type: coda.ValueType.String},
    releaseDate: {type: coda.ValueType.String},
    postedDate: {type: coda.ValueType.String},
  },
});

export const ViolationAnnotationSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    violationEvents: {type: coda.ValueType.Array, items: ViolationEventSchema},
  },
});

export const AnnotationModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    unpostedAnnotation: UnpostedAnnotationSchema,
    violationAnnotation: ViolationAnnotationSchema,
  },
});

export const AnnotationSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {annotationModule: AnnotationModuleSchema},
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
    date: {type: coda.ValueType.String},
    uploadDate: DateTimeMinutesSchema,
    filename: {type: coda.ValueType.String},
    size: {type: coda.ValueType.Number},
  },
});

export const LargeDocumentModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    noSap: {type: coda.ValueType.Boolean},
    largeDocs: {type: coda.ValueType.Array, items: LargeDocSchema},
  },
});

export const DocumentSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {largeDocumentModule: LargeDocumentModuleSchema},
});

export const FirstMcpInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {postDateStruct: DateStructSchema},
});

export const SubmissionInfoSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    releaseDate: {type: coda.ValueType.String},
    unreleaseDate: {type: coda.ValueType.String},
    unreleaseDateUnknown: {type: coda.ValueType.Boolean},
    resetDate: {type: coda.ValueType.String},
    mcpReleaseN: {type: coda.ValueType.Number},
  },
});

export const SubmissionTrackingSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    estimatedResultsFirstSubmitDate: {type: coda.ValueType.String},
    firstMcpInfo: FirstMcpInfoSchema,
    submissionInfos: {type: coda.ValueType.Array, items: SubmissionInfoSchema},
  },
});

export const BmiLimitsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    minBmi: {type: coda.ValueType.Number},
    maxBmi: {type: coda.ValueType.Number},
  },
});

export const ModelPredictionsSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {bmiLimits: BmiLimitsSchema},
});

export const MiscInfoModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    versionHolder: {type: coda.ValueType.String},
    removedCountries: {
      type: coda.ValueType.Array,
      items: {type: coda.ValueType.String},
    },
    submissionTracking: SubmissionTrackingSchema,
    modelPredictions: ModelPredictionsSchema,
  },
});

export const MeshSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    term: {type: coda.ValueType.String},
  },
});

export const BrowseLeafRelevanceSchema = coda.makeSchema({
  type: coda.ValueType.String,
});

export const BrowseLeafSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    id: {type: coda.ValueType.String},
    name: {type: coda.ValueType.String},
    asFound: {type: coda.ValueType.String},
    relevance: BrowseLeafRelevanceSchema,
  },
});

export const BrowseBranchSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    abbrev: {type: coda.ValueType.String},
    name: {type: coda.ValueType.String},
  },
});

export const BrowseModuleSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    meshes: {type: coda.ValueType.Array, items: MeshSchema},
    ancestors: {type: coda.ValueType.Array, items: MeshSchema},
    browseLeaves: {type: coda.ValueType.Array, items: BrowseLeafSchema},
    browseBranches: {type: coda.ValueType.Array, items: BrowseBranchSchema},
  },
});

export const DerivedSectionSchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    miscInfoModule: MiscInfoModuleSchema,
    conditionBrowseModule: BrowseModuleSchema,
    interventionBrowseModule: BrowseModuleSchema,
  },
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
});

export const errorMessageSchema = coda.makeSchema({
  type: coda.ValueType.String,
});
