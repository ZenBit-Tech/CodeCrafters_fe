import { Theme } from '@mui/material/styles';
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        colored: true;
        lined: true;
        grey: true;
    }
}
declare const theme: Theme;
export default theme;
