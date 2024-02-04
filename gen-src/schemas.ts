// Auto-generated from ClinicalTrials.gov API on Sat Feb 03 2024.
import * as coda from "@codahq/packs-sdk";

export const StudySchema = coda.makeSchema({
  type: coda.ValueType.Object,
  properties: {
    ProtocolSection: {
      type: coda.ValueType.Object,
      properties: {
        IdentificationModule: {
          type: coda.ValueType.Object,
          properties: {
            NCTId: {
              type: coda.ValueType.String,
              fromKey: "nctId",
              description:
                'National Clinical Trial (NCT) Identification Number. The unique identification code given to each clinical study upon registration at ClinicalTrials.gov. The format is "NCT" followed by an 8-digit number. Also known as ClinicalTrials.gov Identifier.',
            },
            NCTIdAlias: {
              type: coda.ValueType.String,
              fromKey: "nctIdAliases",
              description:
                'Obsolete or duplicate NCT that\'s associated with a published NCT. Identifier(s) that are considered "Obsolete" or "Duplicate". No study is displayed on public site. Request is redirected/forwarded to another NCT Identifier.',
            },
            OrgStudyIdInfo: {
              type: coda.ValueType.Object,
              properties: {
                OrgStudyId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description:
                    "Organization's Unique Protocol Identification Number. Any unique identifier assigned to the protocol by the sponsor..",
                },
                OrgStudyIdType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "U.S. NIH Grant/Contract", value: "NIH"},
                    {display: "U.S. FDA Grant/Contract", value: "FDA"},
                    {display: "U.S. VA Grant/Contract", value: "VA"},
                    {display: "U.S. CDC Grant/Contract", value: "CDC"},
                    {display: "U.S. AHRQ Grant/Contract", value: "AHRQ"},
                    {display: "U.S. SAMHSA Grant/Contract", value: "SAMHSA"},
                  ],
                  fromKey: "type",
                  description:
                    "Organization Id Type. Type of organization's unique protocol ID.",
                },
                OrgStudyIdLink: {
                  type: coda.ValueType.String,
                  fromKey: "link",
                  description:
                    "Organization ID Link. URL link based on OrgStudyId and OrgStudyIdType input in PRS, include system-generated links to NIH RePORTER, specifically (associated with the types of federal funding identified as OrgStudyIdType).",
                },
              },
              fromKey: "orgStudyIdInfo",
            },
            SecondaryIdInfo: {
              type: coda.ValueType.Object,
              properties: {
                SecondaryId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description:
                    "Secondary ID. An identifier(s) (ID), if any, other than the organization's Unique Protocol Identification Number or the NCT number that is assigned to the clinical study. This includes any unique clinical study identifiers assigned by other publicly available clinical trial registries. If the clinical study is funded in whole or in part by a U.S. Federal Government agency, the complete grant or contract number must be submitted as a Secondary ID..",
                },
                SecondaryIdType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "U.S. NIH Grant/Contract", value: "NIH"},
                    {display: "U.S. FDA Grant/Contract", value: "FDA"},
                    {display: "U.S. VA Grant/Contract", value: "VA"},
                    {display: "U.S. CDC Grant/Contract", value: "CDC"},
                    {display: "U.S. AHRQ Grant/Contract", value: "AHRQ"},
                    {display: "U.S. SAMHSA Grant/Contract", value: "SAMHSA"},
                    {
                      display: "Other Grant/Funding Number",
                      value: "OTHER_GRANT",
                    },
                    {display: "EudraCT Number", value: "EUDRACT_NUMBER"},
                    {display: "Registry Identifier", value: "REGISTRY"},
                    {display: "Other Identifier", value: "OTHER"},
                  ],
                  fromKey: "type",
                  description:
                    "Secondary ID Type. A description of the type of Secondary ID\n•\tU.S. National Institutes of Health (NIH) Grant/Contract Award Number: In the Secondary ID field, include activity code, institute code, and 6-digit serial number. Other components of the full award number (type code, support year and suffix, if applicable) are optional.\n•\tOther Grant/Funding Number: Identifier assigned by a funding organization other than the U.S. NIH; also required to enter the name of the funding organization.\n•\tRegistry Identifier: Number assigned by a clinical trial registry (for example, a registry that is part of the World Health Organization [WHO] Registry Network); also required to enter the name of the clinical trial registry.\n•\tEudraCT Number: Identifier assigned by the European Medicines Agency Clinical Trials Database (EudraCT).\n•\tOther Identifier: Also required to enter a brief description of the identifier (for example, name of organization that issued the identifier)..",
                },
                SecondaryIdDomain: {
                  type: coda.ValueType.String,
                  fromKey: "domain",
                  description:
                    "Secondary ID Description based on ID Type selected. Description of Secondary ID.",
                },
                SecondaryIdLink: {
                  type: coda.ValueType.String,
                  fromKey: "link",
                  description:
                    "Secondary ID Link. URL link based on SecondaryId and SecondaryIdType, including system-generated links to NIH RePORTER, specifically (associated with the types of federal funding identified as SecondaryIdType).",
                },
              },
              fromKey: "secondaryIdInfos",
            },
            BriefTitle: {
              type: coda.ValueType.String,
              fromKey: "briefTitle",
              description:
                "Brief Title. A short title of the clinical study written in language intended for the lay public. The title should include, where possible, information on the participants, condition being evaluated, and intervention(s) studied..",
            },
            OfficialTitle: {
              type: coda.ValueType.String,
              fromKey: "officialTitle",
              description:
                "Official Title. The title of the clinical study, corresponding to the title of the protocol..",
            },
            Acronym: {
              type: coda.ValueType.String,
              fromKey: "acronym",
              description:
                "Acronym. An acronym or abbreviation used publicly to identify the clinical study, if any.",
            },
            Organization: {
              type: coda.ValueType.Object,
              properties: {
                OrgFullName: {
                  type: coda.ValueType.String,
                  fromKey: "fullName",
                  description:
                    "Organization Full Name. A (registered) organization (typically the Responsible Party) that sponsors the clinical  trial (study).",
                },
                OrgClass: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "NIH", value: "NIH"},
                    {display: "FED", value: "FED"},
                    {display: "OTHER_GOV", value: "OTHER_GOV"},
                    {display: "INDIV", value: "INDIV"},
                    {display: "INDUSTRY", value: "INDUSTRY"},
                    {display: "NETWORK", value: "NETWORK"},
                    {display: "AMBIG", value: "AMBIG"},
                    {display: "OTHER", value: "OTHER"},
                    {display: "UNKNOWN", value: "UNKNOWN"},
                  ],
                  fromKey: "class",
                  description: "Organization type. Organization type.",
                },
              },
              fromKey: "organization",
            },
          },
          fromKey: "identificationModule",
          description: "Identification Module.",
        },
        StatusModule: {
          type: coda.ValueType.Object,
          properties: {
            StatusVerifiedDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "statusVerifiedDate",
              description:
                "Record Verification Date. The date on which the responsible party last verified the clinical study information in the entire ClinicalTrials.gov record for the clinical study, even if no additional or updated information is being submitted.",
            },
            OverallStatus: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {
                  display: "Active, not recruiting",
                  value: "ACTIVE_NOT_RECRUITING",
                },
                {display: "Completed", value: "COMPLETED"},
                {
                  display: "Enrolling by invitation",
                  value: "ENROLLING_BY_INVITATION",
                },
                {display: "Not yet recruiting", value: "NOT_YET_RECRUITING"},
                {display: "Recruiting", value: "RECRUITING"},
                {display: "Suspended", value: "SUSPENDED"},
                {display: "Terminated", value: "TERMINATED"},
                {display: "Withdrawn", value: "WITHDRAWN"},
                {display: "Available", value: "AVAILABLE"},
                {display: "No longer available", value: "NO_LONGER_AVAILABLE"},
                {
                  display: "Temporarily not available",
                  value: "TEMPORARILY_NOT_AVAILABLE",
                },
                {
                  display: "Approved for marketing",
                  value: "APPROVED_FOR_MARKETING",
                },
                {display: "Withheld", value: "WITHHELD"},
                {display: "Unknown status", value: "UNKNOWN"},
              ],
              fromKey: "overallStatus",
              description:
                'Overall Recruitment Status or Expanded Access Status. •\tFor INT/OBS, the recruitment status for the clinical study as a whole, based upon the status of the individual sites. If at least one facility in a multi-site clinical study has an Individual Site Status of "Recruiting," then the Overall Recruitment Status for the study must be "Recruiting."\n•\tFor EA, the status of availability of the investigational drug product (including a biological product) through expanded access..',
            },
            LastKnownStatus: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {
                  display: "Active, not recruiting",
                  value: "ACTIVE_NOT_RECRUITING",
                },
                {display: "Completed", value: "COMPLETED"},
                {
                  display: "Enrolling by invitation",
                  value: "ENROLLING_BY_INVITATION",
                },
                {display: "Not yet recruiting", value: "NOT_YET_RECRUITING"},
                {display: "Recruiting", value: "RECRUITING"},
                {display: "Suspended", value: "SUSPENDED"},
                {display: "Terminated", value: "TERMINATED"},
                {display: "Withdrawn", value: "WITHDRAWN"},
                {display: "Available", value: "AVAILABLE"},
                {display: "No longer available", value: "NO_LONGER_AVAILABLE"},
                {
                  display: "Temporarily not available",
                  value: "TEMPORARILY_NOT_AVAILABLE",
                },
                {
                  display: "Approved for marketing",
                  value: "APPROVED_FOR_MARKETING",
                },
                {display: "Withheld", value: "WITHHELD"},
                {display: "Unknown status", value: "UNKNOWN"},
              ],
              fromKey: "lastKnownStatus",
              description:
                "Last Known Status. A study on ClinicalTrials.gov whose last known status was recruiting; not yet recruiting; or active, not recruiting but that has passed its completion date, and the status has not been last verified within the past 2 years..",
            },
            DelayedPosting: {
              type: coda.ValueType.Boolean,
              fromKey: "delayedPosting",
              description:
                'Delayed Posting. At least one studied FDA-regulated device product has not been previously approved or cleared by FDA. Recruitment status is set to "Withheld".',
            },
            WhyStopped: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "whyStopped",
              description:
                'Reason why a study stopped. Reason given for "Suspended", "Terminated" and "Withdrawn" studies.',
            },
            ExpandedAccessInfo: {
              type: coda.ValueType.Object,
              properties: {
                HasExpandedAccess: {
                  type: coda.ValueType.String,
                  fromKey: "hasExpandedAccess",
                  description:
                    "Has EA for compassionate use. An investigational drug product (including biological product) can be available through expanded access for patients who do not qualify for enrollment in a clinical trial..",
                },
                ExpandedAccessNCTId: {
                  type: coda.ValueType.String,
                  fromKey: "nctId",
                  description:
                    "NCT of an EA study. Data Provider can indicate there is an EA study associalted with an INT study but does not have an NCTfor the EA study.",
                },
                ExpandedAccessStatusForNCTId: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Available", value: "AVAILABLE"},
                    {
                      display: "No longer available",
                      value: "NO_LONGER_AVAILABLE",
                    },
                    {
                      display: "Temporarily not available",
                      value: "TEMPORARILY_NOT_AVAILABLE",
                    },
                    {
                      display: "Approved for marketing",
                      value: "APPROVED_FOR_MARKETING",
                    },
                  ],
                  fromKey: "statusForNctId",
                  description:
                    "EA Recruitment Status. recruitment status of the EA study that's linked to INT/OBS.",
                },
              },
              fromKey: "expandedAccessInfo",
              description:
                "Expanded Access Info. EA study info related to an INT/OBS study. Is in the Study Status module for an EA record and in the Oversight module for a study that has EA.",
            },
            StartDateStruct: {
              type: coda.ValueType.Object,
              properties: {
                StartDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Study Start Date. The estimated date on which the clinical study will be open for recruitment of participants, or the actual date on which the first participant was enrolled..",
                },
                StartDateType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description: "Study Start Date Type. Date Type.",
                },
              },
              fromKey: "startDateStruct",
            },
            PrimaryCompletionDateStruct: {
              type: coda.ValueType.Object,
              properties: {
                PrimaryCompletionDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Primary Completion Date. The date that the final participant was examined or received an intervention for the purposes of final collection of data for the primary outcome, whether the clinical study concluded according to the pre-specified protocol or was terminated. In the case of clinical studies with more than one primary outcome measure with different completion dates, this term refers to the date on which data collection is completed for all of the primary outcomes..",
                },
                PrimaryCompletionDateType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description: "Primary Completion Date Type. Date Type.",
                },
              },
              fromKey: "primaryCompletionDateStruct",
            },
            CompletionDateStruct: {
              type: coda.ValueType.Object,
              properties: {
                CompletionDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Study Completion Date. The date the final participant was examined or received an intervention for purposes of final collection of data for the primary and secondary outcome measures and adverse events (for example, last participant’s last visit), whether the clinical study concluded according to the pre-specified protocol or was terminated..",
                },
                CompletionDateType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description: "Study Completion Date Type. Date Type.",
                },
              },
              fromKey: "completionDateStruct",
            },
            StudyFirstSubmitDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "studyFirstSubmitDate",
              description:
                "Study First Submitted Date. The date on which the study sponsor or investigator first submitted a study record to ClinicalTrials.gov. There is typically a delay of a few days between the first submitted date and the record's availability on ClinicalTrials.gov (the first posted date)..",
            },
            StudyFirstSubmitQCDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "studyFirstSubmitQcDate",
              description:
                "Study First Submission Date that Met QC Criteria. The date on which the study sponsor or investigator first submits a study record that is consistent with National Library of Medicine (NLM) quality control (QC) review criteria. The sponsor or investigator may need to revise and submit a study record one or more times before NLM's QC review criteria are met. It is the responsibility of the sponsor or investigator to ensure that the study record is consistent with the NLM QC review criteria..",
            },
            StudyFirstPostDateStruct: {
              type: coda.ValueType.Object,
              properties: {
                StudyFirstPostDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Study First Posted Date. The date on which the study record was first available on ClinicalTrials.gov after National Library of Medicine (NLM) quality control (QC) review has concluded. There is typically a delay of a few days between the date the study sponsor or investigator submitted the study record and the first posted date..",
                },
                StudyFirstPostDateType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description: "First Study Posted Date Type.",
                },
              },
              fromKey: "studyFirstPostDateStruct",
            },
            ResultsFirstSubmitDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "resultsFirstSubmitDate",
              description:
                "Results First Submitted Date. The date on which the study sponsor or investigator first submits a study record with summary results information. There is typically a delay between the results first submitted date and when summary results information becomes available on ClinicalTrials.gov (the results first posted date)..",
            },
            ResultsFirstSubmitQCDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "resultsFirstSubmitQcDate",
              description:
                "Results First Submitted that Met QC Criteria. The date on which the study sponsor or investigator first submits a study record with summary results information that is consistent with National Library of Medicine (NLM) quality control (QC) review criteria. The sponsor or investigator may need to revise and submit results information one or more times before NLM's QC review criteria are met. It is the responsibility of the sponsor or investigator to ensure that the study record is consistent with the NLM QC review criteria..",
            },
            ResultsFirstPostDateStruct: {
              type: coda.ValueType.Object,
              properties: {
                ResultsFirstPostDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Results First Posted Date. The date on which summary results information was first available on ClinicalTrials.gov after National Library of Medicine (NLM) quality control (QC) review has concluded. There is typically a delay between the date the study sponsor or investigator first submits summary results information (the results first submitted date) and the results first posted date. Some results information may be available at an earlier date if Results First Posted with QC Comments..",
                },
                ResultsFirstPostDateType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description:
                    'Results First Posted Date Type. Results first posted date type. Due to historical reason, some studies have date type "Estimate".',
                },
              },
              fromKey: "resultsFirstPostDateStruct",
            },
            DispFirstSubmitDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "dispFirstSubmitDate",
              description:
                "Certification/Extension (aka Delayed Results) First Submitted Date. The date on which the study sponsor or investigator first submitted a certification or an extension request to delay submission of results. A sponsor or investigator who submits a certification can delay results submission up to 2 years after this date, unless certain events occur sooner. There is typically a delay between the date the certification or extension request was submitted and the date the information is first available on ClinicalTrials.gov (certification/extension first posted)..",
            },
            DispFirstSubmitQCDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "dispFirstSubmitQcDate",
              description:
                "Certification/Extension First Submitted that Passed QC Review. Certification/extension first submitted that met QC criteria.",
            },
            DispFirstPostDateStruct: {
              type: coda.ValueType.Object,
              properties: {
                DispFirstPostDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Certification/Extension First Posted Date. The date on which information about a certification to delay submission of results or an extension request was first available on ClinicalTrials.gov. ClinicalTrials.gov does not indicate whether the submission was a certification or extension request. There is typically a delay between the date the study sponsor or investigator submitted the certification or extension request and the first posted date..",
                },
                DispFirstPostDateType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description:
                    'Certification/Extension First Posted Date Type. Due to data requirements and collections over the years, some studies might have "Estimate" dates.',
                },
              },
              fromKey: "dispFirstPostDateStruct",
            },
            LastUpdateSubmitDate: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "lastUpdateSubmitDate",
              description:
                "Last Update Submitted Date. The most recent date on which the study sponsor or investigator submitted changes to a study record to ClinicalTrials.gov. There is typically a delay of a few days between the last update submitted date and when the date changes are posted on ClinicalTrials.gov (the last update posted date)..",
            },
            LastUpdatePostDateStruct: {
              type: coda.ValueType.Object,
              properties: {
                LastUpdatePostDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Last Update Posted Date. The most recent date on which changes to a study record were made available on ClinicalTrials.gov. There may be a delay between when the changes were submitted to ClinicalTrials.gov by the study's sponsor or investigator (the last update submitted date) and the last update posted date..",
                },
                LastUpdatePostDateType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description:
                    'Last Update Posted Date Type. Due to data requirements and collections over the years, some studies might have "Estimate" dates.',
                },
              },
              fromKey: "lastUpdatePostDateStruct",
              description: "Data structure for last update posted.",
            },
          },
          fromKey: "statusModule",
          description: "Status Module.",
        },
        SponsorCollaboratorsModule: {
          type: coda.ValueType.Object,
          properties: {
            ResponsibleParty: {
              type: coda.ValueType.Object,
              properties: {
                ResponsiblePartyType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Sponsor", value: "SPONSOR"},
                    {
                      display: "Principal Investigator",
                      value: "PRINCIPAL_INVESTIGATOR",
                    },
                    {
                      display: "Sponsor-Investigator",
                      value: "SPONSOR_INVESTIGATOR",
                    },
                  ],
                  fromKey: "type",
                  description:
                    "Responsible Party Type. An indication of whether the responsible party is the sponsor, the sponsor-investigator, or a principal investigator designated by the sponsor to be the responsible party.",
                },
                ResponsiblePartyInvestigatorFullName: {
                  type: coda.ValueType.String,
                  fromKey: "investigatorFullName",
                  description:
                    "Responsible Party Investigator Full Name. Name of Investigator, including first and last name.",
                },
                ResponsiblePartyInvestigatorTitle: {
                  type: coda.ValueType.String,
                  fromKey: "investigatorTitle",
                  description:
                    "Responsible Party Investigator Title. The official title of the investigator at the primary organizational affiliation.",
                },
                ResponsiblePartyInvestigatorAffiliation: {
                  type: coda.ValueType.String,
                  fromKey: "investigatorAffiliation",
                  description:
                    "Responsible Party Investigator Affiliation. Primary organizational affiliation of the individual.",
                },
                ResponsiblePartyOldNameTitle: {
                  type: coda.ValueType.String,
                  fromKey: "oldNameTitle",
                  description:
                    "Older format for Responsible Party Investigator Title. Responsible Party was entered in the old format in PRS.",
                },
                ResponsiblePartyOldOrganization: {
                  type: coda.ValueType.String,
                  fromKey: "oldOrganization",
                  description:
                    "Older format for Responsible Party Investigator Organization. Responsible Party was entered in the old format in PRS.",
                },
              },
              fromKey: "responsibleParty",
              description:
                "Responsible Party. The person responsible for submitting information about a clinical study to ClinicalTrials.gov and updating that information. Usually the study sponsor or investigator..",
            },
            LeadSponsor: {
              type: coda.ValueType.Object,
              properties: {
                LeadSponsorName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Lead Sponsor Name. Lead Sponsor Name.",
                },
                LeadSponsorClass: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "NIH", value: "NIH"},
                    {display: "FED", value: "FED"},
                    {display: "OTHER_GOV", value: "OTHER_GOV"},
                    {display: "INDIV", value: "INDIV"},
                    {display: "INDUSTRY", value: "INDUSTRY"},
                    {display: "NETWORK", value: "NETWORK"},
                    {display: "AMBIG", value: "AMBIG"},
                    {display: "OTHER", value: "OTHER"},
                    {display: "UNKNOWN", value: "UNKNOWN"},
                  ],
                  fromKey: "class",
                  description:
                    "Leas Sponsor Type. Sponsor organization type: Type of lead sponsor.",
                },
              },
              fromKey: "leadSponsor",
              description:
                "Lead Sponsor. The organization or person who initiates the study and who has authority and control over the study..",
            },
            Collaborator: {
              type: coda.ValueType.Object,
              properties: {
                CollaboratorName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Collaborator Name. Collaborator Name.",
                },
                CollaboratorClass: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "NIH", value: "NIH"},
                    {display: "FED", value: "FED"},
                    {display: "OTHER_GOV", value: "OTHER_GOV"},
                    {display: "INDIV", value: "INDIV"},
                    {display: "INDUSTRY", value: "INDUSTRY"},
                    {display: "NETWORK", value: "NETWORK"},
                    {display: "AMBIG", value: "AMBIG"},
                    {display: "OTHER", value: "OTHER"},
                    {display: "UNKNOWN", value: "UNKNOWN"},
                  ],
                  fromKey: "class",
                  description: "Collaborator Type. Type of collaborator.",
                },
              },
              fromKey: "collaborators",
              description:
                "Collaborator. Other organizations, if any, providing support. Support may include funding, design, implementation, data analysis or reporting.  The responsible party is responsible for confirming all collaborators before listing them.",
            },
          },
          fromKey: "sponsorCollaboratorsModule",
        },
        OversightModule: {
          type: coda.ValueType.Object,
          properties: {
            OversightHasDMC: {
              type: coda.ValueType.Boolean,
              fromKey: "oversightHasDmc",
              description:
                "Has Data Monitoring Committee (DMC). Indicate whether a data monitoring committee has been appointed for this study. The data monitoring committee (board) is a group of independent scientists who are appointed to monitor the safety and scientific integrity of a human research intervention, and to make recommendations to the sponsor regarding the stopping of the trial for efficacy, for harms or for futility. The composition of the committee is dependent upon the scientific skills and knowledge required for monitoring the particular study..",
            },
            IsFDARegulatedDrug: {
              type: coda.ValueType.Boolean,
              fromKey: "isFdaRegulatedDrug",
              description:
                "Is FDA Regulated Drug. Indication that a clinical study is studying a drug product (including a biological product) subject to section 505 of the Federal Food, Drug, and Cosmetic Act or to section 351 of the Public Health Service Act..",
            },
            IsFDARegulatedDevice: {
              type: coda.ValueType.Boolean,
              fromKey: "isFdaRegulatedDevice",
              description:
                "Is FDA Regulated Device. Indication that a clinical study is studying a device product subject to section 510(k), 515, or 520(m) of the Federal Food, Drug, and Cosmetic Act..",
            },
            IsUnapprovedDevice: {
              type: coda.ValueType.Boolean,
              fromKey: "isUnapprovedDevice",
              description:
                "Is Unapproved Device. Indication that at least one device product studied in the clinical study has not been previously approved or cleared by the U.S. Food and Drug Administration (FDA) for one or more uses..",
            },
            IsPPSD: {
              type: coda.ValueType.Boolean,
              fromKey: "isPpsd",
              description:
                "Pediatric Postmarket Surveillance of a Device Product. Indication that a clinical study that includes a U.S. FDA-regulated device product is a pediatric postmarket surveillance of a device product ordered under section 522 of the Federal Food, Drug, and Cosmetic Act..",
            },
            IsUSExport: {
              type: coda.ValueType.Boolean,
              fromKey: "isUsExport",
              description:
                "Product Exported from US. Whether any drug product (including a biological product) or device product studied in the clinical study is manufactured in the United States or one of its territories and exported for study in a clinical study in another country..",
            },
            FDAAA801Violation: {
              type: coda.ValueType.Boolean,
              fromKey: "fdaaa801Violation",
            },
          },
          fromKey: "oversightModule",
          description: "Oversight Module.",
        },
        DescriptionModule: {
          type: coda.ValueType.Object,
          properties: {
            BriefSummary: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "briefSummary",
              description:
                "Brief Summary. A short description of the clinical study, including a brief statement of the clinical study's hypothesis, written in language intended for the lay public..",
            },
            DetailedDescription: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "detailedDescription",
              description:
                "Detailed Description. Extended description of the protocol, including more technical information (as compared to the Brief Summary), if desired. Do not include the entire protocol; do not duplicate information recorded in other data elements, such as Eligibility Criteria or outcome measures..",
            },
          },
          fromKey: "descriptionModule",
          description: "Description Module.",
        },
        ConditionsModule: {
          type: coda.ValueType.Object,
          properties: {
            Condition: {
              type: coda.ValueType.String,
              fromKey: "conditions",
              description:
                "Condition/Disease. Primary Disease or Condition Being Studied in the Trial, or the Focus of the Study. Usually valid condition terms from MeSH.\nThe disease, disorder, syndrome, illness, or injury that is being studied. On ClinicalTrials.gov, conditions may also include other health-related issues, such as lifespan, quality of life, and health risks..",
            },
            Keyword: {
              type: coda.ValueType.String,
              fromKey: "keywords",
              description:
                "Keyword. Words or phrases that best describe the protocol. Keywords help users find studies in the database. Use NLM's Medical Subject Heading (MeSH)-controlled vocabulary terms where appropriate..",
            },
          },
          fromKey: "conditionsModule",
          description: "Conditions Module.",
        },
        DesignModule: {
          type: coda.ValueType.Object,
          properties: {
            StudyType: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {display: "Expanded Access", value: "EXPANDED_ACCESS"},
                {display: "Interventional", value: "INTERVENTIONAL"},
                {display: "Observational", value: "OBSERVATIONAL"},
              ],
              fromKey: "studyType",
              description:
                "Study Type. Study Type: The nature of the investigation or investigational use for which clinical study information is being submitted..",
            },
            NPtrsToThisExpAccNCTId: {
              type: coda.ValueType.Number,
              fromKey: "nPtrsToThisExpAccNctId",
              description:
                "Number of References to an Expanded Access Study. Number of studies that reference this EA study.",
            },
            ExpandedAccessTypes: {
              type: coda.ValueType.Object,
              properties: {
                ExpAccTypeIndividual: {
                  type: coda.ValueType.Boolean,
                  fromKey: "individual",
                  description:
                    "Individual Patients. For individual participants, including for emergency use, as specified in 21 CFR 312.310. Allows a single patient, with a serious disease or condition who cannot participate in a clinical trial, access to a drug or biological product that has not been approved by the FDA. This category also includes access in an emergency situation..",
                },
                ExpAccTypeIntermediate: {
                  type: coda.ValueType.Boolean,
                  fromKey: "intermediate",
                  description:
                    "Intermediate-type Population. For intermediate-size participant populations, as specified in 21 CFR 312.315. Allows more than one patient (but generally fewer patients than through a Treatment IND/Protocol) access to a drug or biological product that has not been approved by the FDA. This type of expanded access is used when multiple patients with the same disease or condition seek access to a specific drug or biological product that has not been approved by the FDA..",
                },
                ExpAccTypeTreatment: {
                  type: coda.ValueType.Boolean,
                  fromKey: "treatment",
                  description:
                    "Treatment IND/Protocol. Under a treatment IND or treatment protocol, as specified in 21 CFR 312.320. Allows a large, widespread population access to a drug or biological product that has not been approved by the FDA. This type of expanded access can only be provided if the product is already being developed for marketing for the same use as the expanded access use..",
                },
              },
              fromKey: "expandedAccessTypes",
              description:
                "Expanded Access Type. The type(s) of expanded access for which the investigational drug product (including a biological product) is available, as specified in U.S. FDA regulations.",
            },
            PatientRegistry: {
              type: coda.ValueType.Boolean,
              fromKey: "patientRegistry",
              description:
                "Patient Registry. A type of observational study that collects information about patients' medical conditions and/or treatments to better understand how a condition or treatment affects patients in the real world..",
            },
            TargetDuration: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.DateTime,
              fromKey: "targetDuration",
              description:
                "Target Follow-Up Duration. For Patient Registries, the anticipated time period over which each participant is to be followed. Provide a number and select a Unit of Time (years, months, weeks, days)..",
            },
            Phase: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {display: "Not Applicable", value: "NA"},
                {display: "Early Phase 1", value: "EARLY_PHASE1"},
                {display: "Phase 1", value: "PHASE1"},
                {display: "Phase 2", value: "PHASE2"},
                {display: "Phase 3", value: "PHASE3"},
                {display: "Phase 4", value: "PHASE4"},
              ],
              fromKey: "phases",
              description:
                "Study Phase. For a clinical trial of a drug product (including a biological product), the numerical phase of such clinical trial, consistent with terminology in 21 CFR 312.21 and in 21 CFR 312.85 for phase 4 studies..",
            },
            DesignInfo: {
              type: coda.ValueType.Object,
              properties: {
                DesignAllocation: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Randomized", value: "RANDOMIZED"},
                    {display: "Non-Randomized", value: "NON_RANDOMIZED"},
                    {display: "N/A", value: "NA"},
                  ],
                  fromKey: "allocation",
                  description:
                    "Design Allocation. A method used to assign participants to an arm of a clinical study. The types of allocation are randomized allocation and nonrandomized..",
                },
                DesignInterventionModel: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Single Group Assignment", value: "SINGLE_GROUP"},
                    {display: "Parallel Assignment", value: "PARALLEL"},
                    {display: "Crossover Assignment", value: "CROSSOVER"},
                    {display: "Factorial Assignment", value: "FACTORIAL"},
                    {display: "Sequential Assignment", value: "SEQUENTIAL"},
                  ],
                  fromKey: "interventionModel",
                  description:
                    "Interventional Study Design. The general design of the strategy for assigning interventions to participants in a clinical study. Types of intervention models include: single group assignment, parallel assignment, cross-over assignment, and factorial assignment..",
                },
                DesignInterventionModelDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "interventionModelDescription",
                  description:
                    "Interventional Study Design Description. A description of the manner in which the clinical trial will be conducted.",
                },
                DesignPrimaryPurpose: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Treatment", value: "TREATMENT"},
                    {display: "Prevention", value: "PREVENTION"},
                    {display: "Diagnostic", value: "DIAGNOSTIC"},
                    {display: "Educational/Counseling/Training", value: "ECT"},
                    {display: "Supportive Care", value: "SUPPORTIVE_CARE"},
                    {display: "Screening", value: "SCREENING"},
                    {
                      display: "Health Services Research",
                      value: "HEALTH_SERVICES_RESEARCH",
                    },
                    {display: "Basic Science", value: "BASIC_SCIENCE"},
                    {
                      display: "Device Feasibility",
                      value: "DEVICE_FEASIBILITY",
                    },
                    {display: "Other", value: "OTHER"},
                  ],
                  fromKey: "primaryPurpose",
                  description:
                    "Design Primary Purpose. A description of the manner in which the clinical trial will be conducted.",
                },
                DesignObservationalModel: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Cohort", value: "COHORT"},
                    {display: "Case-Control", value: "CASE_CONTROL"},
                    {display: "Case-Only", value: "CASE_ONLY"},
                    {display: "Case-Crossover", value: "CASE_CROSSOVER"},
                    {
                      display: "Ecologic or Community",
                      value: "ECOLOGIC_OR_COMMUNITY",
                    },
                    {display: "Family-Based", value: "FAMILY_BASED"},
                    {
                      display: "Defined Population",
                      value: "DEFINED_POPULATION",
                    },
                    {display: "Natural History", value: "NATURAL_HISTORY"},
                    {display: "Other", value: "OTHER"},
                  ],
                  fromKey: "observationalModel",
                  description:
                    "Observational Study Model. Primary strategy for participant identification and follow-up.",
                },
                DesignTimePerspective: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Retrospective", value: "RETROSPECTIVE"},
                    {display: "Prospective", value: "PROSPECTIVE"},
                    {display: "Cross-Sectional", value: "CROSS_SECTIONAL"},
                    {display: "Other", value: "OTHER"},
                  ],
                  fromKey: "timePerspective",
                  description:
                    "Time Perspective. Temporal relationship of observation period to time of participant enrollment..",
                },
                DesignMaskingInfo: {
                  type: coda.ValueType.Object,
                  properties: {
                    DesignMasking: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {display: "None (Open Label)", value: "NONE"},
                        {display: "Single", value: "SINGLE"},
                        {display: "Double", value: "DOUBLE"},
                        {display: "Triple", value: "TRIPLE"},
                        {display: "Quadruple", value: "QUADRUPLE"},
                      ],
                      fromKey: "masking",
                      description:
                        "Design Masking. A clinical trial design strategy in which one or more parties involved in the trial, such as the investigator or participants, do not know which participants have been assigned which interventions. Types of masking include: open label, single blind masking, and double-blind masking..",
                    },
                    DesignMaskingDescription: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "maskingDescription",
                      description:
                        "Masking Description. Information about other parties who may be masked in the clinical trial.",
                    },
                    DesignWhoMasked: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {display: "Participant", value: "PARTICIPANT"},
                        {display: "Care Provider", value: "CARE_PROVIDER"},
                        {display: "Investigator", value: "INVESTIGATOR"},
                        {
                          display: "Outcomes Assessor",
                          value: "OUTCOMES_ASSESSOR",
                        },
                      ],
                      fromKey: "whoMasked",
                      description:
                        "Who Masked: The party or parties involved in the clinical trial who are prevented from having knowledge of the interventions assigned to individual participants..",
                    },
                  },
                  fromKey: "maskingInfo",
                },
              },
              fromKey: "designInfo",
              description: "Design Info.",
            },
            BioSpec: {
              type: coda.ValueType.Object,
              properties: {
                BioSpecRetention: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "None Retained", value: "NONE_RETAINED"},
                    {display: "Samples With DNA", value: "SAMPLES_WITH_DNA"},
                    {
                      display: "Samples Without DNA",
                      value: "SAMPLES_WITHOUT_DNA",
                    },
                  ],
                  fromKey: "retention",
                  description:
                    "Biospecimen Retention. Indicate whether samples of material from research participants are retained in a biorepository..",
                },
                BioSpecDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Biospecimen Description. Specify all types of biospecimens to be retained (e.g., whole blood, serum, white cells, urine, tissue)..",
                },
              },
              fromKey: "bioSpec",
            },
            EnrollmentInfo: {
              type: coda.ValueType.Object,
              properties: {
                EnrollmentCount: {
                  type: coda.ValueType.Number,
                  fromKey: "count",
                  description:
                    "Enrollment. The estimated total number of participants to be enrolled (target number) or the actual total number of participants that are enrolled in the clinical study..",
                },
                EnrollmentType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Actual", value: "ACTUAL"},
                    {display: "Estimated", value: "ESTIMATED"},
                  ],
                  fromKey: "type",
                  description:
                    'Enrollment Type. Can be Actual or Estimated. The "estimated" enrollment is the target number of participants that the researchers need for the study..',
                },
              },
              fromKey: "enrollmentInfo",
            },
          },
          fromKey: "designModule",
          description: "Design Module.",
        },
        ArmsInterventionsModule: {
          type: coda.ValueType.Object,
          properties: {
            ArmGroup: {
              type: coda.ValueType.Object,
              properties: {
                ArmGroupLabel: {
                  type: coda.ValueType.String,
                  fromKey: "label",
                  description:
                    "Arm Group Label. The short name used to identify the arm. Arm Title for INT, Group/Cohort Title for OBS.",
                },
                ArmGroupType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Experimental", value: "EXPERIMENTAL"},
                    {display: "Active Comparator", value: "ACTIVE_COMPARATOR"},
                    {
                      display: "Placebo Comparator",
                      value: "PLACEBO_COMPARATOR",
                    },
                    {display: "Sham Comparator", value: "SHAM_COMPARATOR"},
                    {display: "No Intervention", value: "NO_INTERVENTION"},
                    {display: "Other", value: "OTHER"},
                  ],
                  fromKey: "type",
                  description:
                    "Arm Group Type. The role of each arm in the clinical trial..",
                },
                ArmGroupDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Arm Description for INT, Group/Cohort Description for OBS. If needed, additional descriptive information (including which interventions are administered in each arm) to differentiate each arm from other arms in the clinical trial..",
                },
                ArmGroupInterventionName: {
                  type: coda.ValueType.String,
                  fromKey: "interventionNames",
                  description:
                    "Arm/Group that Receives a Specific Intervention/Treatment. Arm/Group and Intervention Cross Reference.",
                },
              },
              fromKey: "armGroups",
              description:
                'Arm Information. A description of each arm of the clinical trial that indicates its role in the clinical trial; provides an informative title; and, if necessary, additional descriptive information (including which interventions are administered in each arm) to differentiate each arm from other arms in the clinical trial.\n"Arm" means a pre-specified group or subgroup of participant(s) in a clinical trial assigned to receive specific intervention(s) (or no intervention) according to a protocol..',
            },
            Intervention: {
              type: coda.ValueType.Object,
              properties: {
                InterventionType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Behavioral", value: "BEHAVIORAL"},
                    {display: "Biological", value: "BIOLOGICAL"},
                    {
                      display: "Combination Product",
                      value: "COMBINATION_PRODUCT",
                    },
                    {display: "Device", value: "DEVICE"},
                    {display: "Diagnostic Test", value: "DIAGNOSTIC_TEST"},
                    {
                      display: "Dietary Supplement",
                      value: "DIETARY_SUPPLEMENT",
                    },
                    {display: "Drug", value: "DRUG"},
                    {display: "Genetic", value: "GENETIC"},
                    {display: "Procedure", value: "PROCEDURE"},
                    {display: "Radiation", value: "RADIATION"},
                    {display: "Other", value: "OTHER"},
                  ],
                  fromKey: "type",
                  description:
                    "Intervention/Treatment Type. Intervention Type: General types of interventions.",
                },
                InterventionName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description:
                    "Intervention Name. A brief descriptive name used to refer to the investigational product. A non-proprietary name of the intervention must be used, if available. If a non-proprietary name is not available, a brief descriptive name or identifier must be used..",
                },
                InterventionDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Intervention Description. Details that can be made public about the intervention, other than the Intervention Name(s) and Other Intervention Name(s), sufficient to distinguish the intervention from other, similar interventions studied in the same or another clinical study. For example, interventions involving drugs may include dosage form, dosage, frequency, and duration..",
                },
                InterventionArmGroupLabel: {
                  type: coda.ValueType.String,
                  fromKey: "armGroupLabels",
                  description:
                    "Arm Group Label for Intervention. Arm/Group and Intervention Cross Reference.",
                },
                InterventionOtherName: {
                  type: coda.ValueType.String,
                  fromKey: "otherNames",
                  description:
                    "Other Intervention Name. Other current and former name(s) or alias(es), if any, different from the Intervention Name(s), that the sponsor has used publicly to identify the intervention, including, but not limited to, past or present names such as brand name(s), or serial numbers..",
                },
              },
              fromKey: "interventions",
              description:
                "Intervention/Treatment. Intervention associated with an arm/group or the investigational product available for expanded access.",
            },
          },
          fromKey: "armsInterventionsModule",
        },
        OutcomesModule: {
          type: coda.ValueType.Object,
          properties: {
            PrimaryOutcome: {
              type: coda.ValueType.Object,
              properties: {
                PrimaryOutcomeMeasure: {
                  type: coda.ValueType.String,
                  fromKey: "measure",
                  description:
                    "Primary Outcome Title. Name of the specific outcome measure.",
                  required: true,
                },
                PrimaryOutcomeDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Primary Outcome Measure Description. A description of each primary outcome measure (or for observational studies, specific key measurement[s] or observation[s] used to describe patterns of diseases or traits or associations with exposures, risk factors or treatment)..",
                },
                PrimaryOutcomeTimeFrame: {
                  type: coda.ValueType.String,
                  fromKey: "timeFrame",
                  description:
                    "Primary Outcome Measure Time Frame. Time point(s) at which the measurement was assessed for the specific metric used. The description of the time point(s) of assessment must be specific to the outcome measure and is generally the specific duration of time over which each participant is assessed (not the overall duration of the study)..",
                  required: true,
                },
              },
              fromKey: "primaryOutcomes",
              description:
                "In a clinical study's protocol, the planned outcome measure that is the most important for evaluating the effect of an intervention/treatment. Most clinical studies have one primary outcome measure, but some have more than one..",
            },
            SecondaryOutcome: {
              type: coda.ValueType.Object,
              properties: {
                SecondaryOutcomeMeasure: {
                  type: coda.ValueType.String,
                  fromKey: "measure",
                  description:
                    "Secondary Outcome Measure Title. See Primary Outcome Measure.",
                },
                SecondaryOutcomeDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Secondary Outcome Measure Description. See Primary Outcome Measure.",
                },
                SecondaryOutcomeTimeFrame: {
                  type: coda.ValueType.String,
                  fromKey: "timeFrame",
                  description:
                    "Secondary Outcome Measure Time Frame. See Primary Outcome Measure.",
                },
              },
              fromKey: "secondaryOutcomes",
              description:
                "Secondary Outcome Measure. A description of each secondary outcome measure (or for observational studies, specific secondary measurement[s] or observation[s] used to describe patterns of diseases or traits or associations with exposures, risk factors or treatment)..",
            },
            OtherOutcome: {
              type: coda.ValueType.Object,
              properties: {
                OtherOutcomeMeasure: {
                  type: coda.ValueType.String,
                  fromKey: "measure",
                  description:
                    "Other Outcome Measure Measure Title. See Primary Outcome Measure.",
                },
                OtherOutcomeDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Other Outcome Measure Description. See Primary Outcome Measure.",
                },
                OtherOutcomeTimeFrame: {
                  type: coda.ValueType.String,
                  fromKey: "timeFrame",
                  description:
                    "Other Outcome Measure Time Frame. See Primary Outcome Measure.",
                },
              },
              fromKey: "otherOutcomes",
              description:
                "Other Outcome Measure. Other Pre-specified Outcome Measure: Any other measurements, excluding post-hoc measures, that will be used to evaluate the intervention(s) or, for observational studies, that are a focus of the study..",
            },
          },
          fromKey: "outcomesModule",
          description:
            "Outcome Measure Module. For clinical trials, a planned measurement described in the protocol that is used to determine the effect of an intervention/treatment on participants. For observational studies, a measurement or observation that is used to describe patterns of diseases or traits, or associations with exposures, risk factors, or treatment. Types of outcome measures include primary outcome measure and secondary outcome measure..",
        },
        EligibilityModule: {
          type: coda.ValueType.Object,
          properties: {
            EligibilityCriteria: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "eligibilityCriteria",
              description:
                'Inclusion and exclusion eligibility criteria. A limited list of criteria for selection of participants in the clinical study, provided in terms of inclusion and exclusion criteria and suitable for assisting potential participants in identifying clinical studies of interest. Use a bulleted list for each criterion below the headers "Inclusion Criteria" and "Exclusion Criteria".\nThe key requirements that people who want to participate in a clinical study must meet or the characteristics they must have. Eligibility criteria consist of both inclusion criteria (which are required for a person to participate in the study) and exclusion criteria (which prevent a person from participating). Types of eligibility criteria include whether a study accepts healthy volunteers, has age or age group requirements, or is limited by sex..',
            },
            HealthyVolunteers: {
              type: coda.ValueType.Boolean,
              fromKey: "healthyVolunteers",
              description:
                "Accepts Healthy Volunteers. Indication that participants who do not have a disease or condition, or related conditions or symptoms, under study in the clinical study are permitted to participate in the clinical study..",
            },
            Sex: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {display: "Female", value: "FEMALE"},
                {display: "Male", value: "MALE"},
                {display: "All", value: "ALL"},
              ],
              fromKey: "sex",
              description:
                "Sex/Gender. The sex and, if applicable, gender f the participants eligible to participate in the clinical study, or for whom EA is available..",
            },
            GenderBased: {
              type: coda.ValueType.Boolean,
              fromKey: "genderBased",
              description:
                "Gender-Based Eligibility. Whether the study is gender-based: If applicable, indicate whether participant eligibility is based on gender. Select one..",
            },
            GenderDescription: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "genderDescription",
              description:
                "Gender Description. If applicable, indicate whether participant eligibility is based on gender..",
            },
            MinimumAge: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.DateTime,
              fromKey: "minimumAge",
              description:
                "Minimum Age. The numerical value, if any, for the minimum age a potential participant must meet to be eligible for the clinical study..",
            },
            MaximumAge: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.DateTime,
              fromKey: "maximumAge",
              description:
                "Maximum Age. The numerical value, if any, for the maximum age a potential participant can be to be eligible for the clinical study..",
            },
            StdAge: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {display: "Child", value: "CHILD"},
                {display: "Adult", value: "ADULT"},
                {display: "Older Adult", value: "OLDER_ADULT"},
              ],
              fromKey: "stdAges",
              description:
                "Age Group. Ingest calculated the StdAge if there is minimumAge and/or maximimumAge entered. Redacted for Withheld studies.",
            },
            StudyPopulation: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "studyPopulation",
              description:
                "Study Population Description. A description of the population from which the groups or cohorts will be selected (for example, primary care clinic, community sample, residents of a certain town)..",
            },
            SamplingMethod: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {display: "Probability Sample", value: "PROBABILITY_SAMPLE"},
                {
                  display: "Non-Probability Sample",
                  value: "NON_PROBABILITY_SAMPLE",
                },
              ],
              fromKey: "samplingMethod",
              description:
                "Sampling Method. Indicate the method used for the sampling approach and explain in the Detailed Description..",
            },
          },
          fromKey: "eligibilityModule",
        },
        ContactsLocationsModule: {
          type: coda.ValueType.Object,
          properties: {
            CentralContact: {
              type: coda.ValueType.Object,
              properties: {
                CentralContactName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Central Contact Name.",
                },
                CentralContactRole: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Study Chair", value: "STUDY_CHAIR"},
                    {display: "Study Director", value: "STUDY_DIRECTOR"},
                    {
                      display: "Principal Investigator",
                      value: "PRINCIPAL_INVESTIGATOR",
                    },
                    {display: "Sub-Investigator", value: "SUB_INVESTIGATOR"},
                    {display: "Contact", value: "CONTACT"},
                  ],
                  fromKey: "role",
                  description:
                    "Central Contact Role. Role for any Central Contact added.",
                },
                CentralContactPhone: {
                  type: coda.ValueType.String,
                  fromKey: "phone",
                  description: "Central Contact Phone.",
                },
                CentralContactPhoneExt: {
                  type: coda.ValueType.String,
                  fromKey: "phoneExt",
                  description: "Central Contact Phone Ext.",
                },
                CentralContactEMail: {
                  type: coda.ValueType.String,
                  fromKey: "email",
                  description: "Central Contact EMail.",
                },
              },
              fromKey: "centralContacts",
              description:
                "Central Contact Person or Optional Central Contact Backup. The name or title, toll-free telephone number and email address of a person to whom questions concerning enrollment at any location of the study can be addressed.\nInclude: First Name, Middle Initial, Last Name or Official Title, Degree, Phone, Phone Extension, and Email.",
            },
            OverallOfficial: {
              type: coda.ValueType.Object,
              properties: {
                OverallOfficialName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Overall Official Name.",
                },
                OverallOfficialAffiliation: {
                  type: coda.ValueType.String,
                  fromKey: "affiliation",
                  description:
                    "Overall Official Affiliation. Organization Affiliation.",
                },
                OverallOfficialRole: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Study Chair", value: "STUDY_CHAIR"},
                    {display: "Study Director", value: "STUDY_DIRECTOR"},
                    {
                      display: "Principal Investigator",
                      value: "PRINCIPAL_INVESTIGATOR",
                    },
                    {display: "Sub-Investigator", value: "SUB_INVESTIGATOR"},
                  ],
                  fromKey: "role",
                  description: "Overall Official Role.",
                },
              },
              fromKey: "overallOfficials",
              description:
                "Overall Study Official. Person(s) responsible for the overall scientific leadership of the protocol, including study principal investigator. Include the following information:\n•First Name\n•Middle Initial\n•Last Name\n•Degree\n•Organizational Affiliation\n•Official's Role.",
            },
            Location: {
              type: coda.ValueType.Object,
              properties: {
                LocationFacility: {
                  type: coda.ValueType.String,
                  fromKey: "facility",
                  description:
                    "Facility Name. Full name of the organization where the clinical study is being conducted..",
                },
                LocationStatus: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {
                      display: "Active, not recruiting",
                      value: "ACTIVE_NOT_RECRUITING",
                    },
                    {display: "Completed", value: "COMPLETED"},
                    {
                      display: "Enrolling by invitation",
                      value: "ENROLLING_BY_INVITATION",
                    },
                    {
                      display: "Not yet recruiting",
                      value: "NOT_YET_RECRUITING",
                    },
                    {display: "Recruiting", value: "RECRUITING"},
                    {display: "Suspended", value: "SUSPENDED"},
                    {display: "Terminated", value: "TERMINATED"},
                    {display: "Withdrawn", value: "WITHDRAWN"},
                    {display: "Available", value: "AVAILABLE"},
                  ],
                  fromKey: "status",
                  description:
                    "Individual site recruitment status. The recruitment status of each participating facility in a clinical study..",
                },
                LocationCity: {
                  type: coda.ValueType.String,
                  fromKey: "city",
                  description: "City.",
                },
                LocationState: {
                  type: coda.ValueType.String,
                  fromKey: "state",
                  description: "State.",
                },
                LocationZip: {
                  type: coda.ValueType.String,
                  fromKey: "zip",
                  description: "Zipcode.",
                },
                LocationCountry: {
                  type: coda.ValueType.String,
                  fromKey: "country",
                  description: "Country.",
                },
                LocationContact: {
                  type: coda.ValueType.Object,
                  properties: {
                    LocationContactName: {
                      type: coda.ValueType.String,
                      fromKey: "name",
                      description: "Location Contact Name.",
                    },
                    LocationContactRole: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {display: "Study Chair", value: "STUDY_CHAIR"},
                        {display: "Study Director", value: "STUDY_DIRECTOR"},
                        {
                          display: "Principal Investigator",
                          value: "PRINCIPAL_INVESTIGATOR",
                        },
                        {
                          display: "Sub-Investigator",
                          value: "SUB_INVESTIGATOR",
                        },
                        {display: "Contact", value: "CONTACT"},
                      ],
                      fromKey: "role",
                      description: "Location Contact Role.",
                    },
                    LocationContactPhone: {
                      type: coda.ValueType.String,
                      fromKey: "phone",
                      description: "Location Contact Phone.",
                    },
                    LocationContactPhoneExt: {
                      type: coda.ValueType.String,
                      fromKey: "phoneExt",
                      description: "Location Contact Phone Ext.",
                    },
                    LocationContactEMail: {
                      type: coda.ValueType.String,
                      fromKey: "email",
                      description: "Location Contact EMail.",
                    },
                  },
                  fromKey: "contacts",
                  description: "Facility Contact.",
                },
                LocationGeoPoint: {
                  type: coda.ValueType.String,
                  fromKey: "geoPoint",
                  description: "Location Geo Point.",
                },
              },
              fromKey: "locations",
              description:
                "Location. A participating facility in a clinical study.",
            },
          },
          fromKey: "contactsLocationsModule",
          description: "Contacts Locations Measure Module.",
        },
        ReferencesModule: {
          type: coda.ValueType.Object,
          properties: {
            Reference: {
              type: coda.ValueType.Object,
              properties: {
                ReferencePMID: {
                  type: coda.ValueType.String,
                  fromKey: "pmid",
                  description:
                    "PubMed Identifier. PMID for the citation in MEDLINE.",
                },
                ReferenceType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "background", value: "BACKGROUND"},
                    {display: "result", value: "RESULT"},
                    {display: "derived", value: "DERIVED"},
                  ],
                  fromKey: "type",
                  description:
                    'Reference Type. Indicate whether is a Result reference, background or derived. "Result" and "background" are assigned in response to the Yes/No for Results Reference, respectively; "derived" means references were automatically indexed by ClinicalTrials.gov.',
                },
                ReferenceCitation: {
                  type: coda.ValueType.String,
                  fromKey: "citation",
                  description:
                    "Reference Citation. A bibliographic reference in NLM's MEDLINE format.",
                },
                Retraction: {
                  type: coda.ValueType.Object,
                  properties: {
                    RetractionPMID: {
                      type: coda.ValueType.String,
                      fromKey: "pmid",
                      description:
                        "PMID for Publication Retraction. PMID for publication retraction.",
                    },
                    RetractionSource: {
                      type: coda.ValueType.String,
                      fromKey: "source",
                    },
                  },
                  fromKey: "retractions",
                },
              },
              fromKey: "references",
              description:
                "Citations to publications related to the protocol. Background and/or results. Providers either enter the PubMed Unique Identifier (PMID) of an article or enter the full bibliographic citation..",
            },
            SeeAlsoLink: {
              type: coda.ValueType.Object,
              properties: {
                SeeAlsoLinkLabel: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "label",
                  description:
                    "See Also Link Label Title. Label for SeeAlsoLinkURL.",
                },
                SeeAlsoLinkURL: {
                  type: coda.ValueType.String,
                  fromKey: "url",
                  description:
                    "A web site directly relevant to the protocol may be entered, if desired. Links to educational, research, government, and other non-profit web pages are acceptable. All submitted links are subject to review by ClinicalTrials.gov\nComplete URL, including http:// or https://.",
                },
              },
              fromKey: "seeAlsoLinks",
              description: "See Also Measure Link.",
            },
            AvailIPD: {
              type: coda.ValueType.Object,
              properties: {
                AvailIPDId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Available IPD ID. Identifier.",
                },
                AvailIPDType: {
                  type: coda.ValueType.String,
                  fromKey: "type",
                  description:
                    "Available IPD Type. The type of data set or supporting information being shared.\n•\tIndividual Participant Data Set\n•\tStudy Protocol\n•\tStatistical Analysis Plan\n•\tInformed Consent Form\n•\tClinical Study Report\n•\tAnalytic Code\n•\tOther (specify).",
                },
                AvailIPDURL: {
                  type: coda.ValueType.String,
                  fromKey: "url",
                  description:
                    "Available IPD URL. The web address used to request or access the data set or supporting information. URL with http:// or https://.",
                },
                AvailIPDComment: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "comment",
                  description:
                    "Available IPD Comment. Additional information including the name of the data repository or other location where the data set or supporting information is available. Provide any additional explanations about the data set or supporting information and instructions for obtaining access, particularly if a URL is not provided..",
                },
              },
              fromKey: "availIpds",
              description:
                "Available IPD Information. The individual participant data (IPD) sets and supporting information that are being shared for the study..",
            },
          },
          fromKey: "referencesModule",
        },
        IPDSharingStatementModule: {
          type: coda.ValueType.Object,
          properties: {
            IPDSharing: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {display: "Yes", value: "YES"},
                {display: "No", value: "NO"},
                {display: "Undecided", value: "UNDECIDED"},
              ],
              fromKey: "ipdSharing",
              description:
                "Plan to Share IPD. Indicate whether there is a plan to make individual participant data (IPD) collected in this study, including data dictionaries, available to other researchers (typically after the end of the study)..",
            },
            IPDSharingDescription: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "description",
              description:
                "IPD Sharing Description. Additional information including the name of the data repository or other location where the data set or supporting information is available. Provide any additional explanations about the data set or supporting information and instructions for obtaining access, particularly if a URL is not provided..",
            },
            IPDSharingInfoType: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.SelectList,
              options: [
                {display: "Study Protocol", value: "STUDY_PROTOCOL"},
                {display: "Statistical Analysis Plan (SAP)", value: "SAP"},
                {display: "Informed Consent Form (ICF)", value: "ICF"},
                {display: "Clinical Study Report (CSR)", value: "CSR"},
                {display: "Analytic Code", value: "ANALYTIC_CODE"},
              ],
              fromKey: "infoTypes",
              description:
                "IPDSharing Info Type. IPD Type: The type(s) of supporting information that will be shared, in addition to the individual participant data set and data dictionaries for the IPD itself..",
            },
            IPDSharingTimeFrame: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "timeFrame",
              description:
                "IPDSharing Time Frame. A description of when the IPD and any additional supporting information will become available and for how long, including the start and end dates or period of availability. This may be provided as an absolute date (for example, starting in January 2025) or as a date relative to the time when summary data are published or otherwise made available (for example, starting 6 months after publication)..",
            },
            IPDSharingAccessCriteria: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "accessCriteria",
              description:
                "IPDSharing Access Criteria. Describe by what access criteria IPD and any additional supporting information will be shared, including with whom, for what types of analyses, and by what mechanism. Information about who will review requests and criteria for reviewing requests may also be provided..",
            },
            IPDSharingURL: {
              type: coda.ValueType.String,
              fromKey: "url",
              description:
                "IPD Sharing URL. The web address, if any, used to find additional information about the plan to share IPD..",
            },
          },
          fromKey: "ipdSharingStatementModule",
          description: "IPDSharing Statement Module.",
        },
      },
      fromKey: "protocolSection",
      description: "Protocol Section.",
    },
    ResultsSection: {
      type: coda.ValueType.Object,
      properties: {
        ParticipantFlowModule: {
          type: coda.ValueType.Object,
          properties: {
            FlowPreAssignmentDetails: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "preAssignmentDetails",
              description:
                "Pre-assignment Details. Description of significant events in the study (for example, wash out, run-in) that occur after participant enrollment, but prior to assignment of participants to an arm or group, if any. For example, an explanation of why enrolled participants were excluded from the study before assignment to arms or groups..",
            },
            FlowRecruitmentDetails: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "recruitmentDetails",
              description:
                "Recruitment Details. Key information relevant to the recruitment process for the overall study, such as dates of the recruitment period and types of location (For example, medical clinic), to provide context..",
            },
            FlowTypeUnitsAnalyzed: {
              type: coda.ValueType.String,
              fromKey: "typeUnitsAnalyzed",
              description:
                "Type of Unit Analyzed. If assignment is based on a unit other than participants, a description of the unit of assignment (for example, eyes, lesions, implants)..",
            },
            FlowGroup: {
              type: coda.ValueType.Object,
              properties: {
                FlowGroupId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Arm/Group ID. Arm/Group ID generated by PRS.",
                },
                FlowGroupTitle: {
                  type: coda.ValueType.String,
                  fromKey: "title",
                  description:
                    "Arm/Group Title. Descriptive label used to identify each arm or group..",
                  required: true,
                },
                FlowGroupDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Arm/Group Description. Brief description of each arm or group. In general, it must include sufficient details to understand each arm to which participants were assigned and the intervention strategy used in each arm..",
                },
              },
              fromKey: "groups",
              description:
                "Arm/Group Information. Arms or groups for describing the flow of participants through the clinical study. In general, it must include each arm to which participants were assigned..",
              required: true,
            },
            FlowPeriod: {
              type: coda.ValueType.Object,
              properties: {
                FlowPeriodTitle: {
                  type: coda.ValueType.String,
                  fromKey: "title",
                  description:
                    "Period Title. Title describing a stage of the study. If only one period is defined, the default title is Overall Study. When a study has more than one period, none of the Period Titles should be Overall Study..",
                  required: true,
                },
                FlowMilestone: {
                  type: coda.ValueType.Object,
                  properties: {
                    FlowMilestoneType: {
                      type: coda.ValueType.String,
                      fromKey: "type",
                      description:
                        "Milestone Title. Started, Completed and any additional Milestone type name.",
                    },
                    FlowMilestoneComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "comment",
                      description:
                        "Milestone Comment. Additional information about the milestone or Milestone Data..",
                    },
                    FlowAchievement: {
                      type: coda.ValueType.Object,
                      properties: {
                        FlowAchievementGroupId: {
                          type: coda.ValueType.String,
                          fromKey: "groupId",
                          description: "Milestone Arm/Group ID. ID.",
                        },
                        FlowAchievementComment: {
                          type: coda.ValueType.String,
                          codaType: coda.ValueHintType.Markdown,
                          fromKey: "comment",
                          description:
                            "Milestone Arm/Group Comment. Milestone Comment.",
                        },
                        FlowAchievementNumSubjects: {
                          type: coda.ValueType.String,
                          fromKey: "numSubjects",
                          description:
                            "Number of Milestone Arm/Group Participants. Number of participants to reach the milestone, in each arm/group..",
                        },
                        FlowAchievementNumUnits: {
                          type: coda.ValueType.String,
                          fromKey: "numUnits",
                          description:
                            "Number of Units. The number of units to reach the milestone. Could be different than participants. For example: eyes, legs, visits, etc..",
                        },
                      },
                      fromKey: "achievements",
                      description:
                        "Milestone Data. Milestone Data (per arm/group).",
                    },
                  },
                  fromKey: "milestones",
                  description:
                    "Milestone. Any specific events or time points in the study when the numbers of participants (and units, if applicable) are reported. While there is no limit to the number of milestones that may be used in a single period, data are required for two milestones, Started and Completed, within each period.\n•\tStarted: Number of participants initiating the period. In the first period, it is the number of participants assigned to each arm or group. If assignment is based on a unit other than participants, also include the number of units at the beginning of the period.\n•\tCompleted: Number of participants at the end of the period. If assignment is based on a unit other than participants, also include the number of units at the end of the period.\n•\tAdditional Milestone(s): Any specific events or time points in the study when the numbers of participants (and units, if applicable) are reported..",
                },
                FlowDropWithdraw: {
                  type: coda.ValueType.Object,
                  properties: {
                    FlowDropWithdrawType: {
                      type: coda.ValueType.String,
                      fromKey: "type",
                      description:
                        'Reason Not Completed Type. Reason why participants did not complete the study or period.\nCan be one of the following values:\n•\tAdverse Event\n•\tDeath\n•\tLack of Efficacy\n•\tLost to Follow-Up\n•\tPhysician Decision\n•\tPregnancy\n•\tProtocol Violation\n•\tWithdrawal by Subject\n•\tOther\nOther Reason [*]\nDefinition: A brief description of the reason for non-completion, if "Other" Reason Not Completed Type is selected..',
                    },
                    FlowDropWithdrawComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "comment",
                      description:
                        'Description of Reason Not Completed. A brief description of the reason for non-completion, if "Other" Reason Not Completed Type is selected..',
                    },
                    FlowReason: {
                      type: coda.ValueType.Object,
                      properties: {
                        FlowReasonGroupId: {
                          type: coda.ValueType.String,
                          fromKey: "groupId",
                          description:
                            "Reason Group ID. Internally generated ID for reason not completed per arm/group.",
                        },
                        FlowReasonComment: {
                          type: coda.ValueType.String,
                          codaType: coda.ValueHintType.Markdown,
                          fromKey: "comment",
                        },
                        FlowReasonNumSubjects: {
                          type: coda.ValueType.String,
                          fromKey: "numSubjects",
                          description:
                            "Reason Group Number of Subjects. Number of participants in each arm or group that did not complete the study or period, for each Reason Not Completed.",
                        },
                      },
                      fromKey: "reasons",
                      description: "Reason for Not Completed per arm/group.",
                    },
                  },
                  fromKey: "dropWithdraws",
                  description:
                    "Reason Not Completed. Additional information about participants who did not complete the study or period. If reasons are provided, the total number of participants listed as Not Completed must be accounted for by all reasons for non-completion..",
                },
              },
              fromKey: "periods",
              description:
                'Period. Discrete stages of a clinical study during which numbers of participants at specific significant events or points of time are reported.\nEach period comprises an interval of study activity. Each period consists of "milestones" for reporting numbers of participants at particular points in time within that period..',
            },
          },
          fromKey: "participantFlowModule",
          description:
            "Participant Flow Module. Information to document the progress of research participants through each stage of a study in a tabular format, including the number of participants who started and completed the clinical study. (Identical in purpose to a CONSORT flow diagram, but represented as tables)..",
        },
        BaselineCharacteristicsModule: {
          type: coda.ValueType.Object,
          properties: {
            BaselinePopulationDescription: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "populationDescription",
              description:
                "Baseline Analysis Population Description. If the Overall Number of Baseline Participants (or units) differs from the number of participants (or units) assigned to the arm or comparison group and in the entire study population (total), a brief description of the reason(s) for the difference such as how the analysis population was determined..",
            },
            BaselineTypeUnitsAnalyzed: {
              type: coda.ValueType.String,
              fromKey: "typeUnitsAnalyzed",
              description:
                "Type of Units Analyzed. If the analysis is based on a unit other than participants, a description of the unit of analysis (for example, eyes, lesions, implants)..",
            },
            BaselineGroup: {
              type: coda.ValueType.Object,
              properties: {
                BaselineGroupId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Arm/Group ID. Internally generated ID.",
                },
                BaselineGroupTitle: {
                  type: coda.ValueType.String,
                  fromKey: "title",
                  description:
                    "Arm/Group Title. Descriptive label used to identify each arm or comparison group..",
                  required: true,
                },
                BaselineGroupDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Arm/Group Description. Brief description of each arm or comparison group. In general, it must include sufficient detail to understand how the arm(s) or comparison groups were derived from the arm(s) to which participants were assigned in Participant Flow (if different) and the intervention strategy in each arm/group..",
                },
              },
              fromKey: "groups",
              description:
                "Arm/Group Information. Arms or comparison groups in the study, including all participants assessed at baseline as specified in the pre-specified protocol and/or statistical analysis plan..",
              required: true,
            },
            BaselineDenom: {
              type: coda.ValueType.Object,
              properties: {
                BaselineDenomUnits: {
                  type: coda.ValueType.String,
                  fromKey: "units",
                  description:
                    "Overall Number of Units Analyzed. If the analysis is based on a unit other than participants, the number of all units for which baseline measures were measured and analyzed, in each arm/group and in the entire study population (total)..",
                  required: true,
                },
                BaselineDenomCount: {
                  type: coda.ValueType.Object,
                  properties: {
                    BaselineDenomCountGroupId: {
                      type: coda.ValueType.String,
                      fromKey: "groupId",
                      description:
                        "Arm/Group ID. Internally generated ID for each Arm/Group.",
                    },
                    BaselineDenomCountValue: {
                      type: coda.ValueType.String,
                      fromKey: "value",
                      description: "Count value of BaselineDenomUnit.",
                    },
                  },
                  fromKey: "counts",
                  description: "Structure for overall number per arm/group.",
                },
              },
              fromKey: "denoms",
              description: "Structure for Overall Baseline Measure Data (Row).",
            },
            BaselineMeasure: {
              type: coda.ValueType.Object,
              properties: {
                BaselineMeasureTitle: {
                  type: coda.ValueType.String,
                  fromKey: "title",
                  description:
                    "Baseline Measure Title. The name of the baseline or demographic characteristic measured in the clinical study.",
                },
                BaselineMeasureDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    'Baseline Measure Title for Study-Specified Measure. If "Study-Specific Measure" is chosen, provide the name of the measure..',
                },
                BaselineMeasurePopulationDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "populationDescription",
                  description:
                    "Baseline Measure Description. Additional descriptive information about the baseline measure, such as a description of the metric used to characterize the specific baseline measure..",
                },
                BaselineMeasureParamType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Geometric Mean", value: "GEOMETRIC_MEAN"},
                    {
                      display: "Geometric Least Squares Mean",
                      value: "GEOMETRIC_LEAST_SQUARES_MEAN",
                    },
                    {
                      display: "Least Squares Mean",
                      value: "LEAST_SQUARES_MEAN",
                    },
                    {display: "Log Mean", value: "LOG_MEAN"},
                    {display: "Mean", value: "MEAN"},
                    {display: "Median", value: "MEDIAN"},
                    {display: "Number", value: "NUMBER"},
                    {
                      display: "Count of Participants",
                      value: "COUNT_OF_PARTICIPANTS",
                    },
                    {display: "Count of Units", value: "COUNT_OF_UNITS"},
                  ],
                  fromKey: "paramType",
                  description:
                    "Baseline Measure Type. The type of data for the baseline measure.",
                  required: true,
                },
                BaselineMeasureDispersionType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Not Applicable", value: "NA"},
                    {
                      display: "Standard Deviation",
                      value: "STANDARD_DEVIATION",
                    },
                    {display: "Standard Error", value: "STANDARD_ERROR"},
                    {
                      display: "Inter-Quartile Range",
                      value: "INTER_QUARTILE_RANGE",
                    },
                    {display: "Full Range", value: "FULL_RANGE"},
                    {
                      display: "80% Confidence Interval",
                      value: "CONFIDENCE_80",
                    },
                    {
                      display: "90% Confidence Interval",
                      value: "CONFIDENCE_90",
                    },
                    {
                      display: "95% Confidence Interval",
                      value: "CONFIDENCE_95",
                    },
                    {
                      display: "97.5% Confidence Interval",
                      value: "CONFIDENCE_975",
                    },
                    {
                      display: "99% Confidence Interval",
                      value: "CONFIDENCE_99",
                    },
                    {
                      display: "Other Confidence Interval Level",
                      value: "CONFIDENCE_OTHER",
                    },
                    {
                      display: "Geometric Coefficient of Variation",
                      value: "GEOMETRIC_COEFFICIENT",
                    },
                  ],
                  fromKey: "dispersionType",
                  description:
                    "Baseline Measure Dispersion/Precision. Dispersion type based on paramType.",
                  required: true,
                },
                BaselineMeasureUnitOfMeasure: {
                  type: coda.ValueType.String,
                  fromKey: "unitOfMeasure",
                  description:
                    "Unit of Measure. An explanation of what is quantified by the data (for example, participants, mm Hg), for each baseline measure..",
                  required: true,
                },
                BaselineMeasureCalculatePct: {
                  type: coda.ValueType.Boolean,
                  fromKey: "calculatePct",
                  description:
                    "Calculated Percentage. percentage of BaselineMeasurementValue/BaselineMeasureDenomCountValue.",
                },
                BaselineMeasureDenomUnitsSelected: {
                  type: coda.ValueType.String,
                  fromKey: "denomUnitsSelected",
                  description:
                    "Type of Units Selected. Type of units selected (e.g., participants, eyes, arms).",
                },
                BaselineMeasureDenom: {
                  type: coda.ValueType.Object,
                  properties: {
                    BaselineMeasureDenomUnits: {
                      type: coda.ValueType.String,
                      fromKey: "units",
                      description:
                        "Analysis Population Type. Analysis Population Type (selected from Unit of Measure per Baseline Measure).",
                    },
                    BaselineMeasureDenomCount: {
                      type: coda.ValueType.Object,
                      properties: {
                        BaselineMeasureDenomCountGroupId: {
                          type: coda.ValueType.String,
                          fromKey: "groupId",
                          description:
                            "Internally generated ID for each Arm/Group.",
                        },
                        BaselineMeasureDenomCountValue: {
                          type: coda.ValueType.String,
                          fromKey: "value",
                          description:
                            "number entered per arm/group for unit of measures.",
                        },
                      },
                      fromKey: "counts",
                      description: "number entered for unit of measure.",
                    },
                  },
                  fromKey: "denoms",
                },
                BaselineClass: {
                  type: coda.ValueType.Object,
                  properties: {
                    BaselineClassTitle: {
                      type: coda.ValueType.String,
                      fromKey: "title",
                      description: "Baseline RowTitle. Baseline row title.",
                    },
                    BaselineClassDenom: {
                      type: coda.ValueType.Object,
                      properties: {
                        BaselineClassDenomUnits: {
                          type: coda.ValueType.String,
                          fromKey: "units",
                          description:
                            "Baseline Row Unit of Measure. Possible analysis population when data are presented in rows (e.g., if units other than participants are included in baseline, both participants and the units are listed as BaselineClassDenomUnits for the applicable baseline measure).",
                          required: true,
                        },
                        BaselineClassDenomCount: {
                          type: coda.ValueType.Object,
                          properties: {
                            BaselineClassDenomCountGroupId: {
                              type: coda.ValueType.String,
                              fromKey: "groupId",
                              description:
                                "Internal ID per Arm/Group for a Baseline Measure.",
                            },
                            BaselineClassDenomCountValue: {
                              type: coda.ValueType.String,
                              fromKey: "value",
                              description:
                                "Data per Arm/Group per Baseline Measure per Row.",
                            },
                          },
                          fromKey: "counts",
                          description:
                            "Number of Baseline Row Participants. Population Analyzed for a Row.",
                        },
                      },
                      fromKey: "denoms",
                    },
                    BaselineCategory: {
                      type: coda.ValueType.Object,
                      properties: {
                        BaselineCategoryTitle: {
                          type: coda.ValueType.String,
                          fromKey: "title",
                          description:
                            'Category Title. Name of distinct category for a baseline measure, if any. Category Titles are only for mutually exclusive and exhaustive categories summarizing data using the Measure Type of a "Count of Participants" or "Count of Units.".',
                        },
                        BaselineMeasurement: {
                          type: coda.ValueType.Object,
                          properties: {
                            BaselineMeasurementGroupId: {
                              type: coda.ValueType.String,
                              fromKey: "groupId",
                              description:
                                "Arm/Group ID. Internal ID per Arm/Group per Category.",
                            },
                            BaselineMeasurementValue: {
                              type: coda.ValueType.String,
                              fromKey: "value",
                              description:
                                "data. Data per Arm/Group per Category.",
                            },
                            BaselineMeasurementSpread: {
                              type: coda.ValueType.String,
                              fromKey: "spread",
                              description:
                                "data. Data per Arm/Group per Category. Based on Measure Type and Measure of Dispersion (e.g., Standard Deviation).",
                            },
                            BaselineMeasurementLowerLimit: {
                              type: coda.ValueType.String,
                              fromKey: "lowerLimit",
                              description:
                                "data. Data per Arm/Group per Category. Based on Measure Type and Measure of Dispersion (e.g., lower limit of Full Range).",
                            },
                            BaselineMeasurementUpperLimit: {
                              type: coda.ValueType.String,
                              fromKey: "upperLimit",
                              description:
                                "data. Data per Arm/Group per Category. Based on Measure Type and Measure of Dispersion (e.g., upper limit of Full Range).",
                            },
                            BaselineMeasurementComment: {
                              type: coda.ValueType.String,
                              codaType: coda.ValueHintType.Markdown,
                              fromKey: "comment",
                              description:
                                'Comments for N/A values. Explain why baseline measure data are not available, if "NA" is reported for Baseline Measure Data..',
                            },
                          },
                          fromKey: "measurements",
                          description:
                            "Data structure per Arm/Group per Category.",
                          required: true,
                        },
                      },
                      fromKey: "categories",
                      description:
                        "Categories under a Baseline Measure (represented as rows in data table).",
                    },
                  },
                  fromKey: "classes",
                  description: "Structure for a Baseline Measure ROW.",
                },
              },
              fromKey: "measures",
              description:
                "Baseline Measure. A description of each baseline or demographic characteristic measured in the clinical study. Required baseline measures include Age, Sex/Gender, Race, Ethnicity (if collected under the protocol), and any other measure(s) that were assessed at baseline and used in the analysis of the primary outcome measure(s)..",
            },
          },
          fromKey: "baselineCharacteristicsModule",
          description:
            "Baseline Measure Module. A table of demographic and baseline measures and data collected by arm or comparison group and for the entire population of participants in the clinical study..",
        },
        OutcomeMeasuresModule: {
          type: coda.ValueType.Object,
          properties: {
            OutcomeMeasure: {
              type: coda.ValueType.Object,
              properties: {
                OutcomeMeasureType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Primary", value: "PRIMARY"},
                    {display: "Secondary", value: "SECONDARY"},
                    {
                      display: "Other Pre-specified",
                      value: "OTHER_PRE_SPECIFIED",
                    },
                    {display: "Post-Hoc", value: "POST_HOC"},
                  ],
                  fromKey: "type",
                  description:
                    "Outcome Measure Type. The type of outcome measure.\n•\tPrimary\n•\tSecondary\n•\tOther Pre-specified\n•\tPost-Hoc.",
                  required: true,
                },
                OutcomeMeasureTitle: {
                  type: coda.ValueType.String,
                  fromKey: "title",
                  description:
                    "Outcome Measure title. Name of the specific outcome measure..",
                  required: true,
                },
                OutcomeMeasureDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Outcome Measure Description. Additional information about the outcome measure, including a description of the metric used to characterize the specific outcome measure, if not included in the Outcome Measure Title..",
                },
                OutcomeMeasurePopulationDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "populationDescription",
                  description:
                    "Analysis Population Description. If the Number of Participants Analyzed or Number of Units Analyzed differs from the number of participants or units assigned to the arm or comparison group, a brief description of the reason for the difference (such as how the analysis population was determined)..",
                },
                OutcomeMeasureReportingStatus: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Not Posted", value: "NOT_POSTED"},
                    {display: "Posted", value: "POSTED"},
                  ],
                  fromKey: "reportingStatus",
                  description:
                    "Reporting Status. Whether there is Outcome Measure Data reported.",
                },
                OutcomeMeasureAnticipatedPostingDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "anticipatedPostingDate",
                  description:
                    "Anticipated Reporting Date. If Outcome Measure Data are not included for an outcome measure, provide the expected month and year they will be submitted..",
                },
                OutcomeMeasureParamType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "Geometric Mean", value: "GEOMETRIC_MEAN"},
                    {
                      display: "Geometric Least Squares Mean",
                      value: "GEOMETRIC_LEAST_SQUARES_MEAN",
                    },
                    {
                      display: "Least Squares Mean",
                      value: "LEAST_SQUARES_MEAN",
                    },
                    {display: "Log Mean", value: "LOG_MEAN"},
                    {display: "Mean", value: "MEAN"},
                    {display: "Median", value: "MEDIAN"},
                    {display: "Number", value: "NUMBER"},
                    {
                      display: "Count of Participants",
                      value: "COUNT_OF_PARTICIPANTS",
                    },
                    {display: "Count of Units", value: "COUNT_OF_UNITS"},
                  ],
                  fromKey: "paramType",
                  description:
                    "Outcome Measure Data Type. The type of data for the outcome measure. Can be one of the following:\n•\tCount of Participants\n•\tMean\n•\tMedian\n•\tLeast Squares Mean\n•\tGeometric Mean\n•\tGeometric Least Squares Mean\n•\tNumber\n•\tCount of Units.",
                  required: true,
                },
                OutcomeMeasureDispersionType: {
                  type: coda.ValueType.String,
                  fromKey: "dispersionType",
                  description:
                    'Outcome Measure Dispersion/Precision. Measure of Dispersion/Precision\n•\tNot Applicable (only if Measure Type is "Number," "Count of Participants," or "Count of Units")\n•\tStandard Deviation\n•\tStandard Error\n•\tInter-Quartile Range\n•\tFull Range\n•\t80% Confidence Interval\n•\t90% Confidence Interval\n•\t95% Confidence Interval\n•\t97.5% Confidence Interval\n•\t99% Confidence Interval\n•\tOther Confidence Interval Level\n•\tGeometric Coefficient of Variation (only when Measure Type is "Geometric Mean")\nIf “Other Confidence Interval Level” is selected, user will enter a numerical value for the confidence interval level.',
                  required: true,
                },
                OutcomeMeasureUnitOfMeasure: {
                  type: coda.ValueType.String,
                  fromKey: "unitOfMeasure",
                  description:
                    "Unit of Measure. An explanation of what is quantified by the data (for example, participants, mm Hg), for each outcome measure..",
                  required: true,
                },
                OutcomeMeasureCalculatePct: {
                  type: coda.ValueType.Boolean,
                  fromKey: "calculatePct",
                  description:
                    "Calculated Percentage. percentage of OutcomeMeasurementValue/OutcomeMeasureDenomCountValue (internally calculated).",
                },
                OutcomeMeasureTimeFrame: {
                  type: coda.ValueType.String,
                  fromKey: "timeFrame",
                  description:
                    "Outcome Measure Time Frame. Time point(s) at which the measurement was assessed for the specific metric used. The description of the time point(s) of assessment must be specific to the outcome measure and is generally the specific duration of time over which each participant is assessed (not the overall duration of the study)..",
                  required: true,
                },
                OutcomeMeasureTypeUnitsAnalyzed: {
                  type: coda.ValueType.String,
                  fromKey: "typeUnitsAnalyzed",
                  description:
                    "Units Analyzed. If the analysis is based on a unit other than participants, a description of the unit of analysis (for example, eyes, lesions, implants)..",
                },
                OutcomeMeasureDenomUnitsSelected: {
                  type: coda.ValueType.String,
                  fromKey: "denomUnitsSelected",
                  description: "OutcomeMeasureTypeUnitsAnalyzed.",
                },
                OutcomeGroup: {
                  type: coda.ValueType.Object,
                  properties: {
                    OutcomeGroupId: {
                      type: coda.ValueType.String,
                      fromKey: "id",
                    },
                    OutcomeGroupTitle: {
                      type: coda.ValueType.String,
                      fromKey: "title",
                    },
                    OutcomeGroupDescription: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "description",
                    },
                  },
                  fromKey: "groups",
                },
                OutcomeDenom: {
                  type: coda.ValueType.Object,
                  properties: {
                    OutcomeDenomUnits: {
                      type: coda.ValueType.String,
                      fromKey: "units",
                    },
                    OutcomeDenomCount: {
                      type: coda.ValueType.Object,
                      properties: {
                        OutcomeDenomCountGroupId: {
                          type: coda.ValueType.String,
                          fromKey: "groupId",
                        },
                        OutcomeDenomCountValue: {
                          type: coda.ValueType.String,
                          fromKey: "value",
                        },
                      },
                      fromKey: "counts",
                    },
                  },
                  fromKey: "denoms",
                },
                OutcomeClass: {
                  type: coda.ValueType.Object,
                  properties: {
                    OutcomeClassTitle: {
                      type: coda.ValueType.String,
                      fromKey: "title",
                    },
                    OutcomeClassDenom: {
                      type: coda.ValueType.Object,
                      properties: {
                        OutcomeClassDenomUnits: {
                          type: coda.ValueType.String,
                          fromKey: "units",
                        },
                        OutcomeClassDenomCount: {
                          type: coda.ValueType.Object,
                          properties: {
                            OutcomeClassDenomCountGroupId: {
                              type: coda.ValueType.String,
                              fromKey: "groupId",
                            },
                            OutcomeClassDenomCountValue: {
                              type: coda.ValueType.String,
                              fromKey: "value",
                            },
                          },
                          fromKey: "counts",
                        },
                      },
                      fromKey: "denoms",
                    },
                    OutcomeCategory: {
                      type: coda.ValueType.Object,
                      properties: {
                        OutcomeCategoryTitle: {
                          type: coda.ValueType.String,
                          fromKey: "title",
                          description: "Category Title.",
                        },
                        OutcomeMeasurement: {
                          type: coda.ValueType.Object,
                          properties: {
                            OutcomeMeasurementGroupId: {
                              type: coda.ValueType.String,
                              fromKey: "groupId",
                              description: "Group ID.",
                            },
                            OutcomeMeasurementValue: {
                              type: coda.ValueType.String,
                              fromKey: "value",
                              description: "data.",
                            },
                            OutcomeMeasurementSpread: {
                              type: coda.ValueType.String,
                              fromKey: "spread",
                              description: "data.",
                            },
                            OutcomeMeasurementLowerLimit: {
                              type: coda.ValueType.String,
                              fromKey: "lowerLimit",
                              description: "data.",
                            },
                            OutcomeMeasurementUpperLimit: {
                              type: coda.ValueType.String,
                              fromKey: "upperLimit",
                              description: "data.",
                            },
                            OutcomeMeasurementComment: {
                              type: coda.ValueType.String,
                              codaType: coda.ValueHintType.Markdown,
                              fromKey: "comment",
                              description: "Comments for N/A values.",
                            },
                          },
                          fromKey: "measurements",
                        },
                      },
                      fromKey: "categories",
                      description: "Outcome Category.",
                    },
                  },
                  fromKey: "classes",
                },
                OutcomeAnalysis: {
                  type: coda.ValueType.Object,
                  properties: {
                    OutcomeAnalysisParamType: {
                      type: coda.ValueType.String,
                      fromKey: "paramType",
                      description:
                        "Estimation Parameter. Estimation Parameter:\n•\tCox Proportional Hazard\n•\tHazard Ratio (HR)\n•\tHazard Ratio, Log\n•\tMean Difference (Final Values)\n•\tMean Difference (Net)\n•\tMedian Difference (Final Values)\n•\tMedian Difference (Net)\n•\tOdds Ratio (OR)\n•\tOdds Ratio, Log\n•\tRisk Difference (RD)\n•\tRisk Ratio (RR)\n•\tRisk Ratio, Log\n•\tSlope\n•\tOther (If selected, user enters Other Parameter Name: The name of the estimation parameter).",
                    },
                    OutcomeAnalysisParamValue: {
                      type: coda.ValueType.String,
                      fromKey: "paramValue",
                      description:
                        "Estimated Value. Estimated Value: The calculated value for the estimation parameter..",
                    },
                    OutcomeAnalysisDispersionType: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {
                          display: "Standard Deviation",
                          value: "STANDARD_DEVIATION",
                        },
                        {
                          display: "Standard Error of the Mean",
                          value: "STANDARD_ERROR_OF_MEAN",
                        },
                      ],
                      fromKey: "dispersionType",
                      description:
                        "Estimation Dispersion Type. Parameter Dispersion Type\n•\tStandard Deviation\n•\tStandard Error of the Mean.",
                    },
                    OutcomeAnalysisDispersionValue: {
                      type: coda.ValueType.String,
                      fromKey: "dispersionValue",
                      description:
                        "Parameter Dispersion Value. Parameter Dispersion Value:  The calculated value for the dispersion of the estimated parameter..",
                    },
                    OutcomeAnalysisStatisticalMethod: {
                      type: coda.ValueType.String,
                      fromKey: "statisticalMethod",
                      description:
                        'Statistical Method. The statistical test used to calculate the p-value, if a P-Value is reported\n•\tANCOVA\n•\tANOVA\n•\tChi-Squared\n•\tChi-Squared, Corrected\n•\tCochran-Mantel-Haenszel\n•\tFisher Exact\n•\tKruskal-Wallis\n•\tLog Rank\n•\tMantel Haenszel\n•\tMcNemar\n•\tMixed Models Analysis\n•\tRegression, Cox\n•\tRegression, Linear\n•\tRegression, Logistic\n•\tSign Test\n•\tt-Test, 1-Sided\n•\tt-Test, 2-Sided\n•\tWilcoxon (Mann-Whitney)\n•\tOther (Other Method Name [*]: If "Other" is selected, provide name of statistical test.)\nLimit: 40 characters..',
                    },
                    OutcomeAnalysisStatisticalComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "statisticalComment",
                      description:
                        "Statistical Comment. Any other relevant information about the statistical test, such as adjustments or degrees of freedom..",
                    },
                    OutcomeAnalysisPValue: {
                      type: coda.ValueType.String,
                      fromKey: "pValue",
                      description:
                        "P-Value. Calculated p-value given the null-hypothesis.",
                    },
                    OutcomeAnalysisPValueComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "pValueComment",
                      description:
                        "P-Value Comment. Additional information, such as whether the p-value is adjusted for multiple comparisons and the a priori threshold for statistical significance.",
                    },
                    OutcomeAnalysisCINumSides: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {display: "1-Sided", value: "ONE_SIDED"},
                        {display: "2-Sided", value: "TWO_SIDED"},
                      ],
                      fromKey: "ciNumSides",
                      description:
                        "Number of Sides for Confidence Interval. Confidence Interval - Number of sides.",
                    },
                    OutcomeAnalysisCIPctValue: {
                      type: coda.ValueType.String,
                      fromKey: "ciPctValue",
                      description:
                        "Percentage for Confidence Interval. Confidence Interval - value (Expressed as a percentage).",
                    },
                    OutcomeAnalysisCILowerLimit: {
                      type: coda.ValueType.String,
                      fromKey: "ciLowerLimit",
                      description:
                        'Lower Limit for 2-sided Confidence Interval. Confidence Interval - lower limit (Required if confidence interval is "2-sided" or if confidence interval is "1-sided" and no Upper Limit is entered.).',
                    },
                    OutcomeAnalysisCIUpperLimit: {
                      type: coda.ValueType.String,
                      fromKey: "ciUpperLimit",
                      description:
                        'Upper Limit for 2-sided Confidence Interval. Confidence Interval - upper limit (Required if confidence interval is "2-sided" or if confidence interval is "1-sided" and no Lower Limit is entered.).',
                    },
                    OutcomeAnalysisCILowerLimitComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "ciLowerLimitComment",
                      description:
                        "Lower Limit Comment. Confidence Interval - lower limit comment.",
                    },
                    OutcomeAnalysisCIUpperLimitComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "ciUpperLimitComment",
                      description:
                        'Upper Limit Comment. Confidence Interval - upper limit comment (Explain why the upper limit data are not available, if "NA" is reported as upper-limit of "2-sided" confidence interval.).',
                    },
                    OutcomeAnalysisEstimateComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "estimateComment",
                      description:
                        "Estimation Comment. Any other relevant estimation information, including the direction of the comparison (for example, describe which arm or comparison group represents the numerator and denominator for relative risk)..",
                    },
                    OutcomeAnalysisTestedNonInferiority: {
                      type: coda.ValueType.Boolean,
                      fromKey: "testedNonInferiority",
                      description:
                        'Non-inferiority or Equivalence Test Type. Legacy field:\nWhen clinicalTrials.gov first designed and implemented support for results, the outcomeMeasureAnalysis had a field with value Yes/No that captured whether the a statistical analysis was designed to be a test of "Non-Inferiority or Equivalence".  The final rule changed this field.  The legacy Yes/No values were still present to accommodate already entered data (i.e. legacy data).  New preferred values for the Statistical Test Type (Superiority, Non-Infer, Equivalence, Other) were defined to implement the final rule..',
                    },
                    OutcomeAnalysisNonInferiorityType: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {display: "Superiority", value: "SUPERIORITY"},
                        {display: "Non-Inferiority", value: "NON_INFERIORITY"},
                        {display: "Equivalence", value: "EQUIVALENCE"},
                        {display: "Other", value: "OTHER"},
                        {
                          display: "Non-Inferiority or Equivalence",
                          value: "NON_INFERIORITY_OR_EQUIVALENCE",
                        },
                        {
                          display: "Superiority or Other",
                          value: "SUPERIORITY_OR_OTHER",
                        },
                        {
                          display: "Non-Inferiority or Equivalence (legacy)",
                          value: "NON_INFERIORITY_OR_EQUIVALENCE_LEGACY",
                        },
                        {
                          display: "Superiority or Other (legacy)",
                          value: "SUPERIORITY_OR_OTHER_LEGACY",
                        },
                      ],
                      fromKey: "nonInferiorityType",
                      description:
                        "Type of Statistical Test. Type of Statistical Test\n•\tSuperiority\n•\tNon-inferiority\n•\tEquivalence\n•\tOther (for example, single group or other descriptive analysis)\n•\tNon-Inferiority or Equivalence (legacy selection)\n•\tSuperiority or Other (legacy selection).",
                    },
                    OutcomeAnalysisNonInferiorityComment: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "nonInferiorityComment",
                      description:
                        'Non-inferiority or Equivalence Comment. If, "Non-inferiority" or "Equivalence," user is asked to provide additional details, including details of the power calculation (if not previously provided), definition of non-inferiority or equivalence margin, and other key parameters..',
                    },
                    OutcomeAnalysisOtherAnalysisDescription: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "otherAnalysisDescription",
                      description:
                        "Other Statistical Analysis. If the statistical analysis cannot be submitted using the Statistical Test of Hypothesis or Method of Estimation options, provide a description and the results of any other scientifically appropriate tests of statistical significance..",
                    },
                    OutcomeAnalysisGroupDescription: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Markdown,
                      fromKey: "groupDescription",
                      description:
                        "Selected Comparison Group Description. Additional details about the statistical analysis, such as null hypothesis and description of power calculation..",
                    },
                    OutcomeAnalysisGroupId: {
                      type: coda.ValueType.String,
                      fromKey: "groupIds",
                      description: "Internal ID.",
                    },
                  },
                  fromKey: "analyses",
                  description:
                    'Outcome Measure Analysis. Result(s) of scientifically appropriate tests of statistical significance of the primary and secondary outcome measures, if any. Such analyses include: pre-specified in the protocol and/or statistical analysis plan; made public by the sponsor or responsible party; conducted on a primary outcome measure in response to a request made by FDA.\nIf a statistical analysis is reported "Comparison Group Selection" and "Type of Statistical Test" are required. In addition, one of the following data elements are required with the associated information: "P-Value," "Estimation Parameter," or "Other Statistical Analysis.".',
                },
              },
              fromKey: "outcomeMeasures",
              description:
                'Outcome Measure. A description of each outcome measure. "Outcome measure" means a pre-specified measurement that is used to determine the effect of an experimental variable on participants in the study. Post-hoc (that is, not pre-specified) outcome measures may also be reported..',
              required: true,
            },
          },
          fromKey: "outcomeMeasuresModule",
          description:
            "Outcome Measure Module. A table of data for each primary and secondary outcome measure by arm (that is, initial assignment of participants to arms or groups) or comparison group (that is, analysis groups), including the result(s) of scientifically appropriate statistical analyses that were performed on the outcome measure data, if any..",
        },
        AdverseEventsModule: {
          type: coda.ValueType.Object,
          properties: {
            EventsFrequencyThreshold: {
              type: coda.ValueType.String,
              fromKey: "frequencyThreshold",
              description:
                "Frequency Threshold. Frequency Threshold for Reporting Other (Not Including Serious) Adverse Events: the frequency of occurrence that an Other (Not Including Serious) Adverse Event must exceed, within any arm or comparison group, to be reported in the Other (Not Including Serious) Adverse Event table. The number for the frequency threshold must be less than or equal to the allowed maximum (5%). Do not include symbols (for example, > or %) in the data field, it will be expressed as a percentage..",
              required: true,
            },
            EventsTimeFrame: {
              type: coda.ValueType.String,
              fromKey: "timeFrame",
              description:
                "Adverse Event Time Frame. The specific period of time over which adverse event data were collected..",
            },
            EventsDescription: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "description",
              description:
                "Adverse Event Reporting Description. If the adverse event information collected in the clinical study is collected based on a different definition of adverse event and/or serious adverse event than the Adverse Events definition below, a brief description of how the definitions differ. May also be used to provide any additional relevant information about adverse event collection, including details about the method of systematic assessment (for example, daily questionnaire) or information about how the analysis population was determined (if the Number of Participants at Risk differs from the number of participants assigned to the arm or comparison group)..",
            },
            EventsAllCauseMortalityComment: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Markdown,
              fromKey: "allCauseMortalityComment",
              description: "All Cause Mortality Comment.",
            },
            EventGroup: {
              type: coda.ValueType.Object,
              properties: {
                EventGroupId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Arm/Group ID. Internal group id.",
                },
                EventGroupTitle: {
                  type: coda.ValueType.String,
                  fromKey: "title",
                  description:
                    "Arm/Group Title. label used to identify each arm or comparison group..",
                  required: true,
                },
                EventGroupDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Arm/Group Description. Brief description of each arm or comparison group. In general, it must include sufficient detail to understand how the arm(s) or comparison groups were derived from the arm(s) to which participants were assigned in Participant Flow and the intervention strategy in each arm/group..",
                },
                EventGroupDeathsNumAffected: {
                  type: coda.ValueType.String,
                  fromKey: "deathsNumAffected",
                  description:
                    "Total Number Affected by All-Cause Mortality. Overall number of participants, in each arm/group, who died due to any cause..",
                },
                EventGroupDeathsNumAtRisk: {
                  type: coda.ValueType.String,
                  fromKey: "deathsNumAtRisk",
                  description:
                    "Total Number at Risk for All-Cause Mortality. Overall number of participants, in each arm/group, included in the assessment of deaths due to any cause (that is, the denominator for calculating frequency of all-cause mortality)..",
                },
                EventGroupSeriousNumAffected: {
                  type: coda.ValueType.String,
                  fromKey: "seriousNumAffected",
                  description:
                    "Number Affected by a Serious Adverse Event. Overall number of participants affected by one or more Serious Adverse Events, for each arm/group..",
                  required: true,
                },
                EventGroupSeriousNumAtRisk: {
                  type: coda.ValueType.String,
                  fromKey: "seriousNumAtRisk",
                  description:
                    "Number at Risk for a Serious Adverse Event. Number at Risk for each Serious Adverse Event Term: Overall number of participants included in the assessment of serious adverse events (that is, the denominator for calculating frequency of serious adverse events), for each arm/group..",
                  required: true,
                },
                EventGroupOtherNumAffected: {
                  type: coda.ValueType.String,
                  fromKey: "otherNumAffected",
                  description:
                    "Number Affected by Any Other Adverse Event. Total Number Affected by Any Other (Not Including Serious) Adverse Event Above the Frequency Threshold: Overall number of participants affected, for each arm/group, by at least one Other (Not Including Serious) Adverse Event(s) reported in the table. Adverse events reported in the table are those that occurred at a frequency exceeding the specified Frequency Threshold (for example, 5%) within at least one arm or comparison group..",
                  required: true,
                },
                EventGroupOtherNumAtRisk: {
                  type: coda.ValueType.String,
                  fromKey: "otherNumAtRisk",
                  description:
                    "Number at Risk for Any Other Adverse Event. Total Number at Risk for Other (Not Including Serious) Adverse Events (or Number at Risk for each Other, [Not Including Serious], Adverse Event Term required): Overall number of participants, for each arm/group, included in the assessment of Other (Not Including Serious) Adverse Events during the study (that is, the denominator for calculating frequency of Other (Not Including Serious) Adverse Events)..",
                  required: true,
                },
              },
              fromKey: "eventGroups",
              description:
                "Arm/Group. Arms or comparison groups in the study, including all arms or comparison groups based on the pre-specified protocol and/or statistical analysis plan..",
              required: true,
            },
            SeriousEvent: {
              type: coda.ValueType.Object,
              properties: {
                SeriousEventTerm: {
                  type: coda.ValueType.String,
                  fromKey: "term",
                  description:
                    "Adverse Event Term. Descriptive word or phrase for the adverse event..",
                  required: true,
                },
                SeriousEventOrganSystem: {
                  type: coda.ValueType.String,
                  fromKey: "organSystem",
                  description:
                    'Organ System. High-level categories used to group adverse event terms by body or organ system. Select one. (Adverse events that affect multiple systems should be classified as "General disorders.")\n•\tBlood and Lymphatic System Disorders\n•\tCardiac Disorders\n•\tCongenital, Familial and Genetic Disorders\n•\tEar and Labyrinth Disorders\n•\tEndocrine Disorders\n•\tEye Disorders\n•\tGastrointestinal Disorders\n•\tGeneral Disorders\n•\tHepatobiliary Disorders\n•\tImmune System Disorders\n•\tInfections and Infestations\n•\tInjury, Poisoning and Procedural Complications\n•\tInvestigations\n•\tMetabolism and Nutrition Disorders\n•\tMusculoskeletal and Connective Tissue Disorders\n•\tNeoplasms Benign, Malignant and Unspecified (Including Cysts and Polyps)\n•\tNervous System Disorders\n•\tPregnancy, Puerperium and Perinatal Conditions\n•\tProduct Issues\n•\tPsychiatric Disorders\n•\tRenal and Urinary Disorders\n•\tReproductive System and Breast Disorders\n•\tRespiratory, Thoracic and Mediastinal Disorders\n•\tSkin and Subcutaneous Tissue Disorders\n•\tSocial Circumstances\n•\tSurgical and Medical Procedures\n•\tVascular Disorders.',
                  required: true,
                },
                SeriousEventSourceVocabulary: {
                  type: coda.ValueType.String,
                  fromKey: "sourceVocabulary",
                  description:
                    "Source Vocabulary Name for Serious Adverse Event. Standard terminology, controlled vocabulary, or classification and version from which adverse event terms are drawn, if any (for example, SNOMED CT, MedDRA 10.0). Leave blank to indicate that the value specified as the Source Vocabulary for Table Default should be used..",
                },
                SeriousEventAssessmentType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {
                      display: "Non-systematic Assessment",
                      value: "NON_SYSTEMATIC_ASSESSMENT",
                    },
                    {
                      display: "Systematic Assessment",
                      value: "SYSTEMATIC_ASSESSMENT",
                    },
                  ],
                  fromKey: "assessmentType",
                  description:
                    "Collection Approach (or Collection Approach for Table Default required). The type of approach taken to collect serious adverse event information. Can be Systematic, non-systematic assessment, or left blank to indicate that the value specified as the Collection Approach for Table Default should be used.\n•\tSystematic Assessment: Any method of routinely determining whether or not certain adverse events have occurred, for example through a standard questionnaire, regular investigator assessment, regular laboratory testing, or other method\n•\tNon-Systematic Assessment: Any non-systematic method for determining whether or not adverse events have occurred, such as self-reporting by participants or occasional assessment/testing.",
                },
                SeriousEventNotes: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "notes",
                  description:
                    "Serious Adverse Event Term Additional Description. Additional relevant information about the adverse event..",
                },
                SeriousEventStats: {
                  type: coda.ValueType.Object,
                  properties: {
                    SeriousEventStatsGroupId: {
                      type: coda.ValueType.String,
                      fromKey: "groupId",
                      description: "Group ID. Internal Arm/Group ID.",
                    },
                    SeriousEventStatsNumEvents: {
                      type: coda.ValueType.String,
                      fromKey: "numEvents",
                      description:
                        "Number of Serious Events in an Arm/Group. Number of occurrences, in each arm/group, of the serious adverse event being reported..",
                    },
                    SeriousEventStatsNumAffected: {
                      type: coda.ValueType.String,
                      fromKey: "numAffected",
                      description:
                        "Number of Participants Affected. Number of participants, in each arm/group, experiencing at least one serious adverse event being reported..",
                      required: true,
                    },
                    SeriousEventStatsNumAtRisk: {
                      type: coda.ValueType.String,
                      fromKey: "numAtRisk",
                      description:
                        "Number of Participants at Risk. Number of participants assessed, in each arm/group, for serious adverse events (that is, the denominator for calculating frequency of adverse events). Leave blank to indicate that the value specified as the total at risk in the arm/group for the table should be used..",
                      required: true,
                    },
                  },
                  fromKey: "stats",
                  description:
                    "Statistical information. Statistical information for each Serious Adverse Event.",
                },
              },
              fromKey: "seriousEvents",
              description:
                "Serious Adverse Event. A table of all anticipated and unanticipated serious adverse events, grouped by organ system, with the number and frequency of such events by arm or comparison group of the clinical study..",
            },
            OtherEvent: {
              type: coda.ValueType.Object,
              properties: {
                OtherEventTerm: {type: coda.ValueType.String, fromKey: "term"},
                OtherEventOrganSystem: {
                  type: coda.ValueType.String,
                  fromKey: "organSystem",
                },
                OtherEventSourceVocabulary: {
                  type: coda.ValueType.String,
                  fromKey: "sourceVocabulary",
                },
                OtherEventAssessmentType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {
                      display: "Non-systematic Assessment",
                      value: "NON_SYSTEMATIC_ASSESSMENT",
                    },
                    {
                      display: "Systematic Assessment",
                      value: "SYSTEMATIC_ASSESSMENT",
                    },
                  ],
                  fromKey: "assessmentType",
                },
                OtherEventNotes: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "notes",
                },
                OtherEventStats: {
                  type: coda.ValueType.Object,
                  properties: {
                    OtherEventStatsGroupId: {
                      type: coda.ValueType.String,
                      fromKey: "groupId",
                    },
                    OtherEventStatsNumEvents: {
                      type: coda.ValueType.String,
                      fromKey: "numEvents",
                    },
                    OtherEventStatsNumAffected: {
                      type: coda.ValueType.String,
                      fromKey: "numAffected",
                    },
                    OtherEventStatsNumAtRisk: {
                      type: coda.ValueType.String,
                      fromKey: "numAtRisk",
                    },
                  },
                  fromKey: "stats",
                },
              },
              fromKey: "otherEvents",
              description:
                "Other Adverse Events. Other (Not Including Serious) Adverse Events - similar to Serious AE.",
              required: true,
            },
          },
          fromKey: "adverseEventsModule",
          description:
            "Adverse Events. Information for completing three tables summarizing adverse events.\nAll-Cause Mortality: *§ A table of all anticipated and unanticipated deaths due to any cause, with the number and frequency of such events by arm or comparison group of the clinical study.\nSerious Adverse Events: * A table of all anticipated and unanticipated serious adverse events, grouped by organ system, with the number and frequency of such events by arm or comparison group of the clinical study. (See Adverse Events definition below).\nOther (Not Including Serious) Adverse Events: * A table of anticipated and unanticipated events (not included in the serious adverse event table) that exceed a frequency threshold (for example, 5 percent) within any arm of the clinical study, grouped by organ system, with the number and frequency of such events by arm or comparison group of the clinical study..",
        },
        MoreInfoModule: {
          type: coda.ValueType.Object,
          properties: {
            LimitationsAndCaveats: {
              type: coda.ValueType.Object,
              properties: {
                LimitationsAndCaveatsDescription: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "description",
                  description:
                    "Limitations and Caveats Description. Description any significant limitations of the study. Such limitations may include not reaching the target number of participants needed to achieve target power and statistically reliable results or technical problems with measurements leading to unreliable or uninterpretable data..",
                },
              },
              fromKey: "limitationsAndCaveats",
              description:
                "Limitations and Caveats. Overall Limitations and Caveats.",
            },
            CertainAgreement: {
              type: coda.ValueType.Object,
              properties: {
                AgreementPISponsorEmployee: {
                  type: coda.ValueType.Boolean,
                  fromKey: "piSponsorEmployee",
                  description:
                    "Agreement PI Sponsor Employee. Are all PIs Employees of Sponsor?\nDefinition: Indicate whether the principal investigator is an employee of the sponsor. Select one.\n•\tYes: The principal investigator is an employee of the sponsor\n•\tNo: The principal investigator is not an employee of the sponsor.",
                  required: true,
                },
                AgreementRestrictionType: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "LTE60", value: "LTE60"},
                    {display: "GT60", value: "GT60"},
                    {display: "OTHER", value: "OTHER"},
                  ],
                  fromKey: "restrictionType",
                  description:
                    "Agreement Restriction Type. PI Disclosure Restriction Type: Additional information about the results disclosure restriction. If there are varying agreements, the type that represents the most restrictive of the agreements (for example, the agreement with the greatest embargo time period) should be selected.\nPossible selections:\n•\tThe only disclosure restriction on the PI is that the sponsor can review results communications prior to public release and can embargo communications regarding study results for a period that is less than or equal to 60 days from the date that the communication is submitted to the sponsor for review. The sponsor cannot require changes to the communication and cannot unilaterally extend the embargo.\n•\tThe only disclosure restriction on the PI is that the sponsor can review results communications prior to public release and can embargo communications regarding study results for a period that is more than 60 days but less than or equal to 180 days from the date that the communication is submitted to the sponsor for review. The sponsor cannot require changes to the communication and cannot unilaterally extend the embargo.\n•\tOther disclosure agreement that restricts the right of the PI to disclose, discuss, or publish study results after the study is completed.",
                },
                AgreementRestrictiveAgreement: {
                  type: coda.ValueType.Boolean,
                  fromKey: "restrictiveAgreement",
                  description:
                    "Agreement Restrictive Agreement. Results Disclosure Restriction on PI(s)?\nDefinition: Indicate whether there exists any agreement (other than an agreement solely to comply with applicable provisions of law protecting the privacy of participants participating in the clinical study) between the sponsor or its agent and the principal investigator (PI) that restricts in any manner the ability of the PI to discuss the results of the clinical study at a scientific meeting or any other public or private forum or to publish in a scientific or academic journal the results of the clinical study, after the Primary Completion Date.\n•\tYes\n•\tNo..",
                },
                AgreementOtherDetails: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Markdown,
                  fromKey: "otherDetails",
                  description:
                    'Agreement Other Details. Other Disclosure Restriction Description: If "Other disclosure agreement..." is selected, describe the type of agreement including any provisions allowing the sponsor to require changes, ban the communication, or extend an embargo..',
                },
              },
              fromKey: "certainAgreement",
              description:
                "Certain Agreement. Information indicating whether there exists an agreement between the sponsor or its agent and the principal investigators (unless the sponsor is an employer of the principal investigators) that restricts in any manner the ability of the principal investigators (PIs), after the completion of the study, to discuss the results of the study at a scientific meeting or any other public or private forum, or to publish in a scientific or academic journal information concerning the results of the study. This does not include an agreement solely to comply with applicable provisions of law protecting the privacy of participants..",
            },
            PointOfContact: {
              type: coda.ValueType.Object,
              properties: {
                PointOfContactTitle: {
                  type: coda.ValueType.String,
                  fromKey: "title",
                  description:
                    "Point of Contact Title. Name or Official Title: The person who is designated the point of contact. This may be a specific person's name (for example, Dr. Jane Smith) or a position title (for example, Director of Clinical Trials)..",
                  required: true,
                },
                PointOfContactOrganization: {
                  type: coda.ValueType.String,
                  fromKey: "organization",
                  description:
                    "Point of Contact Organization. Organization Name: Full name of the designated individual's organizational affiliation..",
                  required: true,
                },
                PointOfContactEMail: {
                  type: coda.ValueType.String,
                  fromKey: "email",
                  description:
                    "Point of Contact Email. Electronic mail address of the designated individual..",
                },
                PointOfContactPhone: {
                  type: coda.ValueType.String,
                  fromKey: "phone",
                  description:
                    "Point of Contact Phone. Office phone number of the designated individual. Use the format 123-456-7890 within the United States and Canada. If outside the United States and Canada, provide the full phone number, including the country code..",
                },
                PointOfContactPhoneExt: {
                  type: coda.ValueType.String,
                  fromKey: "phoneExt",
                  description:
                    "Point of Contact Phone Extension. Phone extension.",
                },
              },
              fromKey: "pointOfContact",
              description:
                "Point of Contact. Point of contact for scientific information about the clinical study results information..",
            },
          },
          fromKey: "moreInfoModule",
          description: "More Information Module.",
        },
      },
      fromKey: "resultsSection",
      description:
        "Study Results. For Interventional and Observational Studies.",
    },
    AnnotationSection: {
      type: coda.ValueType.Object,
      properties: {
        AnnotationModule: {
          type: coda.ValueType.Object,
          properties: {
            UnpostedAnnotation: {
              type: coda.ValueType.Object,
              properties: {
                UnpostedResponsibleParty: {
                  type: coda.ValueType.String,
                  fromKey: "unpostedResponsibleParty",
                  description:
                    "Responsible Party for Unposted Events. Information provider (Responsible Party).",
                },
                UnpostedEvent: {
                  type: coda.ValueType.Object,
                  properties: {
                    UnpostedEventType: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {display: "Reset", value: "RESET"},
                        {display: "Release", value: "RELEASE"},
                        {display: "Unrelease", value: "UNRELEASE"},
                      ],
                      fromKey: "type",
                      description:
                        "Study Results Submission Type. Study Results Submission Type.",
                    },
                    UnpostedEventDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "date",
                      description:
                        "Study Results Submission Date. Study Results Submission Date.",
                    },
                    UnpostedEventDateUnknown: {
                      type: coda.ValueType.Boolean,
                      fromKey: "dateUnknown",
                      description: "Unposted Event Date is Unknown.",
                    },
                  },
                  fromKey: "unpostedEvents",
                  description:
                    "Unposted Event. A Results Release, UnRelease or Reset event.",
                },
              },
              fromKey: "unpostedAnnotation",
              description:
                "Unposted Annotation. Tracking information for study results submission/QA review process (Results Submitted but not yet Published).",
            },
            ViolationAnnotation: {
              type: coda.ValueType.Object,
              properties: {
                ViolationEvent: {
                  type: coda.ValueType.Object,
                  properties: {
                    ViolationEventType: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.SelectList,
                      options: [
                        {
                          display: "Violation Identified by FDA",
                          value: "VIOLATION_IDENTIFIED",
                        },
                        {
                          display: "Correction Confirmed by FDA",
                          value: "CORRECTION_CONFIRMED",
                        },
                        {
                          display: "Penalty Imposed by FDA",
                          value: "PENALTY_IMPOSED",
                        },
                      ],
                      fromKey: "type",
                      description:
                        "Violation Event Type. •\tViolation Identified by FDA\n•\tCorrection Confirmed by FDA\n•\tPenalty Imposed by FDA.",
                    },
                    ViolationEventDescription: {
                      type: coda.ValueType.String,
                      fromKey: "description",
                      description:
                        "Violation Event Type Description. •\tFailure to Submit. The entry for this clinical trial was not complete at the time of submission, as required by law. This may or may not have any bearing on the accuracy of the information in the entry.\n•\tSubmission of False Information. The entry for this clinical trial was found to be false or misleading and therefore not in compliance with the law.\n•\tNon-submission. The entry for this clinical trial did not contain information on the primary and secondary outcomes at the time of submission, as required by law. This may or may not have any bearing on the accuracy of the information in the entry.\n•\tThe responsible party has corrected the violation.\n•\tA $XX,XXX penalty was imposed against the responsible party for the violation..",
                    },
                    ViolationEventCreationDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "creationDate",
                      description:
                        "Violation Event Creation Date. Date the violation entered in PRS.",
                    },
                    ViolationEventIssuedDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "issuedDate",
                      description:
                        "Violation Event Issued Date. Date the FDA issued the violation.",
                    },
                    ViolationEventReleaseDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "releaseDate",
                      description:
                        "Violation Event Released Date. Date the study record was submitted.",
                    },
                    ViolationEventPostedDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "postedDate",
                      description:
                        "Violation Event Posted Date. Date the violation is available on clinicaltrials.gov.",
                    },
                  },
                  fromKey: "violationEvents",
                  description:
                    "Violation Event. PRS admin can enter one of the following types and descriptions, or other text.",
                },
              },
              fromKey: "violationAnnotation",
              description:
                "FDAAA 801 Violations. FDAAA 801 Violations - entered by PRS admins.",
            },
          },
          fromKey: "annotationModule",
          description: "Annotation Module.",
        },
      },
      fromKey: "annotationSection",
      description:
        "Annotation Section. Internally generated Annotation section.",
    },
    DocumentSection: {
      type: coda.ValueType.Object,
      properties: {
        LargeDocumentModule: {
          type: coda.ValueType.Object,
          properties: {
            LargeDocNoSAP: {
              type: coda.ValueType.Boolean,
              fromKey: "noSap",
              description:
                "Document Has No Statistical Analysis Plan (SAP). Indicate that No Statistical Analysis Plan (SAP) exists for this study..",
            },
            LargeDoc: {
              type: coda.ValueType.Object,
              properties: {
                LargeDocTypeAbbrev: {
                  type: coda.ValueType.String,
                  fromKey: "typeAbbrev",
                  description:
                    "Document Type. Document type - selected by data provider in PRS\n•\tICF – Informed Consent Form\n•\tProt – Study Protocol\n•\tProt_ICF – Study Protocol and Informed Consent Form\n•\tProt_SAP – Study Protocol and Statistical Analysis Plan\n•\tProt_SAP_ICF – Study Protocol, Statistical Analysis Plan and Informed Consent Form\n•\tSAP – Statistical Analysis Plan.",
                },
                LargeDocHasProtocol: {
                  type: coda.ValueType.String,
                  fromKey: "hasProtocol",
                  description:
                    "Document Includes Study Protocol. Indicate if document includes Study Protocol (Yes/No).",
                },
                LargeDocHasSAP: {
                  type: coda.ValueType.String,
                  fromKey: "hasSap",
                  description:
                    "Document Includes Statistical Analysis Plan (SAP). Indicate is document includes Statistical Analysis Plan (Yes/No).",
                },
                LargeDocHasICF: {
                  type: coda.ValueType.String,
                  fromKey: "hasIcf",
                  description:
                    "Document Includes Informed Consent Form (ICF). Indicate if document includes Informed Consent Form (Yes/No).",
                },
                LargeDocLabel: {
                  type: coda.ValueType.String,
                  fromKey: "label",
                  description:
                    "Document Label. Document label entered by data provider.",
                },
                LargeDocDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "date",
                  description:
                    "Document Date. Document date (provided by data provider).",
                },
                LargeDocUploadDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "uploadDate",
                  description:
                    "Document Uploaded Date. Date the document was uploaded to PRS.",
                },
                LargeDocFilename: {
                  type: coda.ValueType.String,
                  fromKey: "filename",
                  description:
                    "Document File Name. Document file name (by data provider).",
                },
                LargeDocSize: {
                  type: coda.ValueType.String,
                  fromKey: "size",
                  description: "Document File Size. Document file size.",
                },
              },
              fromKey: "largeDocs",
              description:
                "Uploaded Document Information. PDF/A document by data provider.",
            },
          },
          fromKey: "largeDocumentModule",
          description:
            "Document Upload Module. Documents uploaded in PDF/A format by the data provider.",
        },
      },
      fromKey: "documentSection",
      description: "Document Upload Information Section.",
    },
    DerivedSection: {
      type: coda.ValueType.Object,
      properties: {
        MiscInfoModule: {
          type: coda.ValueType.Object,
          properties: {
            VersionHolder: {
              type: coda.ValueType.String,
              codaType: coda.ValueHintType.Date,
              fromKey: "versionHolder",
              description:
                "Version Holder. The most recent date where Ingest ran successfully.",
            },
            RemovedCountry: {
              type: coda.ValueType.String,
              fromKey: "removedCountries",
              description:
                "Removed Countries. Country for which all locations have been removed from the study.",
            },
            SubmissionTracking: {
              type: coda.ValueType.Object,
              properties: {
                EstimatedResultsFirstSubmitDate: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.Date,
                  fromKey: "estimatedResultsFirstSubmitDate",
                  description:
                    "Estimated Results First Submitted Date. Results First Submitted Date but not yet Posted (e.g., still under QC review). ResultsFirstSubmitDate at this point is kept empty until Results is published on the public site.",
                },
                FirstMCPInfo: {
                  type: coda.ValueType.Object,
                  properties: {
                    FirstMCPPostDateStruct: {
                      type: coda.ValueType.Object,
                      properties: {
                        FirstMCPPostDate: {
                          type: coda.ValueType.String,
                          codaType: coda.ValueHintType.Date,
                          fromKey: "date",
                          description:
                            "First MCP Posted Date. Date of first MCP posted date.",
                        },
                        FirstMCPPostDateType: {
                          type: coda.ValueType.String,
                          codaType: coda.ValueHintType.SelectList,
                          options: [
                            {display: "Actual", value: "ACTUAL"},
                            {display: "Estimated", value: "ESTIMATED"},
                          ],
                          fromKey: "type",
                          description:
                            "First MCP Posted Date Type. Date type for first MCP posted date.",
                        },
                      },
                      fromKey: "postDateStruct",
                    },
                  },
                  fromKey: "firstMcpInfo",
                  description: "First MCP Info.",
                },
                SubmissionInfo: {
                  type: coda.ValueType.Object,
                  properties: {
                    SubmissionReleaseDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "releaseDate",
                      description:
                        "Release Date. Results released by DP to NLM.",
                    },
                    SubmissionUnreleaseDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "unreleaseDate",
                      description:
                        "Unrelease Date. Results unrelease (canceled release) by DP.",
                    },
                    SubmissionUnreleaseDateUnknown: {
                      type: coda.ValueType.Boolean,
                      fromKey: "unreleaseDateUnknown",
                    },
                    SubmissionResetDate: {
                      type: coda.ValueType.String,
                      codaType: coda.ValueHintType.Date,
                      fromKey: "resetDate",
                      description:
                        "Reset Date. NLM QC reviewer reset/unlock study back to DP.",
                    },
                    SubmissionMCPReleaseN: {
                      type: coda.ValueType.Number,
                      fromKey: "mcpReleaseN",
                      description:
                        "Number of MCPs. Number of Major Comment Postings of a study.",
                    },
                  },
                  fromKey: "submissionInfos",
                  description:
                    "Study Results Submission Info. Results submission cycle information of a study.",
                },
              },
              fromKey: "submissionTracking",
              description: "Submission Tracking. Results submission tracking.",
            },
            ModelPredictions: {
              type: coda.ValueType.Object,
              properties: {
                BMILimits: {
                  type: coda.ValueType.Object,
                  properties: {
                    MinBMI: {
                      type: coda.ValueType.Number,
                      fromKey: "minBmi",
                      description:
                        "Minimum Body Mass Index. experimental field.",
                    },
                    MaxBMI: {
                      type: coda.ValueType.Number,
                      fromKey: "maxBmi",
                      description:
                        "Maximum Body Mass Index. experimental field.",
                    },
                  },
                  fromKey: "bmiLimits",
                  description: "experimental field.",
                },
              },
              fromKey: "modelPredictions",
              description:
                "Model Predictions. experimental fields - recently added - BMI extracted from study's eligibility criteria.",
            },
          },
          fromKey: "miscInfoModule",
          description: "Misc Information Module.",
        },
        ConditionBrowseModule: {
          type: coda.ValueType.Object,
          properties: {
            ConditionMesh: {
              type: coda.ValueType.Object,
              properties: {
                ConditionMeshId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Condition MeSH ID. MeSH ID.",
                },
                ConditionMeshTerm: {
                  type: coda.ValueType.String,
                  fromKey: "term",
                  description: "Condition MeSH Term. MeSH Heading.",
                },
              },
              fromKey: "meshes",
              description:
                "Condition MeSH Terms. MeSH terms of Condition/Diseases field.",
            },
            ConditionAncestor: {
              type: coda.ValueType.Object,
              properties: {
                ConditionAncestorId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Condition Ancestor MeSH ID. MeSH ID.",
                },
                ConditionAncestorTerm: {
                  type: coda.ValueType.String,
                  fromKey: "term",
                  description: "Condition Ancestor MeSH Term. MeSH Heading.",
                },
              },
              fromKey: "ancestors",
              description:
                "Ancestors of Condition MeSH Terms. Ancestor (higher level and more broad) terms of Condition MeSH terms in MeSH Tree hierarchy.",
            },
            ConditionBrowseLeaf: {
              type: coda.ValueType.Object,
              properties: {
                ConditionBrowseLeafId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Condition Leaf Topic ID.",
                },
                ConditionBrowseLeafName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Condition Leaf Topic Name.",
                },
                ConditionBrowseLeafAsFound: {
                  type: coda.ValueType.String,
                  fromKey: "asFound",
                  description:
                    "Found by Condition Term. Normalized Condition term used to find the topic.",
                },
                ConditionBrowseLeafRelevance: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "low", value: "LOW"},
                    {display: "high", value: "HIGH"},
                  ],
                  fromKey: "relevance",
                  description: "Relevance to Condition Leaf Topic.",
                },
              },
              fromKey: "browseLeaves",
              description:
                "Condition Leaf Topics. Leaf browsing topics for Condition field.",
            },
            ConditionBrowseBranch: {
              type: coda.ValueType.Object,
              properties: {
                ConditionBrowseBranchAbbrev: {
                  type: coda.ValueType.String,
                  fromKey: "abbrev",
                  description: "Condition Branch Topic Short Name.",
                },
                ConditionBrowseBranchName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Condition Branch Topic Name.",
                },
              },
              fromKey: "browseBranches",
              description:
                "Condition Branch Topics. Branch browsing topics for Condition field.",
            },
          },
          fromKey: "conditionBrowseModule",
          description:
            'Condition Browse Module. Support for "Search By Topic".',
        },
        InterventionBrowseModule: {
          type: coda.ValueType.Object,
          properties: {
            InterventionMesh: {
              type: coda.ValueType.Object,
              properties: {
                InterventionMeshId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Intervention MeSH ID. MeSH ID.",
                },
                InterventionMeshTerm: {
                  type: coda.ValueType.String,
                  fromKey: "term",
                  description: "Intervention MeSH Term. MeSH Heading.",
                },
              },
              fromKey: "meshes",
              description:
                "Intervention MeSH Terms. MeSH terms of Drug/Interventions field.",
            },
            InterventionAncestor: {
              type: coda.ValueType.Object,
              properties: {
                InterventionAncestorId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Intervention Ancestor MeSH ID. MeSH ID.",
                },
                InterventionAncestorTerm: {
                  type: coda.ValueType.String,
                  fromKey: "term",
                  description: "Intervention Ancestor MeSH Term. MeSH Heading.",
                },
              },
              fromKey: "ancestors",
              description:
                "Ancestors of Intervention MeSH Terms. Ancestor (higher level and more broad) terms of Intervention MeSH terms in MeSH Tree hierarchy.",
            },
            InterventionBrowseLeaf: {
              type: coda.ValueType.Object,
              properties: {
                InterventionBrowseLeafId: {
                  type: coda.ValueType.String,
                  fromKey: "id",
                  description: "Intervention Leaf Topic ID.",
                },
                InterventionBrowseLeafName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Intervention Leaf Topic Name.",
                },
                InterventionBrowseLeafAsFound: {
                  type: coda.ValueType.String,
                  fromKey: "asFound",
                  description:
                    "Found by Intervention Term. Normalized Intervention term used to find the topic.",
                },
                InterventionBrowseLeafRelevance: {
                  type: coda.ValueType.String,
                  codaType: coda.ValueHintType.SelectList,
                  options: [
                    {display: "low", value: "LOW"},
                    {display: "high", value: "HIGH"},
                  ],
                  fromKey: "relevance",
                  description: "Relevance to Intervention Leaf Topic.",
                },
              },
              fromKey: "browseLeaves",
              description:
                "Intervention Leaf Topics. Leaf browsing topics for Intervention field.",
            },
            InterventionBrowseBranch: {
              type: coda.ValueType.Object,
              properties: {
                InterventionBrowseBranchAbbrev: {
                  type: coda.ValueType.String,
                  fromKey: "abbrev",
                  description: "Intervention Branch Topic Short Name.",
                },
                InterventionBrowseBranchName: {
                  type: coda.ValueType.String,
                  fromKey: "name",
                  description: "Intervention Branch Topic Name.",
                },
              },
              fromKey: "browseBranches",
              description:
                "Intervention Branch Topics. Branch browsing topics for Intervention field.",
            },
          },
          fromKey: "interventionBrowseModule",
          description:
            'Drug/Intervention Browse Module. Support for "Search By Topic".',
        },
      },
      fromKey: "derivedSection",
      description: "Derived Section. Internally Generated.",
    },
    HasResults: {
      type: coda.ValueType.String,
      fromKey: "hasResults",
      description:
        "Has Results. Flag that indicates if a study has posted results on public site.",
    },
  },
  fromKey: "study",
});
