import { Meta, Story } from '@storybook/react';
import DriverRouteInfo, { RouteInfoProps } from './index';

export default {
  title: 'Components/DriverRouteInfo',
  component: DriverRouteInfo,
  argTypes: {
    routeTime: { control: 'text' },
    city: { control: 'text' },
  },
} as Meta;

const Template: Story<RouteInfoProps> = (args) => <DriverRouteInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  routeTime: '8:00 - 5:00',
  city: 'New York',
};
