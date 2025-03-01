import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { UserFormInputs, UserFormProps } from '../types';
interface UseUserFormReturn {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    role: string;
    setValue: UseFormSetValue<UserFormInputs>;
    setRole: Dispatch<SetStateAction<string>>;
    register: UseFormRegister<UserFormInputs>;
    handleSubmit: (onSubmit: (data: UserFormInputs) => void) => (e?: BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<UserFormInputs>;
    closeModal: () => void;
    sendData: (formData: UserFormInputs) => Promise<void>;
}
export declare const useUserForm: ({ mode, fetchUsers, userId, userData, addUserToList, }: UserFormProps) => UseUserFormReturn;
export {};
