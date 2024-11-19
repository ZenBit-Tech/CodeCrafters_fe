import { SxProps, Theme } from '@mui/material';

export const formWrapper: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ccccccc2',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 1500,
};

export const formContainer: SxProps<Theme> = {
  width: '400px',
  height: '100vh',
  padding: '20px',
  backgroundColor: '#fff',
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: 1501,
};
