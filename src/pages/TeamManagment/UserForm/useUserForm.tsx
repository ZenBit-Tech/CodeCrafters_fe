import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from 'react';
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { RootState, store } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';
import { getFirstName, getSecondName } from '@/utils/nameUtils';

import { UserFormInputs, UserFormProps } from '../types';
import { setisVisible } from '@/store/slices/loaderSlice';

interface UseUserFormReturn {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  role: string;
  setValue: UseFormSetValue<UserFormInputs>;
  setRole: Dispatch<SetStateAction<string>>;
  register: UseFormRegister<UserFormInputs>;
  handleSubmit: (
    onSubmit: (data: UserFormInputs) => void
  ) => (e?: BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<UserFormInputs>;
  closeModal: () => void;
  sendData: (formData: UserFormInputs) => Promise<void>;
}

export const useUserForm = ({
  mode,
  fetchUsers,
  userId,
  userData,
  addUserToList,
}: UserFormProps): UseUserFormReturn => {
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

  const sendData = async (formData: UserFormInputs): Promise<void> => {
    try {
      store.dispatch(setisVisible(true));
      const transformedData = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        company_id: { id: 1 },
        ...(mode === 'create' && { role: role.toLowerCase() }),
        ...(mode === 'create' && { company_id: 1 }),
      };

      const createMode = role === 'dispatcher' ? '/dispatcher' : '/driver';
      const diapatcherMode =
        userData?.role === 'dispatcher'
          ? `/dispatcher/${userId}`
          : `/driver/${userId}`;

      const url = mode === 'create' ? createMode : diapatcherMode;

      const method = mode === 'update' ? 'patch' : 'post';
      const response = await axiosInstance[method](url, transformedData, {
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
          firstName: getFirstName(newUser.full_name),
          lastName: getSecondName(newUser.full_name),
        };

        addUserToList(adaptedUser);
      } else {
        fetchUsers();
      }

      closeModal();
    } catch (error) {
      toast(t('settings.message.error'), { type: 'error' });
      throw new Error(`${error}`);
    } finally {
      store.dispatch(setisVisible(false));
    }
  };

  return {
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
  };
};
