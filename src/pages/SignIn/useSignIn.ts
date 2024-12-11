import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { AppDispatch } from '@/store/store';
import { sendLoginLink, verifyToken } from '@/api/userActions';
import { SignInFormData, UseSignInReturnType } from '@/interfaces/SignIn';
import { setisVisible } from '@/store/slices/loaderSlice';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const useSignIn = (
  navigate: ReturnType<typeof useNavigate>,
  dispatch: AppDispatch
): UseSignInReturnType => {
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid },
    watch,
  } = useForm<SignInFormData>({
    mode: 'onBlur',
    defaultValues: { email: '' },
  });

  const emailValue = watch('email');

  useEffect(() => {
    clearErrors('email');
  }, [emailValue, clearErrors]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    if (accessToken) {
      dispatch(verifyToken(accessToken));
      navigate('/');
    }
  }, [dispatch, navigate]);

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      dispatch(setisVisible(true));
      if (isLocked) return;

      const { email } = data;

      const isSent = await sendLoginLink(email)();

      if (!isSent) {
        setAttemptCount((prev) => prev + 1);
      }

      if (attemptCount + 1 >= 5) {
        setIsLocked(true);
      }
    } finally {
      dispatch(setisVisible(false));
    }
  };

  const getHelperText = (): string | undefined => {
    if (isLocked) {
      return '';
    }
    if (errors.email) {
      return errors.email.message;
    }
    return '';
  };

  const clearErrorOnChange = (): void => clearErrors('email');

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isLocked,
    onSubmit,
    getHelperText,
    emailRegex,
    clearErrorOnChange,
  };
};

export default useSignIn;
