import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { assets } from '@/assets/assets';
import Button from '@/components/Button';
import ModalForm from '@/components/ModalForm';
import TextInput from '@/components/TextInput';
import { RootState } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';
import { MenuItem, Select, Typography } from '@mui/material';

import { DecodedToken, UserFormInputs, UserFormProps } from '../types';
import { input } from './styles';

const UserForm: React.FC<UserFormProps> = ({
  mode,
  fetchUsers,
  userId,
  userData,
  addUserToList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState(userData?.role || '');
  const { t } = useTranslation();
  const authToken = useSelector((store: RootState) => store.auth.token);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<UserFormInputs>({
    defaultValues:
      mode === 'update'
        ? {
            fullName: userData?.fullName || '',
            email: userData?.email || '',
            phoneNumber: userData?.phoneNumber || '',
          }
        : {
            fullName: '',
            email: '',
            phoneNumber: '',
            role: '',
          },
  });

  const closeModal = (): void => {
    setIsModalOpen(false);
    reset();
  };

  const sendData = async (formData: UserFormInputs) => {
    try {
      const decodeToken = (token: string): DecodedToken | null => {
        try {
          const decodedToken = JSON.parse(atob(token.split('.')[1]));
          return decodedToken;
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      };

      const decodedToken = authToken ? decodeToken(authToken) : null;

      if (!decodedToken) {
        console.error('Invalid token');
        toast(t('settings.message.invalidToken'), { type: 'error' });
        return;
      }

      const companyId = decodedToken.company_id.id;

      if (!companyId) {
        console.error('Company ID is missing from the token');
        toast(t('settings.message.noCompanyId'), { type: 'error' });
        return;
      }

      const transformedData = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        ...(mode === 'create' && { role: role.toLowerCase() }),
        ...(mode === 'create' && { company_id: companyId }),
      };

      const url =
        mode === 'create'
          ? role === 'dispatcher'
            ? '/dispatcher'
            : '/driver'
          : userData?.role === 'dispatcher'
            ? `/dispatcher/${userId}`
            : `/driver/${userId}`;

      const method = mode === 'update' ? 'patch' : 'post';
      const endpoint = url;

      const response = await axiosInstance[method](endpoint, transformedData, {
        headers: {
          'Content-Type': 'application/json',
          authorization: authToken || '',
        },
      });

      const successMessage =
        mode === 'update'
          ? t('settings.message.updateSuccess')
          : t('settings.message.addSuccess');
      toast(successMessage, { type: 'success' });

      if (mode === 'create') {
        const newUser = response.data;

        const adaptedUser = {
          id: newUser.id,
          role: newUser.role,
          email: newUser.email,
          phoneNumber: newUser.phone_number,
          firstName: newUser.full_name?.split(' ')[0] || '',
          lastName: newUser.full_name?.split(' ').slice(1).join(' ') || '',
        };

        addUserToList(adaptedUser);
      } else {
        fetchUsers();
      }

      closeModal();
    } catch (error) {
      console.log(error);
      toast(t('settings.message.error'), { type: 'error' });
    }
  };

  return (
    <ModalForm
      isOpenBtn={mode === 'create'}
      btnContent={mode === 'create' ? t('button.addNewUser') : assets.editIcon}
      formTitle={
        mode === 'update' ? t('modal.updateUserTitle') : t('modal.addUserTitle')
      }
      isOpened={isModalOpen}
      setIsOpened={setIsModalOpen}
    >
      <form onSubmit={handleSubmit(sendData)}>
        <TextInput
          sx={input}
          className="input"
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
          className="input"
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
          className="input"
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
          sx={{ ...input, display: mode === 'create' ? 'block' : 'none' }}
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
            className="addBtn"
            variant="colored"
            type="submit"
            label={mode === 'update' ? t('button.update') : t('button.add')}
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
