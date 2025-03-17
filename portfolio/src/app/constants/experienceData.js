import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const experienceData = [
  {
    id: 1,
    company: 'Alembic Research Centre',
    position: 'Research Scientist, ADL-Formulation',
    period: 'Nov 2023 - Present',
    location: 'Vadodara, Gujarat',
    icon: WorkIcon,
    responsibilities: [
      'Conduct dissolution studies of solid oral dosage forms using USP/Ph. Eur./IP methods to evaluate drug release profiles.',
      'Perform potency assays using HPLC, UV-Vis, and other analytical techniques to ensure dosage consistency.',
      'Identify and quantify impurities and degradation products using HPLC/UPLC with appropriate method validations.',
      'Evaluate API homogeneity in bulk blends to ensure compliance with cGMP guidelines.',
      'Characterize raw materials, intermediates, and finished products using FTIR for functional group identification.',
      'Ensure documentation and analysis meet regulatory requirements (USFDA, EMA, MHRA, ICH, WHO).',
      'Operate, calibrate, and troubleshoot instruments like HPLC, UPLC, UV, FTIR, and Dissolution Apparatus.'
    ]
  },
  {
    id: 2,
    company: 'Sun Pharmaceutical Industry Ltd.',
    position: 'Research Analyst',
    period: 'Sep 2023 - Mar 2024',
    location: 'Vadodara, Gujarat',
    icon: WorkIcon,
    responsibilities: [
      'Conducted qualitative and quantitative analysis of protein, peptide and related impurities using various chromatographic techniques including RP-HPLC, SEC-HPLC, and Normal phase HPLC.',
      'Executed secondary and tertiary structure determination of proteins and peptides using CD spectroscopy.',
      'Performed amino acid sequencing with and without enzymatic degradation, utilizing N-terminal and C-terminal sequencing by HRMS with Biopharma finder and Proteome discoverer.',
      'Contributed to method development and validation according to ICH guidelines and pharmaceutical quality standards.'
    ]
  },
  {
    id: 3,
    company: 'Unicure Remedies PVT LTD.',
    position: 'Trainee Officer',
    period: 'May 2023 - Jun 2023',
    location: 'Vadodara, Gujarat',
    icon: BusinessCenterIcon,
    responsibilities: [
      'Managed production of various formulations including tablets and capsules, operating manufacturing equipment such as granulators, blenders, tablet compression machines, and coating pans.',
      'Conducted in-process checks including weight variation, hardness, friability, and dissolution of tablets to ensure quality.',
      'Monitored environmental conditions, line clearance, and adherence to SOPs (Standard Operating Procedures).',
      'Performed documentation reviews, sampling, and deviation handling to ensure product consistency and compliance.'
    ]
  },
  {
    id: 4,
    company: 'Radiant Parenterals Ltd.',
    position: 'Quality Control Intern',
    period: 'Jun 2021 - Aug 2021',
    location: 'Vadodara, Gujarat',
    icon: BusinessCenterIcon,
    responsibilities: [
      'Evaluated injectable formulations, oral liquids, and their packaging in the Quality Control department using analytical instruments including UV spectrometer, HPLC, TLC, and Dissolution Apparatus.',
      'Operated laboratory equipment including pH meters, balances, and viscometers for quality testing.',
      'Performed quality control analysis following GLP and GMP standards in pharmaceutical setting.'
    ]
  },
  {
    id: 5,
    company: 'Retail Pharmacy Training',
    position: 'Pharmacy Intern',
    period: '2020 - 2021',
    location: 'Vadodara, Gujarat',
    icon: LocalPharmacyIcon,
    responsibilities: [
      'Assisted in dispensing medications and handling prescriptions under pharmacist supervision.',
      'Managed inventory, stock auditing, and ensured proper storage of pharmaceuticals according to regulations.',
      'Provided customer support, counseling on OTC medications, and addressed patient queries.',
      'Maintained accurate records, handled billing, and ensured regulatory compliance.'
    ]
  }
];

export default experienceData;