import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import Status from '@/components/Status';
import UserAvatar from '@/components/UserAvatar';
import { MONTHS } from '@/constants/moths';
import { OrderStatuses } from '@/interfaces/interfaces';
import {
  collectionAddressStyles,
  collectionDateStyles,
  collectionTimeStyles,
  customerBlock,
  luggageStyles,
  orderRow,
  popup,
  routeBlock,
  statusBlock,
} from '@/pages/Orders/components/OrderItem/styles';
import { OrderItemInterface } from '@/pages/Orders/components/OrderItem/types';

const OrderItem: FC<OrderItemInterface> = ({
  collectionDate,
  collectionTimeStart,
  collectionTimeEnd,
  collectionAddress,
  customer,
  status,
  luggages,
  routeId,
}) => {
  const { t } = useTranslation();
  const customerNames: string[] = customer.full_name.split(' ');
  const routeIdView: string = !routeId ? t('NEW') : t(`${routeId.id}`);

  const date = new Date(collectionDate);
  const timeStart = new Date(collectionTimeStart);
  const timeEnd = new Date(collectionTimeEnd);

  return (
    <Box sx={orderRow(!routeId)}>
      <Typography sx={collectionDateStyles}>
        {date.getDate()} {MONTHS[date.getMonth()]} {date.getFullYear()}
      </Typography>
      <Typography sx={collectionTimeStyles}>
        {timeStart.getHours()}:
        {timeStart.getMinutes() === 0 ? '00' : timeStart.getMinutes()} -{' '}
        {timeStart.getHours() === 0 ? '00' : timeStart.getHours()}:
        {timeEnd.getMinutes() == 0 ? '00' : timeEnd.getMinutes()}
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
        <UserAvatar firstName={customerNames[0]} lastName={customerNames[1]} />
        <Box>
          <Typography>{t(customer.full_name)}</Typography>
          <Typography>{t(customer.phone_number)}</Typography>
        </Box>
      </Box>
      <Box sx={statusBlock}>
        <Status status={OrderStatuses[status]} />
      </Box>
      <Typography sx={routeBlock}>{t(`${routeIdView}`)}</Typography>
    </Box>
  );
};

export default OrderItem;
