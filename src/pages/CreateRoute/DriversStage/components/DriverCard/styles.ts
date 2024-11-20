import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const driverRowStyles: SxProps<Theme> = {
  width: '1126px',
  display: 'flex',
  alignItems: 'center',
  height: '62px',
  border: '1px',
  borderTop: `1px solid ${COLORS.text.border}`,
  borderBottom: `1px solid ${COLORS.text.border}`,
};

export const customerBlock: SxProps<Theme> = {
  width: '250px',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  position: 'relative',

  '&:hover': {
    '& .popup': {
      display: 'block',
    },
  },
};

export const popup: SxProps<Theme> = {
  backgroundColor: COLORS.white,
  position: 'absolute',
  textAlign: 'center',
  top: '-60px',
  padding: '8px',
  zIndex: 9,
  border: `1px solid ${COLORS.text.light}`,
  display: 'none',
  ...FONT,
};
