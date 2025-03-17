// src/components/layout/ScrollTopButton.jsx
import React from 'react';
import { Box, IconButton, Tooltip, Zoom } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';

const ScrollTopButton = ({ showScrollTop }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={showScrollTop}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 2,
        }}
      >
        <Tooltip title="Scroll to top">
          <IconButton
            aria-label="scroll to top"
            size="large"
            sx={{
              bgcolor: '#ffffff',
              color: '#333333',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              border: '2px solid #333333',
              '&:hover': {
                bgcolor: '#f8f8f8',
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Zoom>
  );
};

export default ScrollTopButton;