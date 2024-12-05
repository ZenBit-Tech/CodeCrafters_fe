import { Box, styled, Typography } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const Title = styled(Typography)({
  display: 'inline-block',
});

export const Count = styled(Box)({
  marginLeft: '8px',
  backgroundColor: COLORS.main.light,
  borderRadius: '20px',
  padding: '2px 8px',
  fontSize: FONT.fontSize.small,
  fontWeight: FONT.fontWeight.large,
  color: COLORS.main.dark,
});
