import { CSSProperties } from 'react';
import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';

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

export const removeOrderIconStyles: CSSProperties = {
  cursor: 'pointer',
};
