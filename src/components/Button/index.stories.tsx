import 'normalize.css';
import { ThemeProvider } from '@mui/material';

import Button, { ButtonProps } from './index';

import theme from '@/theme';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Colored = Template.bind({});
Colored.args = {
  label: 'label',
  variant: 'colored',
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'label',
  variant: 'outlined',
};

export const LinedGrey = Template.bind({});
LinedGrey.args = {
  label: 'label',
  variant: 'linedGrey',
};
