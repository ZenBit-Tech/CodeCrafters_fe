import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    lined: true;
    colored: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#7367F0',
      light: 'rgba(219, 218, 222, 1)',
    },
    secondary: {
      main: '#4B465C',
      light: 'rgba(75, 70, 92, 0.08)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
  },
  typography: {
    fontSize: 15,
    fontWeightLight: 400,
    fontFamily: '"Public Sans", sans-serif',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'colored' },
          style: ({ theme }) => ({
            fontWeight: 500,
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,
            borderRadius: 6,
            padding: '10px 20px',
            color: theme.palette.primary.contrastText,
          }),
        },
        {
          props: { variant: 'lined' },
          style: ({ theme }) => ({
            fontWeight: 500,
            textTransform: 'none',
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
          }),
        },
      ],
    },
  },
});

export default theme;
