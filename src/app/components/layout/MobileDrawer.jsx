// src/components/layout/MobileDrawer.jsx
import React from 'react';
import { 
  Box, Drawer, Typography, Divider, List, ListItemButton, 
  ListItemIcon, ListItemText 
} from '@mui/material';
import {
  Person as PersonIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Science as ScienceIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

const MobileDrawer = ({ mobileOpen, handleDrawerToggle, setValue }) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Maitry Joshi
      </Typography>
      <Divider />
      <List>
        <ListItemButton onClick={() => setValue(0)}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton onClick={() => setValue(1)}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItemButton>
        <ListItemButton onClick={() => setValue(2)}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Education" />
        </ListItemButton>
        <ListItemButton onClick={() => setValue(3)}>
          <ListItemIcon>
            <ScienceIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton onClick={() => setValue(4)}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;