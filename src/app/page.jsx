'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Box, Container, Grid, Avatar, Typography, Stack, Button,
  useMediaQuery, useTheme
} from '@mui/material';
import { EmailOutlined as EmailIcon, DownloadOutlined as DownloadIcon } from '@mui/icons-material';

// Layout components
import Footer from './components/layout/Footer';
import ScrollTopButton from './components/layout/ScrollTopButton';

// Section components
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Research from './components/sections/Research';
import Seminars from './components/sections/Seminars';
import Workshops from './components/sections/Workshops';

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    about: false,
    experience: false,
    education: false,
    research: false,
    projects: false,
    seminars: false,
    workshops: false,
    contact: false
  });
  
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const researchRef = useRef(null);
  const projectsRef = useRef(null);
  const seminarsRef = useRef(null);
  const workshopsRef = useRef(null);
  const contactRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Show/hide scroll to top button and check section visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      // Check which sections are visible
      const updatedSections = { ...visibleSections };
      let changed = false;
      
      const sections = [
        { ref: aboutRef, name: 'about' },
        { ref: experienceRef, name: 'experience' },
        { ref: educationRef, name: 'education' },
        { ref: researchRef, name: 'research' },
        { ref: projectsRef, name: 'projects' },
        { ref: seminarsRef, name: 'seminars' },
        { ref: workshopsRef, name: 'workshops' },
        { ref: contactRef, name: 'contact' }
      ];
      
      sections.forEach(({ ref, name }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100;
          
          if (isVisible !== updatedSections[name]) {
            updatedSections[name] = isVisible;
            changed = true;
          }
        }
      });
      
      // Only update state if visibility changed
      if (changed) {
        setVisibleSections(updatedSections);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f8f9fa',
          position: 'relative',
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)',
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '2px solid #333333',
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
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: '3px solid #333333',
                    animation: 'pulse 3s infinite ease-in-out',
                  }}
                >
                  <Avatar
                    sx={{
                      width: '100%',
                      height: '100%',
                      bgcolor: '#ffffff',
                      color: '#333333',
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>MJ</Typography>
                  </Avatar>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box sx={{ 
                  textAlign: { xs: 'center', md: 'left' },
                  animation: 'fadeIn 1s ease-out',
                }}>
                  <Typography
                    variant="h2"
                    component="h1"
                    color="#333333"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    Maitry Joshi
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    color="#555555"
                    sx={{
                      mb: 3,
                    }}
                  >
                    Pharmaceutical Researcher
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#666666"
                    sx={{
                      mb: 4,
                      maxWidth: '600px',
                      mx: { xs: 'auto', md: 0 },
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
                        bgcolor: '#333333',
                        color: 'white',
                        borderRadius: '4px',
                        border: '2px solid #333333',
                        '&:hover': {
                          bgcolor: 'white',
                          color: '#333333',
                        }
                      }}
                      startIcon={<EmailIcon />}
                      onClick={() => scrollToSection(contactRef)}
                    >
                      Contact Me
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderRadius: '4px',
                        borderColor: '#333333',
                        color: '#333333',
                        border: '2px solid #333333',
                        '&:hover': {
                          borderColor: '#333333',
                          bgcolor: 'rgba(51,51,51,0.05)',
                        }
                      }}
                      startIcon={<DownloadIcon />}
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV
                    </Button>
                  </Stack>
                  
                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="text"
                      onClick={() => scrollToSection(aboutRef)}
                      sx={{
                        color: '#333333',
                        '&:hover': {
                          bgcolor: 'transparent',
                          color: '#555555',
                        },
                        animation: 'pulse 2s infinite'
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center' 
                      }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          Scroll Down
                        </Typography>
                        <Box sx={{ 
                          width: '30px', 
                          height: '30px', 
                          borderLeft: '2px solid #333333',
                          borderBottom: '2px solid #333333',
                          transform: 'rotate(-45deg)'
                        }} />
                      </Box>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* About Section */}
        <Box 
          ref={aboutRef} 
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: '#ffffff',
            borderBottom: '1px solid #e0e0e0',
            opacity: visibleSections.about ? 1 : 0,
            transform: visibleSections.about ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Container maxWidth="lg">
            <About />
          </Container>
        </Box>

        {/* Experience Section */}
        <Box 
          ref={experienceRef}
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0',
            opacity: visibleSections.experience ? 1 : 0,
            transform: visibleSections.experience ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Container maxWidth="lg">
            <Experience />
          </Container>
        </Box>

        {/* Education Section */}
        <Box 
          ref={educationRef}
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: '#ffffff',
            borderBottom: '1px solid #e0e0e0',
            opacity: visibleSections.education ? 1 : 0,
            transform: visibleSections.education ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Container maxWidth="lg">
            <Education />
          </Container>
        </Box>

        {/* Research Section */}
        <Box 
          ref={researchRef}
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0',
            opacity: visibleSections.research ? 1 : 0,
            transform: visibleSections.research ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Container maxWidth="lg">
            <Research />
          </Container>
        </Box>

        {/* Projects Section */}
        <Box 
          ref={projectsRef}
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: '#ffffff',
            borderBottom: '1px solid #e0e0e0',
            opacity: visibleSections.projects ? 1 : 0,
            transform: visibleSections.projects ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Container maxWidth="lg">
            <Projects />
          </Container>
        </Box>

        {/* Seminars Section */}
        <Box 
          ref={seminarsRef}
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0',
            opacity: visibleSections.seminars ? 1 : 0,
            transform: visibleSections.seminars ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Container maxWidth="lg">
            <Seminars />
          </Container>
        </Box>

        {/* Workshops Section */}
        <Box 
          ref={workshopsRef}
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: '#ffffff',
            borderBottom: '1px solid #e0e0e0',
            opacity: visibleSections.workshops ? 1 : 0,
            transform: visibleSections.workshops ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <Container maxWidth="lg">
            <Workshops />
          </Container>
        </Box>
      </Box>

      {/* Scroll to top button */}
      <ScrollTopButton showScrollTop={showScrollTop} />

      {/* Footer */}
      <Footer />
    </Box>
  );
}