import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';

export const driverBlockContainerStyles: SxProps<Theme> = {
  width: '344px',
  marginBottom: '15px',
  padding: '8px',
  border: `1px solid ${COLORS.gray}`,
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
};

export const routePropsBlockStyles: SxProps<Theme> = {
  marginLeft: '15px',
};

export const routePropsRowStyles: SxProps<Theme> = {
  width: '250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
