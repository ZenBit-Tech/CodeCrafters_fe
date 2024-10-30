import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      border: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      border?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#F8F7FA',
    },
    text: {
      primary: '#4B465C',
    },
    customColors: {
      border: '#7367F0',
    },
  },
  typography: {
    h4: {
      fontSize: '26px',
      fontWeight: 600,
      fontFamily: 'Public Sans',
      color: '#4B465C',
    },
    body1: {
      fontSize: '15px',
      fontWeight: 400,
      fontFamily: 'Public Sans',
      color: '#4B465C',
    },
  },
});

export default theme;
