import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import { SxProps, Theme } from '@mui/material/styles';

export const orderRow: (isNew: boolean) => SxProps<Theme> = (isNew) => {
  return {
    width: '1236px',
    display: 'flex',
    marginBottom: '-1px',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: isNew ? COLORS.lightPurple : COLORS.white,
    padding: '10px 25px',
    border: isNew ? `1px solid ${COLORS.purple}` : '0px',
    color: COLORS.text.medium,

    '&:hover': {
      background: COLORS.lightPurple,
      cursor: 'pointer',
    },
  };
};

export const customerBlock: SxProps<Theme> = {
  width: '250px',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  position: 'relative',

  '&:hover': {
    '& .popup': {
      display: 'block',
    },
  },
};

export const popup: SxProps<Theme> = {
  backgroundColor: COLORS.white,
  position: 'absolute',
  textAlign: 'center',
  top: '-60px',
  padding: '8px',
  zIndex: 9,
  border: `1px solid ${COLORS.text.light}`,
  display: 'none',
  ...FONT,
};

export const luggageStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .MuiTypography-root': {
    fontSize: '14px',
  },
};

export const customerAvatar: SxProps<Theme> = {
  marginRight: '10px',
};

export const collectionDateStyles: SxProps<Theme> = {
  width: '140px',
};

export const collectionTimeStyles: SxProps<Theme> = {
  width: '140px',
};

export const collectionAddressStyles: SxProps<Theme> = {
  width: '324px',
};

export const statusBlock: SxProps<Theme> = {
  width: '126px',
};

export const routeBlock: SxProps<Theme> = {
  width: '126px',
};
