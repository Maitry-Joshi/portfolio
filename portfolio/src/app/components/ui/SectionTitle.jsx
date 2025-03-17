// src/components/common/SectionTitle.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ title, subtitle, align = 'left' }) => {
  return (
    <Box 
      sx={{
        mb: 4,
        textAlign: align,
        width: align === 'center' ? '100%' : 'auto',
      }}
      className="section-title"
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          position: 'relative',
          display: 'inline-block',
          fontWeight: 600,
          color: '#333333',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '40%',
            height: '3px',
            bottom: '-10px',
            left: align === 'center' ? '30%' : 0,
            backgroundColor: '#333333',
            borderRadius: '2px',
          }
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="subtitle1" 
          color="#555555"
          sx={{ mt: 2 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;