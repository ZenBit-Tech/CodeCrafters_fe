import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { ROLE_STRING } from '@/constants/constants';

export const container: SxProps<Theme> = {
  boxShadow: `0px 4px 18px 0px ${COLORS.text.extraLight}`,
  borderRadius: 1,
  backgroundColor: COLORS.text.white,
  width: '100%',
  padding: '24px',
};

export const title: SxProps<Theme> = {
  color: COLORS.text.dark,
  fontWeight: FONT.fontWeight.large,
  marginBottom: '20px',
};

export const filtersContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
  height: '38px',
};

export const searchField: SxProps<Theme> = {
  width: '25%',
  '& .MuiOutlinedInput-root': {
    height: '100%',
  },
  '& .MuiFormLabel-root': {
    transform: (theme) =>
      theme.typography.htmlFontSize === 16
        ? 'translate(14px, -9px) scale(0.75)'
        : 'translate(14px, 9px) scale(1)',
  },
  '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    transform: 'translate(14px, -9px) scale(0.75)',
    maxWidth: 'calc(133% - 32px)',
  },
};

export const roleSelect: SxProps<Theme> = {
  color: COLORS.text.dark,
};

export const buttonContainer: SxProps<Theme> = {
  display: 'flex',
  gap: '16px',
};

export const columnsHeader: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  alignItems: 'center',
};

export const columnLabel: (key: string) => SxProps<Theme> = (key) => ({
  display: 'flex',
  alignItems: 'center',
  width: key === ROLE_STRING ? '15%' : key === 'name' ? '25%' : '20%',
});

export const columnTypography: SxProps<Theme> = {
  color: COLORS.text.dark,
  fontSize: FONT.fontSize.small,
};

export const paginationContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '20px',
};
