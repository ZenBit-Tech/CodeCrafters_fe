import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LogoContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '327px',
  height: '315px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const MainImage = styled('img')({
  width: '100%',
  height: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const CornerImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '58px',
  height: '58px',
  padding: '16px',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.default,
}));
