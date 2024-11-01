import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface UseSignInReturnType {
  email: string;
  error: string | null;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const useSignIn = (): UseSignInReturnType => {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const handleSubmit = (): void => {
    if (!email) {
      setError(t('Email is required'));
      return;
    }

    setError(null);
  };

  return { email, error, handleEmailChange, handleSubmit };
};

export default useSignIn;
