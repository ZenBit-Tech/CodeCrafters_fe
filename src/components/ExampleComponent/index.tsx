import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, TextField, Button } from '@mui/material';

import useExampleComponentLogic from '@/components/ExampleComponent/useExampleComponent';

const ExampleComponent = (): React.ReactElement => {
  const { t } = useTranslation();
  const { message, register, handleSubmit, onSubmit } =
    useExampleComponentLogic();

  return (
    <div>
      <Typography variant="h5">{message}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label={t('name')}
          {...register('name', { required: true })}
        />
        <Button type="submit">{t('submitExample')}</Button>
      </form>
    </div>
  );
};

export default ExampleComponent;
