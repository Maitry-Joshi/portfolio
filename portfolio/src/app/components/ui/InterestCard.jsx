// src/components/common/InterestCard.jsx
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const InterestCard = ({ interest, index }) => {
  const Icon = interest.icon;
  
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 2,
        textAlign: 'center',
        backgroundColor: '#ffffff',
        border: '2px solid #333333',
        height: '100%',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
        },
        animation: 'fadeIn 0.5s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        className: 'card-hover',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Icon sx={{ fontSize: 40, mb: 1, color: '#333333' }} />
        <Typography variant="body2" fontWeight="medium" color="#333333">
          {interest.title}
        </Typography>
      </Box>
    </Paper>
  );
};

export default InterestCard;