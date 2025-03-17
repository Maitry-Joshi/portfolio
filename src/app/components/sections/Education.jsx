// src/components/sections/Education.jsx
import React from 'react';
import { Timeline } from '@mui/lab';
import { useMediaQuery, useTheme } from '@mui/material';
import TimelineItem from '../ui/TimelineItem';
import SectionTitle from '../ui/SectionTitle';
import { SchoolOutlined as SchoolIcon } from '@mui/icons-material';
import educationData from '../../constants/educationData';

const Education = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // Add icon to each education item
  const educationWithIcons = educationData.map(edu => ({
    ...edu,
    icon: SchoolIcon
  }));

  return (
    <>
      <SectionTitle title="Education" />

      <Timeline position={isTablet ? "right" : "alternate"} sx={{ p: 0 }}>
        {educationWithIcons.map((education, index) => (
          <TimelineItem 
            key={education.id}
            item={education}
            type="education"
            last={index === educationData.length - 1}
            color="secondary"
          />
        ))}
      </Timeline>
    </>
  );
};

export default Education;