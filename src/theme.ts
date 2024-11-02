import { createTheme, Theme, Interpolation } from '@mui/material/styles';
import { COLORS } from './constants/colors';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    lined: true;
    colored: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.main.dark,
    },
    secondary: {
      main: COLORS.text.dark,
    },
    background: {
      default: COLORS.background.logoBlock,
      paper: COLORS.text.white,
    },
  },
  typography: {
    fontSize: 15,
    fontWeightLight: 400,
    fontFamily: '"Public Sans", sans-serif',
    h1: {
      fontSize: '26px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '15px',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'colored' },
          style: ({ theme }): Interpolation<{ theme: Theme }> => ({
            fontWeight: 500,
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius,
            padding: '10px 20px',
            color: COLORS.text.white,
          }),
        },
        {
          props: { variant: 'lined' },
          style: ({ theme }): Interpolation<{ theme: Theme }> => ({
            fontWeight: 500,
            textTransform: 'none',
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
          }),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }): Interpolation<{ theme: Theme }> => ({
          '& label': {
            color: COLORS.text.light,
          },
          color: COLORS.text.light,
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: COLORS.green,
          '&.Mui-checked': {
            color: COLORS.green,
          },
        },
      },
    },
  },
});

export default theme;
