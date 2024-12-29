import { FC } from 'react';

import { Modal, Typography } from '@mui/material';
import { t } from 'i18next';

import { ModalBox, ModalButton } from './styles';

import useTokenExpiredModal from './useTokenExpiredModal';

const TokenExpiredModal: FC = () => {
  const { isModalOpen, handleResendEmail, handleCloseModal } =
    useTokenExpiredModal();

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <ModalBox>
        <Typography variant="h1">{t('auth.tokenTitle')}</Typography>
        <Typography variant="body2">{t('auth.tokenDescription')}</Typography>
        <ModalButton
          label={t('auth.buttonText')}
          variant="colored"
          onClick={handleResendEmail}
        />
      </ModalBox>
    </Modal>
  );
};

export default TokenExpiredModal;
