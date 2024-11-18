import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { updateAdmin } from '@/api/adminActions';
import { AdminForm } from '@/interfaces/AdminList';

export const useUpdateAdmin = (
  userId: number,
  refreshAdmins: () => Promise<void>,
  closeModal: () => void
) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminForm>();

  const sendData = async (formData: AdminForm): Promise<void> => {
    try {
      await updateAdmin(formData, userId);
      await refreshAdmins();
      reset();
      closeModal();
    } catch (error) {
      console.error('Failed to update admin:', error);
    }
  };

  return {
    handleSubmit,
    register,
    reset,
    errors,
    sendData,
    t,
  };
};
