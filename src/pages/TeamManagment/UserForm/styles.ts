import { SxProps, Theme } from '@mui/material';

export const input: SxProps<Theme> = {
  width: '100%',
  marginBottom: '20px !important',
  '& .MuiOutlinedInput-root': {
    height: '38px',
    '& input': {
      paddingTop: '12px',
    },
  },
  '& .MuiInputLabel-root': {
    top: '-8px',
  },
};

export const wrapper: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ccccccc2',
  position: 'fixed',
  top: 0,
  left: 0,
};

export const form: SxProps<Theme> = {
  width: '400px',
  height: '100vh',
  padding: '20px',
  backgroundColor: '#fff',
  position: 'absolute',
  top: 0,
  right: 0,
};

export const addBtn: SxProps<Theme> = {
  marginRight: '12px !important',
};
