import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';

export const errorTitleStyle: SxProps<Theme> = {
  background: COLORS.lightRed,
  color: COLORS.red,
  padding: '1px 5px',
  borderradius: '4px',
  display: 'block',
  marginTop: '15px',
};

export const errorSubtitleStyles: SxProps<Theme> = {
  color: COLORS.text.dark,
};
