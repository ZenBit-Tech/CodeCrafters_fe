import React, { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

export interface AdminFormValues {
  full_name: string;
  email: string;
}

export interface UseAdminFormReturn {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormReturn<AdminFormValues>['register'];
  handleSubmit: UseFormReturn<AdminFormValues>['handleSubmit'];
  errors: UseFormReturn<AdminFormValues>['formState']['errors'];
  reset: UseFormReturn<AdminFormValues>['reset'];
  handleFormSubmit: (data: AdminFormValues) => Promise<void>;
  emailRegex: RegExp;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const useAdminForm = ({
  initialValues,
  onSubmit,
  refreshAdmins,
}: {
  initialValues: AdminFormValues;
  onSubmit: (data: AdminFormValues) => Promise<void>;
  refreshAdmins: () => Promise<void>;
}): UseAdminFormReturn => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const closeModal = (): void => {
    setModalOpen(false);
    reset();
  };

  const handleFormSubmit = async (data: AdminFormValues): Promise<void> => {
    await onSubmit(data);
    await refreshAdmins();
    closeModal();
  };

  return {
    isModalOpen,
    setModalOpen,
    register,
    handleSubmit,
    errors,
    reset,
    handleFormSubmit,
    emailRegex,
  };
};
