import { createTheme, Interpolation, Theme } from '@mui/material/styles';

import { COLORS } from './constants/colors';
import { FONT } from './constants/font';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    colored: true;
    lined: true;
    grey: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.main.dark,
      light: COLORS.main.light,
    },
    secondary: {
      main: COLORS.text.dark,
      dark: COLORS.text.extraLight,
      light: COLORS.text.border,
    },
    background: {
      default: COLORS.background.logoBlock,
      paper: COLORS.text.white,
    },
  },
  typography: {
    fontSize: FONT.fontSize.medium,
    fontWeightLight: FONT.fontWeight.small,
    fontFamily: FONT.family,
    h1: {
      fontSize: '26px',
      fontWeight: FONT.fontWeight.large,
    },
    h2: {
      fontSize: FONT.fontSize.extraLarge,
      fontWeight: FONT.fontWeight.large,
      color: COLORS.text.dark,
    },
    body1: {
      fontSize: FONT.fontSize.medium,
      fontWeight: FONT.fontWeight.small,
    },
    body2: {
      fontSize: FONT.fontSize.medium,
      fontWeight: FONT.fontWeight.large,
      color: COLORS.text.dark,
    },
    subtitle1: {
      fontSize: FONT.fontSize.medium,
      fontWeight: FONT.fontWeight.small,
      color: COLORS.text.dark,
    },

    subtitle2: {
      fontSize: FONT.fontSize.small,
      fontWeight: FONT.fontWeight.small,
      color: COLORS.text.light,
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
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius,
            color: COLORS.text.white,
          }),
        },
        {
          props: { variant: 'lined' },
          style: ({ theme }): Interpolation<{ theme: Theme }> => ({
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
          }),
        },
        {
          props: { variant: 'grey' },
          style: (): Interpolation<{ theme: Theme }> => ({
            fontWeight: FONT.fontWeight.medium,
            textTransform: 'none',
            backgroundColor: COLORS.status.completed.bg,
            color: COLORS.status.completed.text,
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
