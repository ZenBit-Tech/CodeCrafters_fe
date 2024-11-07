import React from 'react';
import { useTranslation } from 'react-i18next';

import { TextField, TextFieldProps } from '@mui/material';

export type TextInputProps = Omit<TextFieldProps, 'label'> & {
  label: string;
};

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  const { t } = useTranslation();

  return <TextField {...props} label={t(label)} />;
};

export default TextInput;
