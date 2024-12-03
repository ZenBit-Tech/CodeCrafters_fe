import React, { useState } from 'react';
import {
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface DriverFormValues {
  full_name: string;
  email: string;
  phone_number: string;
}

interface UseDriverFormProps {
  initialValues: DriverFormValues;
  onSubmit: (data: DriverFormValues) => Promise<void>;
  refreshDrivers: () => Promise<void>;
}

interface UseDriverFormReturn {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<DriverFormValues>;
  handleSubmit: UseFormHandleSubmit<DriverFormValues>;
  errors: FieldErrors<DriverFormValues>;
  handleFormSubmit: (data: DriverFormValues) => Promise<void>;
  closeModal: () => void;
}

export const useDriverForm = ({
  initialValues,
  onSubmit,
  refreshDrivers,
}: UseDriverFormProps): UseDriverFormReturn => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
  });

  const closeModal = (): void => {
    setModalOpen(false);
    reset();
  };

  const handleFormSubmit = async (data: DriverFormValues): Promise<void> => {
    await onSubmit(data);
    closeModal();
    refreshDrivers();
  };

  return {
    isModalOpen,
    setModalOpen,
    register,
    handleSubmit,
    errors,
    handleFormSubmit,
    closeModal,
  };
};
