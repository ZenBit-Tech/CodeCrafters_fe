import { SxProps, Theme } from '@mui/material';

export const formWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const searchInputStyles: SxProps<Theme> = {
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};
