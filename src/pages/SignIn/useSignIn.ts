import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Config {
  welcomeMessage: {
    text: string;
    variant: 'h1';
  };
  instructions: {
    text: string;
    variant: 'body1';
  };
  emailInput: {
    label: string;
    type: 'email';
  };
  submitButton: {
    label: string;
    variant: 'colored';
  };
}

interface UseSignInReturnType {
  email: string;
  error: string | null;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  config: Config;
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
      setError('Email is required');
      return;
    }

    console.log('Submitted email:', email);
    setError(null);
  };

  const config: Config = {
    welcomeMessage: {
      text: t('signin.welcomeMessage'),
      variant: 'h1' as const,
    },
    instructions: {
      text: t('signin.instructions'),
      variant: 'body1' as const,
    },
    emailInput: {
      label: t('signin.email'),
      type: 'email' as const,
    },
    submitButton: {
      label: t('signin.submit'),
      variant: 'colored' as const,
    },
  };

  return { email, error, handleEmailChange, handleSubmit, config };
};

export default useSignIn;
