import { styled } from '@mui/material/styles';
import { Box, Select, TextField } from '@mui/material';

import { COLORS } from '@/constants/colors';

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

export const StyledSelect = styled(Select)({
  '&.MuiSelect-root': {
    padding: 0,
    minWidth: 'auto',
  },
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
  '&.MuiSelect-select': {
    display: 'inline',
  },
  '.MuiSelect-icon': {
    display: 'none',
  },
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
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLORS.main,
    },
    '&:hover fieldset': {
      borderColor: COLORS.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.main,
    },
    paddingRight: theme.spacing(1),
  },
  '& .MuiInputAdornment-root': {
    cursor: 'pointer',
  },
}));
