import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

import { setAccessToken } from '@/store/slices/authSlice';
import axiosInstance from '@/utils/axiosInstance';
import i18n from '@/utils/i18n';
import { Dispatch } from '@reduxjs/toolkit';

interface DecodedToken {
  role: string;
  company_id: {
    id: number;
  };
}

export const sendLoginLink = (email: string) => async (): Promise<boolean> => {
  try {
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
  }
};

export const verifyToken =
  (accessToken: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axiosInstance.get('/auth', {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      const { token, role } = response.data;

      if (token) {
        const decodedToken = jwtDecode<DecodedToken>(token);

        console.log('Decoded Token:', decodedToken);

        dispatch(
          setAccessToken({ token, role, companyId: decodedToken.company_id.id })
        );
      } else {
        toast.error(i18n.t('auth.invalidExpiredLink'));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(i18n.t('auth.verificationError'));
      } else {
        toast.error(i18n.t('auth.unknownError'));
      }
    }
  };
