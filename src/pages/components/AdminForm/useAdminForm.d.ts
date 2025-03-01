import React from 'react';
import { UseFormReturn } from 'react-hook-form';
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
    closeModal: () => void;
    handleFormSubmit: (data: AdminFormValues) => Promise<void>;
    emailRegex: RegExp;
}
export declare const useAdminForm: ({ initialValues, onSubmit, refreshAdmins, }: {
    initialValues: AdminFormValues;
    onSubmit: (data: AdminFormValues) => Promise<void>;
    refreshAdmins: () => Promise<void>;
}) => UseAdminFormReturn;
