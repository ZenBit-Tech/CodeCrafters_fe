import { SxProps, Theme } from '@mui/material';
import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { CSSProperties } from 'react';

export const wrapper: SxProps<Theme> = {
  background: COLORS.white,
};

export const routeDetailsHeaderStyles: SxProps<Theme> = {
  width: '354px',
  padding: '5px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: COLORS.gray,
  borderRadius: '5px',
  ...FONT,
};

export const routeDetailsHeaderClosedStyles: SxProps<Theme> = {
  width: '354px',
  padding: '5px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: COLORS.white,
  border: `1px solid ${COLORS.gray}`,
  borderRadius: '5px',
  ...FONT,
};

export const routeHeaderIconsStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const orderRowStyles: SxProps<Theme> = {
  width: '344px',
  padding: '5px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const iconActiveStyles: CSSProperties = {
  background: COLORS.gray,
  borderRadius: '50%',
  padding: '7px',
  cursor: 'pointer',
};

export const iconStyles: CSSProperties = {
  cursor: 'pointer',
};
