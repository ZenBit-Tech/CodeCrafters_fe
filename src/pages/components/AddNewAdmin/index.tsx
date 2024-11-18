import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

import Button from '@/components/Button';
import { useAddNewAdmin } from '@/pages/components/AddNewAdmin/useAddNewAdmin';
import TextInput from '@/components/TextInput';
import ModalForm from '@/components/ModalForm';
import {
  formStyles,
  buttonsContainer,
  input,
} from '@/pages/components/AddNewAdmin/styles';

const AddNewAdmin = ({
  companyId,
  refreshAdmins,
}: {
  companyId: number;
  refreshAdmins: () => Promise<void>;
}): React.JSX.Element => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const { t } = useTranslation();
  const closeModal = () => setModalOpen(false);

  const { sendData, register, handleSubmit, errors, reset } = useAddNewAdmin({
    companyId,
    refreshAdmins,
    closeModal,
  });

  return (
    <ModalForm
      isOpenBtn={true}
      btnContent={`+ ${t('addNewAdmin.button')}`}
      formTitle={t('addNewAdmin.title')}
      isOpened={isModalOpen}
      setIsOpened={setModalOpen}
    >
      <Box component="form" onSubmit={handleSubmit(sendData)} sx={formStyles}>
        <TextInput
          label={t('addNewAdmin.fullName')}
          sx={input}
          inputProps={{
            ...register('full_name', {
              required: t('addNewAdmin.errors.emptyFullName'),
            }),
          }}
          error={!!errors.full_name}
          helperText={errors.full_name?.message}
        />
        <TextInput
          label={t('addNewAdmin.email')}
          sx={input}
          inputProps={{
            ...register('email', {
              required: t('addNewAdmin.errors.emptyEmail'),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t('addNewAdmin.errors.invalidEmail'),
              },
            }),
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Box sx={buttonsContainer}>
          <Button
            type="submit"
            label={t('addNewAdmin.add')}
            variant="colored"
          />
          <Button
            label={t('addNewAdmin.cancel')}
            variant="grey"
            onClick={() => reset()}
          />
        </Box>
      </Box>
    </ModalForm>
  );
};

export default AddNewAdmin;
