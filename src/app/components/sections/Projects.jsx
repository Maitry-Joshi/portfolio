import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Timeline } from '@mui/lab';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import projectsData from '../../constants/projectsData';

const Projects = () => {
  return (
    <>
      <SectionTitle title="Projects" />
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        These projects showcase my practical application of pharmaceutical formulation principles and innovative approach to drug delivery systems.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Timeline position="alternate">
          {projectsData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              type="project"
              last={index === projectsData.length - 1}
            />
          ))}
        </Timeline>
      </Box>
    </>
  );
};

export default Projects;