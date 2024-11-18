import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { AdminForm } from '@/interfaces/AdminList';
import { addAdmin } from '@/api/adminActions';

export const useAddNewAdmin = ({
  companyId,
  refreshAdmins,
  closeModal,
}: {
  companyId: number;
  refreshAdmins: () => Promise<void>;
  closeModal: () => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminForm>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendData = async (formData: AdminForm): Promise<void> => {
    setIsSubmitting(true);
    try {
      await addAdmin(formData, companyId);
      await refreshAdmins();
      closeModal();
      reset();
    } catch (error) {
      console.error('Error adding admin:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { register, handleSubmit, reset, errors, sendData, isSubmitting };
};
