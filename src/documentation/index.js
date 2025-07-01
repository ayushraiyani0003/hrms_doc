// Import your individual components/modules
import companyStructure from "./admin/companyStructure/company_structure";
import companyGraph from "./admin/companyStructure/company_graph";
import bankList from "./admin/Setup/bank_list";
import country from "./admin/Setup/country";
import salutation from "./admin/Setup/salutation";
import designation from "./Recruitment/RecruitmentSetup/designation";
import educationLevels from "./Recruitment/RecruitmentSetup/education_levels";
import employeeType from "./Recruitment/RecruitmentSetup/employee_type";
import experienceLevel from "./Recruitment/RecruitmentSetup/experience_level";
import hiringSource from "./Recruitment/RecruitmentSetup/hiring_source";
import jobLocationType from "./Recruitment/RecruitmentSetup/job_location_type";
import skills from "./Recruitment/RecruitmentSetup/skills";
import workShift from "./Recruitment/RecruitmentSetup/work_shift";
import allCandidate from "./Recruitment/ApplicantTracking/all_candidate";
import allRequisition from "./Recruitment/ManpowerRequisition/all_requisition";

//Manpower Requisition Data
const ManpowerRequisitionData = {
  name: "Manpower Requisition",
  subSubCategory: [allCandidate],
};

//Applicant Tracking Data
const ApplicantTrackingData = {
  name: "Applicant Tracking",
  subSubCategory: [allRequisition],
};

//Recruitment Setup Data
const RecruitmentSetupData = {
  name: "Recruitment Setup",
  subSubCategory: [
    designation,
    educationLevels,
    employeeType,
    experienceLevel,
    hiringSource,
    jobLocationType,
    skills,
    workShift,
  ],
};

// Company Structure Data
const companyStructureData = {
  name: "Company Structure",
  subSubCategory: [
    companyStructure,
    companyGraph,
    // Add more sub-subcategories as needed
  ],
};

//Setup Data
const setupData = {
  name: "Setup",
  subSubCategory: [bankList, country, salutation],
};

// Admin Data
const adminData = {
  id: "01",
  name: "Admin",
  type: "main",
  subCategory: [
    companyStructureData,
    setupData,
    // Add more subcategories as needed
  ],
};

const RecruitmentData = {
  id: "02",
  name: "Recruitment",
  type: "main",
  subCategory: [
    ManpowerRequisitionData,
    ApplicantTrackingData,
    RecruitmentSetupData,
    // Add more subcategories if needed
  ],
};

// Main HRCentral Documentation
const HRCentralDoc = [
  adminData,
  RecruitmentData,
  // Add more categories as needed
];

export default HRCentralDoc;
