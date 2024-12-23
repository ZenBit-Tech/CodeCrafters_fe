import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const NoRoutesContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const NoRoutesTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: '1.25rem',
  lineHeight: 1.5,
}));

export const ButtonWrapper = styled(Box)({
  display: 'inline-block',
  width: 'auto',
  maxWidth: '200px',
  margin: '0 auto',
  padding: '6px 16px',
});
