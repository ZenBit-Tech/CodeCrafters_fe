import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

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
  backgroundColor: COLORS.gray,
  position: 'fixed',
  top: 0,
  left: 0,
};

export const form: SxProps<Theme> = {
  width: '400px',
  height: '100vh',
  padding: '20px',
  backgroundColor: COLORS.white,
  position: 'absolute',
  top: 0,
  right: 0,
};

export const addBtn: SxProps<Theme> = {
  marginRight: '12px !important',
};

export const noUsers: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  color: COLORS.text.light,
  marginTop: '20px',
  fontSize: FONT.fontSize.extraLarge,
  minHeight: '50vh',
};
