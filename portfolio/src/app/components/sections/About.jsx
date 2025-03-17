// src/components/sections/About.jsx
import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Card, Box, CardContent, Fade } from '@mui/material';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';
import InterestCard from '../ui/InterestCard';
import skills from '../../constants/skillsData';
import { contactInfo, professionalInterests } from '../../constants/contactData';

const About = () => {
  return (
    <>
      <SectionTitle title="About Me" />

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 2,
              background: '#ffffff',
              border: '2px solid #333333',
              boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#333333', fontWeight: 600 }}>
              Professional Profile
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a pharmaceutical researcher with expertise in analytical method development
              and formulation. My experience encompasses advanced analytical techniques for the analysis
              of pharmaceutical compounds and biologics.
            </Typography>
            <Typography variant="body1" paragraph>
              With a strong background in method optimization and validation for quality
              assurance, I ensure compliance with pharmaceutical standards and regulatory
              requirements while developing innovative solutions.
            </Typography>
            <Typography variant="body1">
              My research interests include stability-indicating methods, formulation development,
              and novel drug delivery systems with a focus on enhancing bioavailability and patient compliance.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 2,
              background: '#ffffff',
              border: '2px solid #333333',
              boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#333333', fontWeight: 600 }}>
              Contact Information
            </Typography>
            <List dense>
              {contactInfo.map((info) => (
                <ListItem key={info.id}>
                  <ListItemIcon>
                    <info.icon sx={{ color: '#333333' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={info.label}
                    secondary={info.value}
                    primaryTypographyProps={{ sx: { color: '#333333', fontWeight: 500 } }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Skills Section - Full Width */}
      <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
        <Grid item xs={12}>
          <Fade in={true} timeout={700}>
            <Card
              elevation={2}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                background: '#ffffff',
                border: '2px solid #333333',
                boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#ffffff',
                  py: 2,
                  px: 3,
                  color: '#333333',
                  borderBottom: '2px solid #333333',
                }}
              >
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                  Technical Skills
                </Typography>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  My expertise includes:
                </Typography>
                <Grid container spacing={2}>
                  {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={skill.id}>
                      <SkillCard skill={skill} index={index} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>

      {/* Interest Section - Full Width */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Fade in={true} timeout={700}>
            <Card
              elevation={2}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                background: '#ffffff',
                border: '2px solid #333333',
                boxShadow: '0 6px 15px rgba(0,0,0,0.05)',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#ffffff',
                  py: 2,
                  px: 3,
                  color: '#333333',
                  borderBottom: '2px solid #333333',
                }}
              >
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                  Professional Interests
                </Typography>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body1" paragraph>
                  I'm interested in opportunities related to:
                </Typography>
                <Grid container spacing={2}>
                  {professionalInterests.map((interest, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={interest.id}>
                      <InterestCard interest={interest} index={index} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default About;