import axios from 'axios';
import { toast } from 'react-toastify';
import { Dispatch } from '@reduxjs/toolkit';

import { setAccessToken } from '@/store/slices/authSlice';
import axiosInstance from '@/utils/axiosInstance';
import i18n from '@/utils/i18n';
import { store } from '@/store/store';
import { setisVisible } from '@/store/slices/loaderSlice';

interface VerifyTokenResponse {
  token: string;
  role: string;
  companyId: number;
}

export const sendLoginLink = (email: string) => async (): Promise<boolean> => {
  try {
    store.dispatch(setisVisible(true));
    const response = await axiosInstance.get(`/auth/${email}`);
    if (response.data.status) {
      toast.success(i18n.t('auth.loginLinkSuccess', { email }));
      return true;
    } else {
      toast.error(i18n.t('auth.loginLinkFailure'));
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(i18n.t('auth.userNotExistError'));
    } else {
      toast.error(i18n.t('auth.unknownError'));
    }
    return false;
  } finally {
    store.dispatch(setisVisible(false));
  }
};

export const verifyToken =
  (accessToken: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      store.dispatch(setisVisible(true));
      const response = await axiosInstance.get('/auth', {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      const { token, role, companyId }: VerifyTokenResponse = response.data;

      if (token) {
        dispatch(setAccessToken({ token, role, companyId }));
      } else {
        toast.error(i18n.t('auth.invalidExpiredLink'));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t('auth.verificationError'));
      } else {
        toast.error(i18n.t('auth.unknownError'));
      }
    } finally {
      store.dispatch(setisVisible(false));
    }
  };
