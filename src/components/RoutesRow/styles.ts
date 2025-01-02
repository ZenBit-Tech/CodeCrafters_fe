import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const NotesCount = styled(Box)({
  position: 'absolute',
  top: -4,
  right: -2,
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
});

export const IconWrapper = styled('img')({
  width: '1.375rem',
  height: '1.375rem',
  '@media (max-width:600px)': {
    width: '1.125rem',
    height: '1.125rem',
  },
});
