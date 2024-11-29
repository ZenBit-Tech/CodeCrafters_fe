import { CSSProperties } from 'react';
import { COLORS } from '@/constants/colors';
import { SxProps, Theme } from '@mui/material';

export const orderDetailsBlockStyles: SxProps<Theme> = {
  width: '352px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const orderRowActionsBlockStyles: SxProps<Theme> = {
  width: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const mapPinActive: CSSProperties = {
  backgroundColor: COLORS.gray,
  padding: '5px',
  borderRadius: '50%',
  cursor: 'pointer',
};

export const mapPinStyles: CSSProperties = {
  cursor: 'pointer',
};
