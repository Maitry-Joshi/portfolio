// src/components/ui/SkillCard.jsx
import React from 'react';
import { Paper, Box, Typography, Fade, Tooltip } from '@mui/material';

const SkillCard = ({ skill, index }) => {
  return (
    <Fade in={true} style={{ transitionDelay: `${index * 100}ms` }}>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          borderRadius: 2,
          border: '2px solid #333333',
          transition: 'all 0.3s',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: '120px',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
            bgcolor: 'rgba(51, 51, 51, 0.03)',
          },
        }}
      >
        <Tooltip title={skill.description || ''} placement="top">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ color: '#333333', mb: 1.5, fontSize: '2rem' }}>
              {React.createElement(skill.icon, { fontSize: 'inherit' })}
            </Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 500, color: '#333333', textAlign: 'center' }}>
              {skill.name}
            </Typography>
          </Box>
        </Tooltip>
      </Paper>
    </Fade>
  );
};

export default SkillCard;