import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const SideBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '30%',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 4px 10px ${theme.palette.secondary.light}`,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(1),
  },
}));

export const MainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '70%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(1),
  },
}));

export const StyledMainBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2.5),
  backgroundColor: theme.palette.background.paper,
  boxShadow: `0 4px 10px ${theme.palette.secondary.light}`,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingLeft: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: FONT.fontWeight.large,
  fontSize: FONT.fontSize.large,
  color: COLORS.text.dark,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
}));
