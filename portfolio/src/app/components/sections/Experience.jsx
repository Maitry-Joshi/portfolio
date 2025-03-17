// src/components/sections/Experience.jsx
import React from 'react';
import { Timeline } from '@mui/lab';
import { useMediaQuery, useTheme } from '@mui/material';
import TimelineItem from '../ui/TimelineItem';
import SectionTitle from '../ui/SectionTitle';
import experienceData from '../../constants/experienceData';

const Experience = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <SectionTitle title="Professional Experience" />

      <Timeline position={isTablet ? "right" : "alternate"} sx={{ p: 0 }}>
        {experienceData.map((experience, index) => (
          <TimelineItem 
            key={experience.id}
            item={experience}
            type="experience"
            last={index === experienceData.length - 1}
          />
        ))}
      </Timeline>
    </>
  );
};

export default Experience;