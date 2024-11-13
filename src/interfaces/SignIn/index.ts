import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

export interface SignInFormData {
  email: string;
}

export interface UseSignInReturnType {
  control: Control<SignInFormData>;
  handleSubmit: UseFormHandleSubmit<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
  isValid: boolean;
  isLocked: boolean;
  onSubmit: SubmitHandler<SignInFormData>;
  getHelperText: () => string | undefined;
  emailRegex: RegExp;
  clearErrorOnChange: () => void;
}
