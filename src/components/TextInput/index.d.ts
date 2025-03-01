import React from 'react';
import { TextFieldProps } from '@mui/material';
export type TextInputProps = Omit<TextFieldProps, 'label'> & {
    label: string;
};
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
