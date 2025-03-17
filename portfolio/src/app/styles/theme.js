// src/styles/theme.js
export const lightTheme = {
    colors: {
      primary: '#333333',
      secondary: '#555555',
      tertiary: '#666666',
      background: '#ffffff',
      card: '#ffffff',
      accent: '#f5f5f5',
    },
    borders: {
      standard: '2px solid #333333',
      radius: {
        small: '2px',
        medium: '4px',
        large: '8px',
        pill: '20px',
      }
    },
    shadows: {
      small: '0 2px 5px rgba(0,0,0,0.05)',
      medium: '0 4px 10px rgba(0,0,0,0.05)',
      large: '0 6px 15px rgba(0,0,0,0.1)',
    },
    typography: {
      fontWeights: {
        regular: 400,
        medium: 500,
        bold: 600,
        heavy: 700,
      }
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
    },
    transitions: {
      default: 'all 0.3s ease',
      fast: 'all 0.2s ease',
      slow: 'all 0.4s ease',
    }
  };
  
  export default lightTheme;