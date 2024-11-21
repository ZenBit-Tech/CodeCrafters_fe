import { COLORS } from '@/constants/colors';
import { SxProps, Theme } from '@mui/material';

export const wrapper: SxProps<Theme> = {
  background: COLORS.white,
};

export const routeDetailsHeaderStyles: SxProps<Theme> = {
  width: '344px',
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#DBDADE',
  borderRadius: '5px',
};

export const orderRowStyles: SxProps<Theme> = {
  width: '344px',
  padding: '5px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
