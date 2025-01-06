import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Loader from './Loader';

const mockStore = configureStore([]);

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;

const Template: Story<{ isVisible: boolean }> = (args) => {
  const store = mockStore({
    loader: { isVisible: args.isVisible },
  });

  return (
    <Provider store={store}>
      <Loader />
    </Provider>
  );
};

export const Visible = Template.bind({});
Visible.args = {
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isVisible: false,
};
