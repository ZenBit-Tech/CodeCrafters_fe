import 'normalize.css';
import { ThemeProvider } from '@mui/material';
import { StoryFn, Meta } from '@storybook/react';

import Button, { ButtonProps } from './index';
import theme from '@/theme';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Colored = Template.bind({});
Colored.args = {
  label: 'label',
  variant: 'colored',
} as ButtonProps;

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'label',
  variant: 'outlined',
} as ButtonProps;

export const LinedGrey = Template.bind({});
LinedGrey.args = {
  label: 'label',
  variant: 'linedGrey',
} as unknown as ButtonProps;
