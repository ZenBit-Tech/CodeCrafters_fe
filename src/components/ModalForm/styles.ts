import styled from '@emotion/styled';
import { SxProps, Theme } from '@mui/material';

import { COLORS } from '@/constants/colors';

export const formWrapper: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  backgroundColor: COLORS.text.light,
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 9999,
};

export const formContainer: SxProps<Theme> = {
  width: '400px',
  height: '100vh',
  padding: '20px',
  backgroundColor: (theme) => theme.palette.background.paper,
  position: 'absolute',
  top: '0',
  right: '0',
};

export const EditIcon = styled('img')({
  width: '22px',
  height: '22px',
  '@media (max-width:600px)': {
    width: '18px',
    height: '18px',
  },
});
