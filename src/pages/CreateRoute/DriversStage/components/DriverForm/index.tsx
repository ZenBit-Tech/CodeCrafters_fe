import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  formStyles,
  buttonsContainer,
  input,
} from '@/pages/components/AdminForm/styles';
import { useDriverForm } from './useDriverForm';
import Button from '@/components/Button';
import ModalForm from '@/components/ModalForm';
import TextInput from '@/components/TextInput';
import { PHONE_REGEX, EMAIL_REGEX } from '@/constants/validation';

const DriverForm = ({
  isEditing = false,
  initialValues = { full_name: '', email: '', phone_number: '' },
  onSubmit,
  formTitle,
  buttonContent,
  refreshDrivers,
}: {
  isEditing?: boolean;
  initialValues?: { full_name: string; email: string; phone_number: string };
  onSubmit: (data: {
    full_name: string;
    email: string;
    phone_number: string;
  }) => Promise<void>;
  formTitle: string;
  buttonContent: string;
  refreshDrivers: () => Promise<void>;
}): React.JSX.Element => {
  const { t } = useTranslation();

  const {
    isModalOpen,
    setModalOpen,
    register,
    handleSubmit,
    errors,
    closeModal,
    handleFormSubmit,
  } = useDriverForm({
    initialValues,
    onSubmit,
    refreshDrivers,
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
          label={t('driverManagement.fullName')}
          sx={input}
          inputProps={{
            ...register('full_name', {
              required: t('driverManagement.emptyFullName'),
            }),
          }}
          error={!!errors.full_name}
          helperText={errors.full_name?.message}
        />
        <TextInput
          label={t('driverManagement.email')}
          sx={input}
          inputProps={{
            ...register('email', {
              required: t('driverManagement.emptyEmail'),
              pattern: {
                value: EMAIL_REGEX,
                message: t('driverManagement.invalidEmail'),
              },
            }),
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextInput
          label={t('driverManagement.phoneNumber')}
          sx={input}
          inputProps={{
            ...register('phone_number', {
              required: t('driverManagement.emptyPhoneNumber'),
              pattern: {
                value: PHONE_REGEX,
                message: t('driverManagement.invalidPhoneNumber'),
              },
            }),
          }}
          error={!!errors.phone_number}
          helperText={errors.phone_number?.message}
        />
        <Box sx={buttonsContainer}>
          <Button
            type="submit"
            label={
              isEditing
                ? t('driverManagement.update')
                : t('driverManagement.add')
            }
            variant="colored"
          />
          <Button
            label={t('driverManagement.cancel')}
            variant="grey"
            onClick={closeModal}
          />
        </Box>
      </Box>
    </ModalForm>
  );
};

export default DriverForm;
