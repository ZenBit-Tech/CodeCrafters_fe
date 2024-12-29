import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import { t } from 'i18next';

import { RootState } from '@/store/store';
import { closeModal } from '@/store/slices/tokenModalSlice';
import { sendLoginLink } from '@/api/userActions';
import { logout } from '@/store/slices/authSlice';

type UseTokenExpiredModalReturn = {
  isModalOpen: boolean;
  handleResendEmail: () => Promise<void>;
  handleCloseModal: () => void;
};

const useTokenExpiredModal = (): UseTokenExpiredModalReturn => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.tokenModal.isModalOpen
  );
  const userEmail = useSelector((state: RootState) => state.auth.email);

  const handleResendEmail = useCallback(async (): Promise<void> => {
    if (!userEmail) {
      toast(t('auth.missingEmail'));
      return;
    }

    try {
      const success = await sendLoginLink(userEmail)();

      if (success) {
        dispatch(closeModal());
        dispatch(logout());
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  }, [dispatch, userEmail]);

  const handleCloseModal = useCallback((): void => {
    dispatch(closeModal());
    dispatch(logout());
  }, [dispatch]);

  return {
    isModalOpen,
    handleResendEmail,
    handleCloseModal,
  };
};

export default useTokenExpiredModal;
