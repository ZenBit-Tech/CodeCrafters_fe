import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const sortingRow: SxProps<Theme> = {
  width: '1238px',
  background: '#fff',
  padding: '10px 25px',
  display: 'flex',
  justifyContent: 'space-between',
};

export const sortingContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
};

export const sortingTextStyles: SxProps<Theme> = {
  fontSize: FONT.fontSize.small,
  fontWeight: FONT.fontWeight.small,
  color: COLORS.text.dark,
};

export const iconButtonStyles: SxProps<Theme> = {
  height: 'auto',
};
