import { Meta, Story } from '@storybook/react';
import DriverInfoCard, { DriverInfoProps } from './index';

export default {
  title: 'Components/DriverInfoCard',
  component: DriverInfoCard,
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    workingHours: { control: 'text' },
    stopsCount: { control: 'number' },
    distance: { control: 'number' },
    routeId: { control: 'text' },
  },
} as Meta;

const Template: Story<DriverInfoProps> = (args) => <DriverInfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: 'John',
  lastName: 'Doe',
  workingHours: '8:00 AM - 5:00 PM',
  stopsCount: 10,
  distance: 120,
  routeId: 'R-12345',
};
