import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { Timeline } from '@mui/lab';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import seminarsData from '../../constants/seminarsData';

const Seminars = () => {
  return (
    <>
      <SectionTitle title="Seminars" />
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Professional seminars and conferences I've attended to expand my knowledge in pharmaceutical sciences and stay current with industry developments.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Timeline position="alternate">
          {seminarsData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              type="seminar"
              last={index === seminarsData.length - 1}
            />
          ))}
        </Timeline>
      </Box>
    </>
  );
};

export default Seminars;