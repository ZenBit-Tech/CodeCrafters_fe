import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';

export const ModalContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  backgroundColor: COLORS.white,
  borderRadius: '8px',
  padding: '24px',
  maxHeight: '80vh',
  overflowY: 'auto',
});

export const NotificationBox = styled(Box)({
  marginBottom: '32px',
});

export const NotificationTitle = styled(Typography)({
  marginBottom: '32px',
});

export const OrderDescription = styled(Typography)({
  marginBottom: '10px',
});

export const NotificationTime = styled('span')({
  fontWeight: FONT.fontWeight.small,
  marginTop: '4px',
});

export const NotificationStatus = styled(Typography)({
  marginTop: '8px',
});

export const NoteTitle = styled(Typography)({
  color: COLORS.text.schemesSecondary,
  marginTop: '16px',
});

export const NoteContent = styled(Box)({
  marginTop: '8px',
  padding: '16px',
  border: `1px solid ${COLORS.text.schemesSecondary}`,
  backgroundColor: COLORS.background.lightPurple,
  borderRadius: '4px',
});

export const NoNotificationsText = styled(Typography)({
  color: COLORS.text.light,
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
});
