import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Timeline } from '@mui/lab';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import researchData from '../../constants/researchData';

const Research = () => {
  return (
    <>
      <SectionTitle title="Research" />
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        My research focuses on analytical method development and validation for pharmaceutical applications, with emphasis on stability-indicating methods and advanced characterization techniques.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Timeline position="alternate">
          {researchData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              type="research"
              last={index === researchData.length - 1}
            />
          ))}
        </Timeline>
      </Box>
    </>
  );
};

export default Research;