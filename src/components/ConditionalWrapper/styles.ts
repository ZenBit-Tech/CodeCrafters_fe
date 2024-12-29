import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const noData: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  color: COLORS.text.light,
  marginTop: '20px',
  fontSize: FONT.fontSize.extraLarge,
  minHeight: '50vh',
};
