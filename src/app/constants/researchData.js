import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';

const researchData = [
  {
    id: 1,
    title: 'Analytical Method Development & Validation',
    period: '2023 - 2024',
    icon: ScienceIcon,
    details: [
      'Developed and validated a stability-indicating UPLC-HRMS method for simultaneous quantification of active ingredients in multi-component formulations with sub-ppm detection limits.',
      'Established a sensitive and selective LC-MS/MS method for Imeglimin HCl with validated specificity in the presence of potential degradants.',
      'Implemented a robust HPLC method for concurrent analysis of antibiotic and anti-infective compounds in pharmaceutical dosage forms.',
      'Applied DoE (Design of Experiments) and QbD principles in method optimization following ICH Q2(R1) guidelines for accuracy, precision, linearity, and robustness.',
      'Conducted comprehensive forced degradation studies under acidic, alkaline, oxidative, photolytic, and thermal conditions to establish method specificity and stability-indicating power.'
    ]
  },
  {
    id: 2,
    title: 'Peptide Characterisation Research',
    period: '2023 - 2024',
    icon: BiotechIcon,
    details: [
      'Authored a comprehensive review on advanced peptide characterization techniques for pharmaceutical applications.',
      'Researched analytical methodologies for assessment of primary, secondary, and tertiary protein structures.',
      'Analyzed emerging techniques in peptide analytics including HRMS-based sequencing, CD spectroscopy, and stability characterization.'
    ]
  }
];

export default researchData;