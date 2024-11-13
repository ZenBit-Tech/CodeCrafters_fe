import { styled } from '@mui/material/styles';
import { Box, Typography, Select, Avatar, PaginationItem } from '@mui/material';

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
    alignItems: 'flex-start',
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
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  fontWeight: FONT.fontWeight.large,
  fontSize: FONT.fontSize.medium,
}));

export const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    maxHeight: '50vh',
  },
}));

export const StyledPaginationButton = styled('span')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  fontWeight: FONT.fontWeight.small,
  fontSize: FONT.fontSize.medium,
  color: COLORS.text.dark,
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

export const PaginationInfo = styled(Typography)({
  fontWeight: FONT.fontWeight.small,
  fontSize: FONT.fontSize.small,
  color: COLORS.text.dark,
});

export const TableTitle = styled(Typography)({
  fontWeight: FONT.fontWeight.large,
  fontSize: FONT.fontSize.medium,
  color: COLORS.text.dark,
});

export const DeleteIcon = styled('img')({
  width: '22px',
  height: '22px',
});

export const EditIcon = styled('img')({
  width: '22px',
  height: '22px',
});
