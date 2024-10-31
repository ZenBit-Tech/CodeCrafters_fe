import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

import { useTranslation } from 'react-i18next';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  label: string;
  variant: MuiButtonProps['variant'];
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
