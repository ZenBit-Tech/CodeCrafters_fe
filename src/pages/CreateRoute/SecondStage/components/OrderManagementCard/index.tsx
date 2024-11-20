import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { OrderItemInterface } from '@/pages/Orders/components/OrderItem/types';
import { MONTHS } from '@/constants/moths';
import DriverAvatar from '@/components/DriverAvatar';
import {
  customerBlock,
  collectionDateStyles,
  collectionAddressStyles,
  luggageStyles,
  collectionTimeStyles,
  popup,
} from '@/pages/Orders/components/OrderItem/styles';
import { orderRow } from './styles';
import CustomCheckbox from '@/components/Checkbox';

const OrderManagementCard: FC<OrderItemInterface> = ({
  collectionDate,
  collectionTimeStart,
  collectionTimeEnd,
  collectionAddress,
  customer,
  luggages,
}) => {
  const { t } = useTranslation();
  const customerNames: string[] = customer.full_name.split(' ');

  const date = new Date(collectionDate);
  const timeStart = new Date(collectionTimeStart);
  const timeEnd = new Date(collectionTimeEnd);

  return (
    <Box sx={orderRow}>
      <CustomCheckbox />
      <Typography sx={collectionDateStyles}>
        {date.getDate()} {MONTHS[date.getMonth()]} {date.getFullYear()}
      </Typography>
      <Typography sx={collectionTimeStyles}>
        {timeStart.getHours()}:{timeStart.getMinutes()} - {timeEnd.getHours()}:
        {timeEnd.getMinutes()}
      </Typography>
      <Typography sx={collectionAddressStyles}>
        {t(collectionAddress)}
      </Typography>
      <Box sx={luggageStyles}>
        {luggages.map((luggage) => {
          return (
            <Typography key={luggage.id}>
              {t(`${luggage.luggage_type}, ${luggage.luggage_weight}kg`)}
            </Typography>
          );
        })}
      </Box>
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

export default OrderManagementCard;
