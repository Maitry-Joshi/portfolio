import React from 'react';
import {
    Grid, Card, Box, Typography, Button, Fade, CardContent
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import SectionTitle from '../ui/SectionTitle';
import InterestCard from '../ui/InterestCard';
import { contactInfo, professionalInterests } from '../../constants/contactData';

const Interest = () => {
    return (
        <>
            <SectionTitle title="My Interest" />
            <Grid item xs={12} md={6}>
                <Fade in={true} timeout={700}>
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
                                Professional Interests
                            </Typography>
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                            <Typography variant="body1" paragraph>
                                I'm interested in opportunities related to:
                            </Typography>
                            <Grid container spacing={2}>
                                {professionalInterests.map((interest, index) => (
                                    <Grid item xs={6} sm={4} key={interest.id}>
                                        <InterestCard interest={interest} index={index} />
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Fade>
            </Grid>
        </>
    );
};

export default Interest;