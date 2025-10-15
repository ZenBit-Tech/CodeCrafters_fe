import { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  textAlign: 'center',
  padding: 4,
  backgroundColor: (theme) => theme.palette.background.default,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const headingStyles: SxProps<Theme> = {
  fontSize: '36px',
  fontWeight: (theme) => theme.typography.fontWeightLight,
  color: (theme) => theme.palette.text.primary,
  marginBottom: 2,
};

export const messageStyles: SxProps<Theme> = {
  fontSize: '18px',
  fontWeight: (theme) => theme.typography.fontWeightLight,
  color: (theme) => theme.palette.text.secondary,
  marginBottom: 3,
};
