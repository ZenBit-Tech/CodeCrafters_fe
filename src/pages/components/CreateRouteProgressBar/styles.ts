import { COLORS } from '@/constants/colors';
import { SxProps, Theme } from '@mui/material';

export const progressBarStyles: SxProps<Theme> = {
  width: '1127px',
  marginBottom: '36px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: COLORS.white,
  borderRadius: '10px',
  padding: '20px',
};

export const stepContainer: SxProps<Theme> = {
  width: '230px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const stageText: SxProps<Theme> = {
  color: COLORS.text.dark,
};
