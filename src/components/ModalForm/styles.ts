import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';
import { SxProps, Theme } from '@mui/material';

export const formWrapper: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  backgroundColor: COLORS.text.light,
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 1500,
};

export const formContainer: SxProps<Theme> = {
  width: '400px',
  height: '100vh',
  padding: '20px',
  backgroundColor: COLORS.text.white,
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: 1501,
};

export const EditIcon = styled('img')({
  width: '22px',
  height: '22px',
  '@media (max-width:600px)': {
    width: '18px',
    height: '18px',
  },
});
