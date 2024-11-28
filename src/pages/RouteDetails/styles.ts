import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';

export const routeDetailsPageStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  background: COLORS.white,
  padding: '0px 0px 0px 15px',
  borderRadius: '10px',
  overflow: 'hidden',
};
