import { SxProps, Theme } from '@mui/material';

export const formStyles: SxProps<Theme> = {
  width: '400px',
  padding: '20px',
  backgroundColor: (theme) => theme.palette.background.paper,
  position: 'absolute',
  top: 70,
  right: 0,
};

export const buttonsContainer: SxProps<Theme> = {
  display: 'flex',
  gap: '12px',
  marginTop: '16px',
};

export const input: SxProps<Theme> = {
  width: '100%',
  marginBottom: '20px',
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
