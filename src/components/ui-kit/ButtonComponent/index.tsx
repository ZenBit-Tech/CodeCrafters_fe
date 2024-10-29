import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface ButtonProps extends MuiButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  const { t } = useTranslation();

  return <MuiButton {...props}>{t(label)}</MuiButton>;
};

export default Button;
