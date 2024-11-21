import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import ModalForm from '@/components/ModalForm';
import {
  formStyles,
  buttonsContainer,
  input,
} from '@/pages/components/AdminForm/styles';
import { useAdminForm } from './useAdminForm';

const AdminForm = ({
  isEditing = false,
  initialValues = { full_name: '', email: '' },
  onSubmit,
  formTitle,
  buttonContent,
  refreshAdmins,
}: {
  isEditing?: boolean;
  initialValues?: { full_name: string; email: string };
  onSubmit: (data: { full_name: string; email: string }) => Promise<void>;
  formTitle: string;
  buttonContent: string;
  refreshAdmins: () => Promise<void>;
}): React.JSX.Element => {
  const { t } = useTranslation();

  const {
    isModalOpen,
    setModalOpen,
    register,
    handleSubmit,
    errors,
    reset,
    handleFormSubmit,
    emailRegex,
  } = useAdminForm({
    initialValues,
    onSubmit,
    refreshAdmins,
  });

  return (
    <ModalForm
      isOpenBtn={!isEditing}
      btnContent={buttonContent}
      formTitle={formTitle}
      isOpened={isModalOpen}
      setIsOpened={setModalOpen}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        sx={formStyles}
      >
        <TextInput
          label={t('adminForm.fullName')}
          sx={input}
          inputProps={{
            ...register('full_name', {
              required: t('adminForm.errors.emptyFullName'),
            }),
          }}
          error={!!errors.full_name}
          helperText={errors.full_name?.message}
        />
        <TextInput
          label={t('adminForm.email')}
          sx={input}
          inputProps={{
            ...register('email', {
              required: t('adminForm.errors.emptyEmail'),
              pattern: {
                value: emailRegex,
                message: t('adminForm.errors.invalidEmail'),
              },
            }),
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Box sx={buttonsContainer}>
          <Button
            type="submit"
            label={isEditing ? t('adminForm.update') : t('adminForm.add')}
            variant="colored"
          />
          <Button
            label={t('adminForm.cancel')}
            variant="grey"
            onClick={() => reset()}
          />
        </Box>
      </Box>
    </ModalForm>
  );
};

export default AdminForm;
