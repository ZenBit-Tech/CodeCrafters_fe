import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { SxProps, Theme } from '@mui/material';

export const sortingContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const sortingTextStyles: SxProps<Theme> = {
  fontSize: FONT.fontSize.small,
  fontWeight: FONT.fontWeight.small,
  color: COLORS.text.dark,
};

export const iconButtonStyles: SxProps<Theme> = {
  height: '100%',
};
