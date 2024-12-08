import React from 'react';
import { MenuItem, Select, Typography } from '@mui/material';
import { t } from 'i18next';

import { assets } from '@/assets/assets';
import Button from '@/components/Button';
import ModalForm from '@/components/ModalForm';
import TextInput from '@/components/TextInput';

import { UserFormProps } from '../types';
import { addBtn, input } from './styles';
import { useUserForm } from './useUserForm';

const UserForm: React.FC<UserFormProps> = (props) => {
  const {
    isModalOpen,
    setIsModalOpen,
    role,
    setValue,
    setRole,
    register,
    handleSubmit,
    errors,
    closeModal,
    sendData,
  } = useUserForm(props);
  return (
    <ModalForm
      isOpenBtn={props.mode === 'create'}
      btnContent={
        props.mode === 'create' ? t('button.addNewUser') : assets.editIcon
      }
      formTitle={
        props.mode === 'update'
          ? t('modal.updateUserTitle')
          : t('modal.addUserTitle')
      }
      isOpened={isModalOpen}
      setIsOpened={setIsModalOpen}
    >
      <form onSubmit={handleSubmit(sendData)}>
        <TextInput
          sx={input}
          label={t('settings.form.fullName')}
          inputProps={{
            ...register('fullName', {
              required: t('settings.form.validation.fullNameRequired'),
            }),
          }}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
        />
        <TextInput
          sx={input}
          label={t('settings.form.email')}
          inputProps={{
            ...register('email', {
              required: t('settings.form.validation.emailRequired'),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t('settings.form.validation.invalidEmail'),
              },
            }),
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextInput
          sx={input}
          label={t('settings.form.phoneNumber')}
          inputProps={{
            ...register('phoneNumber', {
              required: t('settings.form.validation.phoneNumberRequired'),
              pattern: {
                value: /^\+?[0-9]{10,15}$/,
                message: t('settings.form.validation.invalidPhoneNumber'),
              },
            }),
          }}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
        <Select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setValue('role', e.target.value);
          }}
          displayEmpty
          MenuProps={{
            disablePortal: true,
          }}
          sx={{ ...input, display: props.mode === 'create' ? 'block' : 'none' }}
        >
          <MenuItem value="" disabled>
            {t('settings.form.selectRole')}
          </MenuItem>
          <MenuItem value="dispatcher">
            {t('settings.form.roles.dispatcher')}
          </MenuItem>
          <MenuItem value="driver">{t('settings.form.roles.driver')}</MenuItem>
        </Select>
        {errors.role && (
          <Typography color="error" variant="caption">
            {errors.role.message}
          </Typography>
        )}
        <div>
          <Button
            sx={addBtn}
            variant="colored"
            type="submit"
            label={
              props.mode === 'update' ? t('button.update') : t('button.add')
            }
          />
          <Button
            variant="grey"
            label={t('button.cancel')}
            onClick={closeModal}
          />
        </div>
      </form>
    </ModalForm>
  );
};

export default UserForm;
