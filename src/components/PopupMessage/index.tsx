import React from 'react';
import { useTranslation } from 'react-i18next';

import { COLORS } from '@/constants/colors';
import { FONT } from '@/constants/font';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

import Button from '../Button';

interface PopupMessageProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  heading: string;
  mainMessage: string;
  subMessage: string;
  cancelText?: string;
  confirmText?: string;
}

const PopupMessage: React.FC<PopupMessageProps> = ({
  open,
  onClose,
  onConfirm,
  heading,
  mainMessage,
  subMessage,
  cancelText,
  confirmText,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiPaper-root.MuiDialog-paper': {
          border: `1px solid ${COLORS.main.dark}`,
        },
      }}
    >
      <DialogTitle
        fontSize={FONT.fontSize.medium}
        fontWeight={FONT.fontWeight.large}
        color={COLORS.text.medium}
      >
        {t(heading)}
      </DialogTitle>
      <DialogContent
        sx={{
          border: `1px solid ${COLORS.status.atRisk.bg}`,
          borderRadius: 1,
          backgroundColor: COLORS.text.extraLight,
          m: 2,
          mt: 0,
          padding: '14px !important',
        }}
      >
        <Typography
          fontSize={FONT.fontSize.medium}
          fontWeight={FONT.fontWeight.medium}
          color={COLORS.main.dark}
          mb={1}
        >
          {t(mainMessage)}
        </Typography>
        <Typography
          fontSize={FONT.fontSize.small}
          fontWeight={FONT.fontWeight.small}
          color={COLORS.main.dark}
        >
          {t(subMessage)}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', marginBottom: 2 }}>
        <Button
          label={cancelText || ''}
          onClick={onClose}
          variant="grey"
          sx={{ width: '25%' }}
        ></Button>
        <Button
          label={confirmText || ''}
          onClick={onConfirm}
          variant="colored"
          sx={{ width: '25%' }}
        ></Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupMessage;
