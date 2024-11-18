import React, { useState } from 'react';
import { Box } from '@mui/material';

import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import ModalForm from '@/components/ModalForm';
import {
  buttonsContainer,
  formStyles,
  input,
} from '@/pages/components/UpdateAdmin/styles';
import { useUpdateAdmin } from '@/pages/components/UpdateAdmin/useUpdateAdmin';
import editIcon from '@/assets/edit.png';

const UpdateAdmin = ({
  userId,
  full_name,
  email,
  refreshAdmins,
}: {
  userId: number;
  full_name: string;
  email: string;
  refreshAdmins: () => Promise<void>;
}): React.JSX.Element => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = (): void => setModalOpen(false);

  const { handleSubmit, register, reset, errors, sendData, t } = useUpdateAdmin(
    userId,
    refreshAdmins,
    closeModal
  );

  return (
    <>
      <ModalForm
        isOpenBtn={false}
        btnContent={editIcon}
        formTitle={t('updateAdmin.title')}
        isOpened={isModalOpen}
        setIsOpened={setModalOpen}
      >
        <Box component="form" onSubmit={handleSubmit(sendData)} sx={formStyles}>
          <TextInput
            label={t('updateAdmin.fullName')}
            sx={input}
            focused
            inputProps={{
              ...register('full_name', {
                required: t('updateAdmin.errors.emptyFullName'),
                value: full_name,
              }),
            }}
            error={!!errors.full_name}
            helperText={errors.full_name?.message}
          />
          <TextInput
            label={t('updateAdmin.email')}
            sx={input}
            placeholder="asd@gmail.com"
            focused
            inputProps={{
              ...register('email', {
                required: t('updateAdmin.errors.emptyEmail'),
                value: email,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: t('updateAdmin.errors.invalidEmail'),
                },
              }),
            }}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Box sx={buttonsContainer}>
            <Button
              type="submit"
              label={t('updateAdmin.update')}
              variant="colored"
            />
            <Button
              label={t('updateAdmin.cancel')}
              variant="grey"
              onClick={() => reset()}
            />
          </Box>
        </Box>
      </ModalForm>
    </>
  );
};

export default UpdateAdmin;
