// src/pages/SignIn/useSignIn.ts

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '@/utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '@/store/slices/authSlice';

interface UseSignInReturnType {
  email: string;
  error: string | null;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const useSignIn = (): UseSignInReturnType => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [invitationToken, setInvitationToken] = useState<string | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('inviteToken');
    if (token) {
      setInvitationToken(token);
    } else {
      setError(t('Invalid or missing invite token.'));
    }
  }, [location.search, t]);

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (): Promise<void> => {
    if (!email) {
      setError(t('Email is required'));
      return;
    }
    if (!invitationToken) {
      setError(t('Invalid or missing invite token.'));
      return;
    }

    setError(null);

    try {
      const response = await axios.get(`/auth/${email}`, {
        params: { invitationToken },
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem('accessToken', token);
        dispatch(setAccessToken(token));
        navigate('/orders');
      } else {
        setError(t('Failed to receive access token.'));
      }
    } catch {
      setError(
        t('Authentication failed. Please check your invite token and email.')
      );
    }
  };

  return { email, error, handleEmailChange, handleSubmit };
};

export default useSignIn;
