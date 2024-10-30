import { SxProps, Theme } from '@mui/material/styles';

export const containerStyles: SxProps<Theme> = {
  margin: 0,
  display: 'flex',
  alignItems: 'center',
};

export const mainBoxStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  width: '100%',
  minHeight: '100vh',
  backgroundColor: (theme) => theme.palette.background.paper,
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const leftBoxStyles: SxProps<Theme> = {
  flex: { md: '0 0 59%', lg: '0 0 850px' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mb: { xs: 4, md: 0 },
};

export const rightBoxStyles: SxProps<Theme> = {
  width: { md: '41%', lg: '590px' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  minHeight: '100vh',
  maxWidth: '100%',
  backgroundColor: (theme) => theme.palette.background.default,
  px: { xs: 2, sm: 4, md: 12 },
};
