import { ChangeEvent, FC } from 'react';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';

import CustomCheckbox from '@/components/Checkbox/index.tsx';
import UserAvatar from '@/components/UserAvatar/index.tsx';
import { Customer } from '@/interfaces/interfaces.ts';

import { customerBlock, driverRowStyles, popup } from './styles.ts';

const DriverCard: FC<{
  customer: Customer;
  isDriverChosen: boolean;
  toggleDriver: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
}> = ({ customer, isDriverChosen, toggleDriver }) => {
  const customerNames: string[] = customer.full_name.split(' ');

  return (
    <Box sx={driverRowStyles}>
      <CustomCheckbox
        id={customer.id}
        isChecked={isDriverChosen}
        toggleCheckbox={toggleDriver}
      />
      <Box sx={customerBlock}>
        <Box className="popup" sx={popup}>
          <Typography>{t(customer.full_name)}</Typography>
          <Typography>{t(customer.phone_number)}</Typography>
          <Typography>{t(customer.email)}</Typography>
        </Box>
        <UserAvatar firstName={customerNames[0]} lastName={customerNames[1]} />
        <Box>
          <Typography>{t(customer.full_name)}</Typography>
          <Typography>{t(customer.phone_number)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DriverCard;
