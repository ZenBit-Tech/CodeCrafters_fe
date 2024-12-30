import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';

import { COLORS } from '@/constants/colors';
import Button from '@/components/Button';

export const Container = styled(Box)({
  backgroundColor: COLORS.text.white,
});

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const FilterOptions = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1.5fr 2fr 1fr 1.5fr 1fr 1.5fr 1.5fr',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

export const ColumnHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const RopeIcon = styled('img')({
  width: '1.375rem',
  height: '1.375rem',
  '@media (max-width:600px)': {
    width: '1.125rem',
    height: '1.125rem',
  },
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    transform: 'translate(14px, 12px)',
    '&.Mui-focused, &.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    },
  },
  '& .MuiOutlinedInput-root': {
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
    '& fieldset': {
      borderColor: COLORS.main,
    },
    '&:hover fieldset': {
      borderColor: COLORS.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.main,
    },
  },
  '& .MuiInputAdornment-root': {
    margin: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  '& .MuiInputBase-input': {
    padding: '0 8px',
    height: '100%',
    boxSizing: 'border-box',
  },
}));

export const StyledButton = styled(Button)({
  height: '38px',
});
