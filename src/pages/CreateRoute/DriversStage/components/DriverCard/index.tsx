import { Box, Typography } from '@mui/material';
import { driverRowStyles, customerBlock, popup } from './styles.ts';
import DriverAvatar from '@/components/DriverAvatar/index.tsx';
import { t } from 'i18next';
import { Customer } from '@/interfaces/interfaces.ts';
import { FC } from 'react';
import CustomCheckbox from '@/components/Checkbox/index.tsx';

const DriverCard: FC<{ customer: Customer }> = ({ customer }) => {
  const customerNames: string[] = customer.full_name.split(' ');

  return (
    <Box sx={driverRowStyles}>
      <CustomCheckbox />
      <Box sx={customerBlock}>
        <Box className="popup" sx={popup}>
          <Typography>{t(customer.full_name)}</Typography>
          <Typography>{t(customer.phone_number)}</Typography>
          <Typography>{t(customer.email)}</Typography>
        </Box>
        <DriverAvatar
          firstName={customerNames[0]}
          lastName={customerNames[1]}
        />
        <Box>
          <Typography>{t(customer.full_name)}</Typography>
          <Typography>{t(customer.phone_number)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DriverCard;
