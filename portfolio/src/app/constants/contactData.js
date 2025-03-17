// src/constants/contactData.js
import {
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    Mail as MailIcon,
    LinkedIn as LinkedInIcon,
    Biotech as BiotechIcon,
    Analytics as AnalyticsIcon,
    Science as ScienceIcon,
    Visibility as VisibilityIcon,
    AssuredWorkload as AssuredWorkloadIcon,
  } from '@mui/icons-material';
  
  export const contactInfo = [
    {
      id: 'address',
      icon: LocationIcon,
      label: 'Address',
      value: 'Vadodara, Gujarat, India'
    },
    {
      id: 'email',
      icon: MailIcon,
      label: 'Email',
      value: 'maitrijoshi354@gmail.com'
    },
    {
      id: 'linkedin',
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/maitry-joshi'
    }
  ];
  
  export const professionalInterests = [
    {
      id: 'research',
      icon: BiotechIcon,
      title: 'Pharmaceutical Research'
    },
    {
      id: 'analytical',
      icon: AnalyticsIcon,
      title: 'Analytical Method Development'
    },
    {
      id: 'formulation',
      icon: ScienceIcon,
      title: 'Formulation Development'
    },
    {
      id: 'quality',
      icon: VisibilityIcon,
      title: 'Quality Control'
    },
    {
      id: 'regulatory',
      icon: AssuredWorkloadIcon,
      title: 'Regulatory Affairs'
    }
  ];