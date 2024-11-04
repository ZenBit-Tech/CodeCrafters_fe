import { createTheme } from '@mui/material/styles';
import { COLORS } from './constants/colors';
import { FONT } from './constants/font';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    lined: true;
    colored: true;
    grey: true;
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
  },
  typography: {
    fontSize: FONT.fontSize.medium,
    fontWeightLight: FONT.fontWeight.small,
    fontFamily: FONT.family,
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'colored' },
          style: ({ theme }) => ({
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius,
            color: COLORS.text.white,
            whiteSpace: 'nowrap',
          }),
        },
        {
          props: { variant: 'lined' },
          style: ({ theme }) => ({
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
            whiteSpace: 'nowrap',
          }),
        },
        {
          props: { variant: 'grey' },
          style: {
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: COLORS.status.completed.bg,
            color: COLORS.status.completed.text,
            whiteSpace: 'nowrap',
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
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
