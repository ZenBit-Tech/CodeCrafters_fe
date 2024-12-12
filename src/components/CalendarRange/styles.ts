import { styled } from '@mui/material/styles';
import { Box, Button as MuiButton } from '@mui/material';

export const Container = styled(Box)({
  position: 'relative',
});

export const CalendarTrigger = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 12px',
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '4px',
  cursor: 'pointer',
}));

export const InputField = styled('input')({
  border: 'none',
  outline: 'none',
  width: '100%',
  cursor: 'pointer',
});

export const CalendarPopup = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50px',
  left: 0,
  zIndex: 1000,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  padding: '10px',
  boxShadow: theme.shadows[4],
}));

export const Header = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
});

export const NavigationButton = styled(MuiButton)(({ theme }) => ({
  minWidth: '32px',
  padding: '4px',
  fontSize: '16px',
  color: theme.palette.text.primary,
}));

export const ActionButtons = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
  gap: '15px',
});

export const ArrowIcon = styled('img')({
  width: '1.375rem',
  height: '1.375rem',
  '@media (max-width:600px)': {
    width: '1.125rem',
    height: '1.125rem',
  },
});
