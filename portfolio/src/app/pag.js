'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Drawer,
  Fade,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  Menu as MenuIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Science as ScienceIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  LocationOn as LocationIcon,
  ArrowRight as ArrowRightIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Biotech as BiotechIcon,
  Visibility as VisibilityIcon,
  BarChart as BarChartIcon,
  Assessment as AssessmentIcon,
  Layers as LayersIcon,
  Functions as FunctionsIcon,
  Analytics as AnalyticsIcon,
  Assignment as AssignmentIcon,
  AssuredWorkload as AssuredWorkloadIcon,
  Lightbulb as LightbulbIcon,
  Download as DownloadIcon,
  Email as EmailIcon,
  Settings as SettingsIcon,
  CheckCircle as CheckCircleIcon,
  ModelTraining as ModelTrainingIcon,
} from '@mui/icons-material';

export default function Portfolio() {
  const [value, setValue] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const skills = [
    { name: 'Analytical Method Development', level: 95, icon: <BiotechIcon /> },
    { name: 'HPLC Techniques', level: 90, icon: <ScienceIcon /> },
    { name: 'LC-MS/MS', level: 85, icon: <SettingsIcon /> },
    { name: 'Spectroscopy', level: 80, icon: <AnalyticsIcon /> },
    { name: 'Method Validation', level: 90, icon: <VisibilityIcon /> },
    { name: 'ICH Guidelines', level: 85, icon: <AssignmentIcon /> },
    { name: 'Formulation Development', level: 80, icon: <LayersIcon /> },
    { name: 'Regulatory Compliance', level: 75, icon: <AssuredWorkloadIcon /> },
    { name: 'Quality Control', level: 85, icon: <BarChartIcon /> },
    { name: 'GLP/GMP Standards', level: 80, icon: <CheckCircleIcon /> },
    { name: 'Stability Studies', level: 85, icon: <LightbulbIcon /> },
    { name: 'UPLC-HRMS', level: 80, icon: <FunctionsIcon /> },
  ];

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

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: { xs: 2, md: 4 } }}>{children}</Box>}
      </div>
    );
  }

  // Scroll to top button
  const scrollTopButton = (
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
              bgcolor: 'primary.main',
              color: 'white',
              boxShadow: 3,
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Zoom>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <Box component="header" sx={{
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        bgcolor: 'primary.main',
        color: 'white',
        boxShadow: 3,
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
              indicatorColor="secondary"
              sx={{
                '& .MuiTab-root': {
                  minWidth: 100,
                  fontWeight: 500,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
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

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: { xs: 7, md: 8 },
          backgroundColor: 'background.default',
          position: 'relative',
        }}
      >
        {/* Hero Section - Before Tabs */}
        <Box
          sx={{
            backgroundImage: 'linear-gradient(135deg, #1976d280 0%, #7c4dff80 100%)',
            backgroundSize: 'cover',
            position: 'relative',
            py: { xs: 8, md: 12 },
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 180, md: 250 },
                    height: { xs: 180, md: 250 },
                    mx: { xs: 'auto', md: 0 },
                    mb: 3,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    border: '5px solid white',
                  }}
                >
                  <Avatar
                    sx={{
                      width: '100%',
                      height: '100%',
                      bgcolor: 'primary.main',
                    }}
                  >
                    <Typography variant="h3">MJ</Typography>
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="h3"
                    component="h1"
                    color="white"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    Maitry Joshi
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    color="white"
                    sx={{
                      mb: 3,
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    Pharmaceutical Researcher
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      mb: 4,
                      maxWidth: '600px',
                      mx: { xs: 'auto', md: 0 },
                      textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    }}
                  >
                    Expert in analytical method development, formulation, and quality assurance with specialized knowledge in HPLC methods, LC-MS/MS, and spectroscopy for pharmaceutical analysis.
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      mb: 3,
                      justifyContent: { xs: 'center', md: 'flex-start' }
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: 'white',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'secondary.light',
                          color: 'white',
                        }
                      }}
                      startIcon={<EmailIcon />}
                    >
                      Contact Me
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255,255,255,0.1)',
                        }
                      }}
                      startIcon={<DownloadIcon />}
                    >
                      Download CV
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg">
          {/* About Section */}
          <TabPanel value={value} index={0}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 4,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '30%',
                  height: '3px',
                  bottom: '-10px',
                  left: 0,
                  backgroundColor: 'primary.main',
                  borderRadius: '2px',
                }
              }}
            >
              About Me
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
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
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    Contact Information
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <LocationIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Address"
                        secondary="Vadodara, Gujarat, India"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Phone" secondary="+91 8511242351" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MailIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Email"
                        secondary="maitrijoshi354@gmail.com"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LinkedInIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="LinkedIn"
                        secondary="linkedin.com/in/maitry-joshi"
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>

            <Typography
              variant="h5"
              component="h3"
              sx={{
                mt: 6,
                mb: 3,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '40%',
                  height: '2px',
                  bottom: '-8px',
                  left: 0,
                  backgroundColor: 'secondary.main',
                  borderRadius: '2px',
                }
              }}
            >
              Technical Skills
            </Typography>

            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Fade in={true} style={{ transitionDelay: `${index * 100}ms` }}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <Box sx={{ color: 'primary.main', mr: 1 }}>
                          {skill.icon}
                        </Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(0,0,0,0.08)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              backgroundImage: 'linear-gradient(90deg, #1976d2, #7c4dff)',
                            },
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            textAlign: 'right',
                            mt: 0.5,
                            color: 'text.secondary',
                          }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                    </Paper>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Experience Section */}
          <TabPanel value={value} index={1}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 4,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '50%',
                  height: '3px',
                  bottom: '-10px',
                  left: 0,
                  backgroundColor: 'primary.main',
                  borderRadius: '2px',
                }
              }}
            >
              Professional Experience
            </Typography>

            <Timeline position={isTablet ? "right" : "alternate"} sx={{ p: 0 }}>
              {/* Alembic */}
              <TimelineItem>
                <TimelineOppositeContent sx={{ display: isTablet ? 'none' : 'block' }}>
                  <Typography variant="h6" component="span" color="primary.main">
                    Dec 2023 – Present
                  </Typography>
                  <Typography color="text.secondary">Vadodara, Gujarat</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      Alembic Research Centre
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Trainee Officer, ADL-Formulation
                    </Typography>
                    {isTablet && (
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        Dec 2023 – Present | Vadodara, Gujarat
                      </Typography>
                    )}
                    <List dense>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Contribute to formulation development and optimization of pharmaceutical dosage forms." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Ensure compliance with quality standards and regulatory requirements for pharmaceutical products." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Collaborate with different teams to execute formulation studies and implement process improvements." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Prepare the technical documentation, including batch records, protocols, and reports for regulatory submissions." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Perform experimental trials and stability studies to evaluate formulation characteristics and shelf-life parameters." />
                      </ListItem>
                    </List>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              {/* Sun Pharma */}
              <TimelineItem>
                <TimelineOppositeContent sx={{ display: isTablet ? 'none' : 'block' }}>
                  <Typography variant="h6" component="span" color="primary.main">
                    Oct 2023 – Dec 2023
                  </Typography>
                  <Typography color="text.secondary">Vadodara, Gujarat</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <ScienceIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      Sun Pharmaceutical Industry Ltd.
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Trainee Officer
                    </Typography>
                    {isTablet && (
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        Oct 2023 – Dec 2023 | Vadodara, Gujarat
                      </Typography>
                    )}
                    <List dense>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Conducted qualitative and quantitative analysis of protein, peptide and related impurities using various chromatographic techniques including RP-HPLC, SEC-HPLC, and Normal phase HPLC." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Executed secondary and tertiary structure determination of proteins and peptides using CD spectroscopy." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Performed amino acid sequencing with and without enzymatic degradation, utilizing N-terminal and C-terminal sequencing by HRMS with Biopharma finder and Proteome discoverer." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Contributed to method development and validation according to ICH guidelines and pharmaceutical quality standards." />
                      </ListItem>
                    </List>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              {/* Radiant */}
              <TimelineItem>
                <TimelineOppositeContent sx={{ display: isTablet ? 'none' : 'block' }}>
                  <Typography variant="h6" component="span" color="primary.main">
                    2020 (3 Months)
                  </Typography>
                  <Typography color="text.secondary">Vadodara, Gujarat</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant="outlined">
                    <AnalyticsIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      Radiant Parenterals Ltd.
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      Quality Control Intern
                    </Typography>
                    {isTablet && (
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        2020 (3 Months) | Vadodara, Gujarat
                      </Typography>
                    )}
                    <List dense>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Evaluated various dosage forms and their packaging in the Quality Control department using analytical instruments including UV spectrometer, HPLC, TLC, and Dissolution Apparatus." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Operated laboratory equipment including pH meters, balances, and viscometers for quality testing." />
                      </ListItem>
                      <ListItem>
                        <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <ListItemText primary="Performed quality control analysis following GLP and GMP standards in pharmaceutical setting." />
                      </ListItem>
                    </List>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>

          {/* Education Section */}
          <TabPanel value={value} index={2}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 4,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '40%',
                  height: '3px',
                  bottom: '-10px',
                  left: 0,
                  backgroundColor: 'primary.main',
                  borderRadius: '2px',
                }
              }}
            >
              Education
            </Typography>

            <Timeline position={isTablet ? "right" : "alternate"} sx={{ p: 0 }}>
              {/* M.Pharm */}
              <TimelineItem>
                <TimelineOppositeContent sx={{ display: isTablet ? 'none' : 'block' }}>
                  <Typography variant="h6" component="span" color="primary.main">
                    2022 – 2024
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.light' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      M. Pharm
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Drs. Kiran & Pallavi Global University
                    </Typography>
                    {isTablet && (
                      <Typography color="text.secondary" sx={{ mb: 1 }}>
                        2022 – 2024
                      </Typography>
                    )}
                    <Typography variant="body1" sx={{
                      display: 'inline-block',
                      bgcolor: 'secondary.main',
                      color: 'white',
                      py: 0.5,
                      px: 1.5,
                      borderRadius: 2,
                      fontWeight: 'medium',
                    }}>
                      CGPA: 8.85/10
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      Specialized in Pharmaceutical Quality Assurance with a focus on analytical method development and validation techniques for pharmaceutical compounds.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              {/* B.Pharm */}
              <TimelineItem>
                <TimelineOppositeContent sx={{ display: isTablet ? 'none' : 'block' }}>
                  <Typography variant="h6" component="span" color="primary.main">
                    2018 – 2022
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.light' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      B. Pharm
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Dharmsinh Desai University, Nadiad
                    </Typography>
                    {isTablet && (
                      <Typography color="text.secondary" sx={{ mb: 1 }}>
                        2018 – 2022
                      </Typography>
                    )}
                    <Typography variant="body1" sx={{
                      display: 'inline-block',
                      bgcolor: 'secondary.main',
                      color: 'white',
                      py: 0.5,
                      px: 1.5,
                      borderRadius: 2,
                      fontWeight: 'medium',
                    }}>
                      CGPA: 7.93/10
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      Gained comprehensive knowledge in pharmaceutical sciences, chemistry, pharmacology, and drug formulation fundamentals.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>

          {/* Projects Section */}
          <TabPanel value={value} index={3}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 4,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '40%',
                  height: '3px',
                  bottom: '-10px',
                  left: 0,
                  backgroundColor: 'primary.main',
                  borderRadius: '2px',
                }
              }}
            >
              Research Projects
            </Typography>

            <Grid container spacing={3}>
              {/* M.Pharm Thesis */}
              <Grid item xs={12}>
                <Fade in={true} timeout={500}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '5px',
                        height: '100%',
                        bgcolor: 'primary.main',
                      },
                    }}
                  >
                    <Box sx={{ pl: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap' }}>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                          M. Pharm Thesis | UPLC-HRMS Method Development & Validation
                        </Typography>
                        <Typography variant="body1" color="primary" sx={{ fontWeight: 'medium' }}>
                          2023–2024
                        </Typography>
                      </Box>
                      <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: 2,
                        mb: 2,
                      }}>
                        <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                          Stability-indicating analytical method for simultaneous estimation of multiple active ingredients
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip size="small" label="UPLC-HRMS" color="primary" variant="outlined" />
                          <Chip size="small" label="Method Validation" color="primary" variant="outlined" />
                          <Chip size="small" label="ICH Q2(R1)" color="primary" variant="outlined" />
                        </Stack>
                      </Box>

                      <List dense>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                          <ListItemText primary="Developed and validated a stability-indicating UPLC-HRMS method for simultaneous estimation of Bilastine, Dextromethorphan hydrobromide, and Phenylephrine Hydrochloride." />
                        </ListItem>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                          <ListItemText primary="Implemented method optimization strategies according to ICH Q2(R1) guidelines for precision, accuracy, linearity, and robustness parameters." />
                        </ListItem>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'primary.main' }} />
                          <ListItemText primary="Conducted forced degradation studies to evaluate method specificity and ability to detect degradation products." />
                        </ListItem>
                      </List>
                    </Box>
                  </Paper>
                </Fade>
              </Grid>

              {/* M.Pharm Project */}
              <Grid item xs={12} md={6}>
                <Fade in={true} timeout={700}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: 2,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '5px',
                        height: '100%',
                        bgcolor: 'secondary.main',
                      },
                    }}
                  >
                    <Box sx={{ pl: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap' }}>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                          M. Pharm Project | Herbal Formulation
                        </Typography>
                        <Typography variant="body1" color="primary" sx={{ fontWeight: 'medium' }}>
                          2022–2023
                        </Typography>
                      </Box>
                      <Box sx={{
                        mb: 2,
                      }}>
                        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                          <Chip size="small" label="Herbal Formulation" color="secondary" variant="outlined" />
                          <Chip size="small" label="SSIP Approved" color="secondary" variant="outlined" />
                        </Stack>
                      </Box>

                      <List dense>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'secondary.main' }} />
                          <ListItemText primary="Formulated and evaluated herbal tooth gel with approval from SSIP (Student Startup & Innovation Policy)." />
                        </ListItem>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'secondary.main' }} />
                          <ListItemText primary="Characterized the formulation for physical properties, stability, and antimicrobial efficacy." />
                        </ListItem>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'secondary.main' }} />
                          <ListItemText primary="Developed quality control parameters and specifications for the herbal product." />
                        </ListItem>
                      </List>
                    </Box>
                  </Paper>
                </Fade>
              </Grid>

              {/* B.Pharm Project */}
              <Grid item xs={12} md={6}>
                <Fade in={true} timeout={900}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: { xs: 2, md: 3 },
                      borderRadius: 2,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '5px',
                        height: '100%',
                        bgcolor: 'secondary.main',
                      },
                    }}
                  >
                    <Box sx={{ pl: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap' }}>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                          B. Pharm Project | Novel Drug Delivery
                        </Typography>
                        <Typography variant="body1" color="primary" sx={{ fontWeight: 'medium' }}>
                          2021–2022
                        </Typography>
                      </Box>
                      <Box sx={{
                        mb: 2,
                      }}>
                        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                          <Chip size="small" label="Sublingual Tablets" color="secondary" variant="outlined" />
                          <Chip size="small" label="Herbal Excipient" color="secondary" variant="outlined" />
                        </Stack>
                      </Box>

                      <List dense>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'secondary.main' }} />
                          <ListItemText primary="Developed Glipizide sublingual tablet using herbal excipient as a super disintegrating agent for improved bioavailability." />
                        </ListItem>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'secondary.main' }} />
                          <ListItemText primary="Conducted pre-formulation studies, formulation optimization, and evaluation of critical quality attributes." />
                        </ListItem>
                        <ListItem>
                          <ArrowRightIcon sx={{ mr: 1, color: 'secondary.main' }} />
                          <ListItemText primary="Performed in vitro dissolution studies to compare performance with conventional tablets." />
                        </ListItem>
                      </List>
                    </Box>
                  </Paper>
                </Fade>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Contact Section */}
          <TabPanel value={value} index={4}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 4,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '40%',
                  height: '3px',
                  bottom: '-10px',
                  left: 0,
                  backgroundColor: 'primary.main',
                  borderRadius: '2px',
                }
              }}
            >
              Get In Touch
            </Typography>

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
                        <ListItem sx={{ px: 0, py: 1.5 }}>
                          <ListItemIcon>
                            <Avatar sx={{ bgcolor: 'primary.light' }}>
                              <LocationIcon />
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText
                            primary="Address"
                            secondary="Vadodara, Gujarat, India"
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                            secondaryTypographyProps={{ fontSize: '1rem' }}
                          />
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 1.5 }}>
                          <ListItemIcon>
                            <Avatar sx={{ bgcolor: 'primary.light' }}>
                              <PhoneIcon />
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText
                            primary="Phone"
                            secondary="+91 8511242351"
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                            secondaryTypographyProps={{ fontSize: '1rem' }}
                          />
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 1.5 }}>
                          <ListItemIcon>
                            <Avatar sx={{ bgcolor: 'primary.light' }}>
                              <MailIcon />
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText
                            primary="Email"
                            secondary="maitrijoshi354@gmail.com"
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                            secondaryTypographyProps={{ fontSize: '1rem' }}
                          />
                        </ListItem>
                        <ListItem sx={{ px: 0, py: 1.5 }}>
                          <ListItemIcon>
                            <Avatar sx={{ bgcolor: 'primary.light' }}>
                              <LinkedInIcon />
                            </Avatar>
                          </ListItemIcon>
                          <ListItemText
                            primary="LinkedIn"
                            secondary="linkedin.com/in/maitry-joshi"
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                            secondaryTypographyProps={{ fontSize: '1rem' }}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
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
                        <Grid item xs={6} sm={4}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              textAlign: 'center',
                              bgcolor: 'rgba(25, 118, 210, 0.05)',
                              border: '1px solid rgba(25, 118, 210, 0.1)',
                              height: '100%',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: 2,
                              },
                            }}
                          >
                            <BiotechIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="body2" fontWeight="medium">
                              Pharmaceutical Research
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              textAlign: 'center',
                              bgcolor: 'rgba(25, 118, 210, 0.05)',
                              border: '1px solid rgba(25, 118, 210, 0.1)',
                              height: '100%',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: 2,
                              },
                            }}
                          >
                            <AnalyticsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="body2" fontWeight="medium">
                              Analytical Method Development
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              textAlign: 'center',
                              bgcolor: 'rgba(25, 118, 210, 0.05)',
                              border: '1px solid rgba(25, 118, 210, 0.1)',
                              height: '100%',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: 2,
                              },
                            }}
                          >
                            <ScienceIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="body2" fontWeight="medium">
                              Formulation Development
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              textAlign: 'center',
                              bgcolor: 'rgba(25, 118, 210, 0.05)',
                              border: '1px solid rgba(25, 118, 210, 0.1)',
                              height: '100%',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: 2,
                              },
                            }}
                          >
                            <VisibilityIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="body2" fontWeight="medium">
                              Quality Control
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                          <Paper
                            elevation={1}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              textAlign: 'center',
                              bgcolor: 'rgba(25, 118, 210, 0.05)',
                              border: '1px solid rgba(25, 118, 210, 0.1)',
                              height: '100%',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: 2,
                              },
                            }}
                          >
                            <AssuredWorkloadIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                            <Typography variant="body2" fontWeight="medium">
                              Regulatory Affairs
                            </Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                      <Box sx={{ mt: 3 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          size="large"
                          startIcon={<DownloadIcon />}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)',
                            transition: 'all 0.3s',
                            '&:hover': {
                              boxShadow: '0 6px 15px rgba(25, 118, 210, 0.4)',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          Download Resume
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            </Grid>
          </TabPanel>
        </Container>
      </Box>

      {/* Scroll to top button */}
      {scrollTopButton}

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          background: 'linear-gradient(90deg, #1976d2, #7c4dff)',
          color: 'white',
          boxShadow: '0 -5px 10px rgba(0,0,0,0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Maitry Joshi. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}