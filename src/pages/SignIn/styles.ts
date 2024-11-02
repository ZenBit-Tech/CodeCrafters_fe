import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
  margin: 0,
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: { xs: 'column', md: 'row' },
  height: '100vh',
  overflow: 'hidden',
};

export const mainBoxStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  overflow: 'hidden',
};

export const leftBoxStyles: SxProps<Theme> = {
  width: { xs: '100%', md: '50%', lg: '60%' },
  height: { xs: '50vh', md: '100%' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: (theme) => theme.palette.background.default,
  px: { xs: 2, sm: 4 },
  boxSizing: 'border-box',
  overflow: 'hidden',
};

export const rightBoxStyles: SxProps<Theme> = {
  width: { xs: '100%', md: '50%', lg: '40%' },
  height: { xs: '50vh', md: '100%' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: { xs: 'center', md: 'flex-start' },
  justifyContent: 'center',
  backgroundColor: (theme) => theme.palette.background.paper,
  px: { xs: 2, sm: 6, md: 12 },
  textAlign: { xs: 'center', md: 'left' },
  boxSizing: 'border-box',
  overflow: 'hidden',
};

export const inputBoxStyles: SxProps<Theme> = {
  width: '100%',
  mt: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};
