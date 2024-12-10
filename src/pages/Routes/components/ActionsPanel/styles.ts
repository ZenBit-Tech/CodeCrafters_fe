import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';

export const mapDatePickerContainer: SxProps<Theme> = {
  position: 'relative',
};

export const mapDatePicker: SxProps<Theme> = {
  position: 'absolute',
  backgroundColor: COLORS.white,
  zIndex: 9,
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

export const closeDatePickerStyles: SxProps<Theme> = {
  marginRight: '15px',
};
