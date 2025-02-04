import { SxProps, Theme } from '@mui/material';

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
