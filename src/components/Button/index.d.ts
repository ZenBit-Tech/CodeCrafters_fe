import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
    label: string;
    variant: 'text' | 'outlined' | 'contained' | 'colored' | 'lined' | 'grey';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
