import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Timeline } from '@mui/lab';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import workshopsData from '../../constants/workshopsData';

const Workshops = () => {
  return (
    <>
      <SectionTitle title="Workshops" />
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Hands-on workshops I've participated in to develop practical skills and technical expertise in pharmaceutical research and development.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Timeline position="alternate">
          {workshopsData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              type="workshop"
              last={index === workshopsData.length - 1}
            />
          ))}
        </Timeline>
      </Box>
    </>
  );
};

export default Workshops;