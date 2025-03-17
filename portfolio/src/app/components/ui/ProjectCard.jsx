// src/components/common/ProjectCard.jsx
import React from 'react';
import { Paper, Typography, Box, Chip, Stack, List, ListItem, Button, Fade, Grid } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <Grid item xs={12} md={project.fullWidth ? 12 : 6}>
      <Fade in={true} timeout={500 + delay * 200}>
        <Paper
          elevation={1}
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: 2,
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid #333333',
            backgroundColor: '#ffffff',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '5px',
              height: '100%',
              bgcolor: '#333333',
            },
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
            },
            className: 'card-hover',
          }}
        >
          <Box sx={{ pl: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap' }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333333' }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'medium', color: '#333333' }}>
                {project.period}
              </Typography>
            </Box>
            
            {project.subtitle && (
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: 2,
                mb: 2,
              }}>
                <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: '#555555' }}>
                  {project.subtitle}
                </Typography>
              </Box>
            )}
            
            {project.tags && (
              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 0.5 }}>
                {project.tags.map((tag, index) => (
                  <Chip 
                    key={index} 
                    size="small" 
                    label={tag} 
                    sx={{
                      color: '#333333',
                      borderColor: '#333333',
                      backgroundColor: 'transparent',
                      fontWeight: 500
                    }}
                    variant="outlined" 
                  />
                ))}
              </Stack>
            )}

            {project.details && (
              <List dense>
                {project.details.map((detail, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ArrowRightIcon 
                      sx={{ 
                        mr: 1, 
                        color: '#333333' 
                      }} 
                    />
                    <Typography variant="body2" color="#555555">{detail}</Typography>
                  </ListItem>
                ))}
              </List>
            )}
            
            {project.document && (
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: '#333333',
                    borderColor: '#333333',
                    '&:hover': {
                      backgroundColor: 'rgba(51, 51, 51, 0.05)',
                      borderColor: '#333333'
                    }
                  }}
                  startIcon={<FileDownloadIcon />}
                  href={project.document.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.document.title}
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      </Fade>
    </Grid>
  );
};

export default ProjectCard;