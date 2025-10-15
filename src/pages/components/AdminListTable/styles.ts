import { styled } from '@mui/material/styles';
import { Box, Typography, Select, PaginationItem } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(1),
  },
}));

export const StyledSelect = styled(Select)({
  minWidth: '100px',
});

export const ListHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.5),
  },
}));

export const ScrollContainer = styled(Box)(({ theme }) => ({
  maxHeight: '55vh',
  width: '100%',
  overflow: 'hidden',
  '&:hover': {
    overflowY: 'auto',
  },
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('sm')]: {
    maxHeight: '50vh',
    padding: theme.spacing(1),
  },
}));

export const AdminListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  boxSizing: 'border-box',
  width: '100%',
  borderTop: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(1),
  },
}));

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

export const StyledPaginationButton = styled('span')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  fontWeight: FONT.fontWeight.small,
  fontSize: FONT.fontSize.medium,
  color: COLORS.text.dark,
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT.fontSize.small,
  },
}));

export const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  fontWeight: FONT.fontWeight.small,
  fontSize: FONT.fontSize.small,
  '&.Mui-selected': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
}));

export const PaginationInfo = styled(Typography)(({ theme }) => ({
  fontWeight: FONT.fontWeight.small,
  fontSize: FONT.fontSize.small,
  color: COLORS.text.dark,
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const TableTitle = styled(Typography)(({ theme }) => ({
  fontWeight: FONT.fontWeight.large,
  fontSize: FONT.fontSize.medium,
  color: COLORS.text.dark,
  [theme.breakpoints.down('sm')]: {
    fontSize: FONT.fontSize.small,
  },
}));

export const DeleteIcon = styled('img')({
  width: '22px',
  height: '22px',
  '@media (max-width:600px)': {
    width: '18px',
    height: '18px',
  },
});

export const EditIcon = styled('img')({
  width: '22px',
  height: '22px',
  '@media (max-width:600px)': {
    width: '18px',
    height: '18px',
  },
});
