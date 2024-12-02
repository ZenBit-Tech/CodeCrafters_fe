import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { SxProps, Theme } from '@mui/material';

export const emptyOrdersPageStyles: SxProps<Theme> = {
  width: '1126px',
  textAlign: 'center',
  fontSize: FONT.fontSize.extraLarge,
  padding: '20px',
  background: COLORS.white,
};
