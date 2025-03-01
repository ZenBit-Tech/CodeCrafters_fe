import React from 'react';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
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
export declare const useDriverForm: ({ initialValues, onSubmit, refreshDrivers, }: UseDriverFormProps) => UseDriverFormReturn;
export {};
