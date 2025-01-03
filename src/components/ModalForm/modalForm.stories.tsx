import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import ModalForm from './index';
import Button from '@/components/Button';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import editIcon from '@/assets/icons/edit.svg';

export default {
  title: 'Components/ModalForm',
  component: ModalForm,
  argTypes: {
    isOpenBtn: { control: 'boolean' },
    btnContent: { control: 'text' },
    formTitle: { control: 'text' },
    isOpened: { control: { disable: true } },
  },
} as Meta;

const Template: Story<{
  isOpenBtn: boolean;
  btnContent: string;
  formTitle: string;
}> = (args) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ModalForm {...args} isOpened={isOpened} setIsOpened={setIsOpened}>
        <Button
          label="Submit"
          variant="colored"
          onClick={() => setIsOpened(false)}
          sx={{ marginTop: '20px' }}
        />
      </ModalForm>
    </ThemeProvider>
  );
};

export const WithButton = Template.bind({});
WithButton.args = {
  isOpenBtn: true,
  btnContent: 'Open Modal',
  formTitle: 'Form Title',
};

export const WithImageButton = Template.bind({});
WithImageButton.args = {
  isOpenBtn: false,
  btnContent: editIcon,
  formTitle: 'Form Title',
};
