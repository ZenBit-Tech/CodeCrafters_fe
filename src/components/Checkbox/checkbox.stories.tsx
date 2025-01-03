import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import CustomCheckbox from './index';
import 'normalize.css';
import { ThemeProvider } from '@mui/material';

import theme from '@/theme';

export default {
  title: 'Components/CustomCheckbox',
  component: CustomCheckbox,
  argTypes: {
    isChecked: { control: 'boolean' },
    id: { control: { type: 'number', min: 1, max: 100 } },
  },
} as Meta;

const Template: Story<{
  id: number;
  isChecked: boolean;
  toggleCheckbox: (
    // eslint-disable-next-line no-undef
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}> = (args) => {
  const [checked, setChecked] = useState(args.isChecked);

  const handleToggleCheckbox = (
    // eslint-disable-next-line no-undef
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox
        {...args}
        isChecked={checked}
        toggleCheckbox={handleToggleCheckbox}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 1,
  isChecked: false,
};
