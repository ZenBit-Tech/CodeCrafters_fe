import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';

export const mapDatePickerContainer: SxProps<Theme> = {
  position: 'relative',
};

export const mapDatePicker: SxProps<Theme> = {
  position: 'absolute',
  backgroundColor: COLORS.white,
  zIndex: 8,
  top: '60px',
  transform: 'translate(-50%, 0)',
};

export const mapDatePickerActions: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0px 10px 10px',
  borderRadius: '4px',
};

export const openMapDatePicker: SxProps<Theme> = { height: '55px' };

export const closeDatePickerStyles: SxProps<Theme> = {
  marginRight: '15px',
};

export const mapContainer: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  background: COLORS.gray,
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: 8,
};

export const closeMapBtn: SxProps<Theme> = {
  zIndex: 9,
  position: 'relative',
  top: '-120px',
  left: '100px',
};
