import { SxProps, Theme } from '@mui/material';

export const rowStyles: SxProps<Theme> = {
  width: '1126px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const formWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const searchInputStyles: SxProps<Theme> = {
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};
