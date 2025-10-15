import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  label: string;
  variant: 'text' | 'outlined' | 'contained' | 'colored' | 'lined' | 'grey';
}

const Button: React.FC<ButtonProps> = ({ label, variant, ...props }) => {
  const { t } = useTranslation();

  return (
    <MuiButton variant={variant} {...props}>
      {t(label)}
    </MuiButton>
  );
};

export default Button;
