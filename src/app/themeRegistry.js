'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from './emotionCache';

// Custom theme with pharmaceutical-inspired colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Professional blue
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#7c4dff', // Purple accent
      light: '#b47cff',
      dark: '#3f1dcb',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.2rem',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.9rem',
      letterSpacing: '-0.3px',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.6rem',
      letterSpacing: '-0.2px',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.4rem',
      letterSpacing: '-0.1px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          transition: 'background-color 0.3s, color 0.3s',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
          transition: 'all 0.3s',
        },
        contained: {
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          overflow: 'hidden',
          transition: 'all 0.3s',
          '&:hover': {
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
          transition: 'all 0.2s',
          '&:hover': {
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.3s',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 8,
        },
        bar: {
          transition: 'transform 0.8s ease',
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          width: 2,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: '3px 3px 0 0',
          transition: 'all 0.3s',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 100,
          transition: 'all 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 6px 12px rgba(0,0,0,0.08)',
    '0px 8px 16px rgba(0,0,0,0.08)',
    '0px 10px 20px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 14px 28px rgba(0,0,0,0.15)',
    '0px 16px 32px rgba(0,0,0,0.15)',
    '0px 18px 36px rgba(0,0,0,0.18)',
    '0px 20px 40px rgba(0,0,0,0.18)',
    '0px 22px 44px rgba(0,0,0,0.2)',
    '0px 24px 48px rgba(0,0,0,0.2)',
    '0px 26px 52px rgba(0,0,0,0.22)',
    '0px 28px 56px rgba(0,0,0,0.22)',
    '0px 30px 60px rgba(0,0,0,0.25)',
    '0px 32px 64px rgba(0,0,0,0.25)',
    '0px 34px 68px rgba(0,0,0,0.25)',
    '0px 36px 72px rgba(0,0,0,0.28)',
    '0px 38px 76px rgba(0,0,0,0.28)',
    '0px 40px 80px rgba(0,0,0,0.3)',
    '0px 42px 84px rgba(0,0,0,0.3)',
    '0px 44px 88px rgba(0,0,0,0.32)',
    '0px 46px 92px rgba(0,0,0,0.32)',
    '0px 48px 96px rgba(0,0,0,0.35)',
  ],
});

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}