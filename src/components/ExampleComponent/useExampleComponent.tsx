import React from 'react';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { updateMessage } from '@/store/slices/exampleSlice';
import { AppDispatch, RootState } from '@/store/store';

interface FormData {
  name: string;
}

interface UseExampleComponentLogicReturn {
  message: string;
  register: UseFormRegister<FormData>;
  handleSubmit: (
    callback: SubmitHandler<FormData>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: SubmitHandler<FormData>;
}

const useExampleComponentLogic = (): UseExampleComponentLogicReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const { message } = useSelector((state: RootState) => state.example);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(updateMessage(`${t('greeting')}, ${data.name}!`));
  };

  return { message, register, handleSubmit, onSubmit };
};

export default useExampleComponentLogic;
