// src/components/sections/Contact.jsx
import React from 'react';
import { 
  Grid, Card, Box, Typography, List, ListItem, ListItemIcon, 
  ListItemText, Avatar, Button, Fade, CardContent
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import SectionTitle from '../ui/SectionTitle';
import InterestCard from '../ui/InterestCard';
import { contactInfo, professionalInterests } from '../../constants/contactData';

const Contact = () => {
  return (
    <>
      <SectionTitle title="Get In Touch" />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Fade in={true} timeout={500}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                height: '100%',
                background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            >
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  py: 2,
                  px: 3,
                  color: 'white',
                }}
              >
                <Typography variant="h6" component="h3">
                  Contact Information
                </Typography>
              </Box>
              <CardContent sx={{ px: 3, py: 3 }}>
                <List>
                  {contactInfo.map((info) => (
                    <ListItem key={info.id} sx={{ px: 0, py: 1.5 }}>
                      <ListItemIcon>
                        <Avatar sx={{ bgcolor: 'primary.light' }}>
                          <info.icon />
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={info.label}
                        secondary={info.value}
                        primaryTypographyProps={{ fontWeight: 'medium' }}
                        secondaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;