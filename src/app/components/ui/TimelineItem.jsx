import React from 'react';
import { 
  Paper, Typography, List, ListItem, Box, Button,
  useMediaQuery, useTheme
} from '@mui/material';
import {
  TimelineItem as MuiTimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const TimelineItem = ({ 
  item, 
  type = 'experience', 
  last = false,
  color = 'primary'
}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  
  const Icon = item.icon;

  // Modified to handle different card content based on type
  const renderCardContent = () => {
    switch(type) {
      case 'experience':
        return (
          <>
            <Typography variant="h6" component="h3" sx={{ color: '#333333', fontWeight: 600 }}>
              {item.company}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#333333', fontWeight: 500 }} gutterBottom>
              {item.position}
            </Typography>
            {item.responsibilities && (
              <List dense>
                {item.responsibilities.map((responsibility, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ArrowRightIcon sx={{ mr: 1, color: '#333333' }} />
                    <Typography variant="body2" sx={{ color: '#555555' }}>
                      {responsibility}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            )}
          </>
        );
      
      case 'education':
        return (
          <>
            <Typography variant="h6" component="h3" sx={{ color: '#333333', fontWeight: 600 }}>
              {item.degree}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#333333', fontWeight: 500 }} gutterBottom>
              {item.institution}
            </Typography>
            {item.gpa && (
              <Typography 
                variant="body1" 
                sx={{
                  display: 'inline-block',
                  bgcolor: '#333333',
                  color: 'white',
                  py: 0.5,
                  px: 1.5,
                  borderRadius: 2,
                  fontWeight: 'medium',
                  mb: 2
                }}
              >
                CGPA: {item.gpa}
              </Typography>
            )}
            {item.specialization && (
              <Typography variant="body2" sx={{ mb: 2, color: '#555555' }}>
                Specialized in {item.specialization}
              </Typography>
            )}
            {item.description && (
              <Typography variant="body2" sx={{ color: '#555555' }} paragraph>
                {item.description}
              </Typography>
            )}
          </>
        );
      
      case 'research':
      case 'project':
      case 'seminar':
      case 'workshop':
        return (
          <>
            <Typography variant="h6" component="h3" sx={{ color: '#333333', fontWeight: 600 }}>
              {item.title}
            </Typography>
            {item.details && (
              <List dense>
                {item.details.map((detail, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ArrowRightIcon sx={{ mr: 1, color: '#333333' }} />
                    <Typography variant="body2" sx={{ color: '#555555' }}>
                      {detail}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <MuiTimelineItem className="timeline-connector">
      <TimelineOppositeContent sx={{ display: isTablet ? 'none' : 'block' }}>
        <Typography variant="h6" component="span" sx={{ color: '#333333', fontWeight: 600 }}>
          {item.period}
        </Typography>
        {item.location && (
          <Typography sx={{ color: '#555555' }}>{item.location}</Typography>
        )}
      </TimelineOppositeContent>
      
      <TimelineSeparator>
        <TimelineDot 
          sx={{ 
            borderColor: '#333333', 
            borderWidth: 2,
            color: '#333333',
            backgroundColor: '#ffffff',
            position: 'relative',
            zIndex: 2
          }} 
          variant="outlined"
        >
          {Icon && <Icon />}
        </TimelineDot>
        {!last && <TimelineConnector sx={{ bgcolor: '#333333' }} />}
      </TimelineSeparator>
      
      <TimelineContent>
        <Paper
          elevation={1}
          sx={{
            p: 3,
            borderRadius: 2,
            background: '#ffffff',
            border: '2px solid #333333',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
            },
            className: 'card-hover',
          }}
        >
          {isTablet && (
            <Typography sx={{ color: '#555555', mb: 2 }}>
              {item.period} {item.location && `| ${item.location}`}
            </Typography>
          )}
          
          {renderCardContent()}
          
          {item.document && (
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
                href={item.document.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.document.title}
              </Button>
            </Box>
          )}
          
        </Paper>
      </TimelineContent>
    </MuiTimelineItem>
  );
};

export default TimelineItem;