import { CSSProperties } from 'react';
import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

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

export const noteBadgeBlockStyles: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
};

export const noteBadgeStyles: SxProps<Theme> = {
  position: 'absolute',
  top: -12,
  right: -10,
  borderRadius: '50%',
  width: '22px',
  height: '22px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.main.light,
  color: COLORS.main.dark,
  fontSize: FONT.fontSize.small,
  fontWeight: FONT.fontWeight.large,
};
