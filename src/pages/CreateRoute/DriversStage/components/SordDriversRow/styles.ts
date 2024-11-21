import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const sortingRow: SxProps<Theme> = {
  width: '1126px',
  background: COLORS.white,
  padding: '10px 25px 10px 110px',
  display: 'flex',
  justifyContent: 'space-between',
};

export const sortingContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  width: '140px',
};

export const sortingTextStyles: SxProps<Theme> = {
  fontSize: FONT.fontSize.small,
  fontWeight: FONT.fontWeight.small,
  color: COLORS.text.dark,
};

export const iconButtonStyles: SxProps<Theme> = {
  height: 'auto',
};

export const selectBoxContainer: SxProps<Theme> = {
  ...sortingContainer,
  width: '156px',
  display: 'flex',
  justifyContent: 'start',
};

export const collectionAddressStyles: SxProps<Theme> = {
  ...sortingContainer,
  width: '324px',
  paddingLeft: '24px',
};

export const luggagesBlockStyles: SxProps<Theme> = {
  ...sortingContainer,
  width: '130px',
};

export const clientBlockStyles: SxProps<Theme> = {
  ...sortingContainer,
  width: '210px',
};

export const selectStyles: SxProps<Theme> = {
  border: 'none',
  marginRight: '5px',

  '& fieldset': { border: 'none' },
};

export const routeBlock: SxProps<Theme> = {
  ...sortingContainer,
  width: '126px',
};
