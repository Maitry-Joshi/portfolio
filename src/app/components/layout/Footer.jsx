// src/components/layout/Footer.jsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        bgcolor: '#333333',
        color: 'white',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Maitry Joshi. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;