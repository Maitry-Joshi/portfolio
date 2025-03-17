// src/components/layout/Header.jsx
import React from 'react';
import { 
  Box, Toolbar, Typography, Tabs, Tab, IconButton, useMediaQuery, useTheme 
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = ({ value, handleChange, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component="header" sx={{
      position: 'fixed',
      width: '100%',
      zIndex: 1000,
      bgcolor: '#ffffff',
      color: '#333333',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      borderBottom: '2px solid #333333',
    }}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{
          flexGrow: 1,
          fontWeight: 'bold',
          letterSpacing: '0.5px',
        }}>
          Maitry Joshi
        </Typography>
        {!isMobile && (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            sx={{
              '& .MuiTab-root': {
                minWidth: 100,
                fontWeight: 500,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              },
              '& .Mui-selected': {
                color: '#333333',
                fontWeight: 600,
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#333333',
                height: 3,
              }
            }}
          >
            <Tab label="About" />
            <Tab label="Experience" />
            <Tab label="Education" />
            <Tab label="Projects" />
            <Tab label="Contact" />
          </Tabs>
        )}
      </Toolbar>
    </Box>
  );
};

export default Header;