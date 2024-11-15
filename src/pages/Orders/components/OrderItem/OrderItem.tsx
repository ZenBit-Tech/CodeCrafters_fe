import {
  OrderItemInterface,
  OrderStatuses,
} from '@/pages/Orders/components/OrderItem/types';
import { MONTHS } from '@/constants/moths';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DriverAvatar from '@/components/DriverAvatar';
import Status from '@/components/Status';
import {
  orderRow,
  customerBlock,
  collectionDateStyles,
  collectionAddressStyles,
  routeBlock,
  luggageStyles,
  statusBlock,
  collectionTimeStyles,
  popup,
} from '@/pages/Orders/components/OrderItem/styles';
import { FC } from 'react';

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
  const customerNames: string[] = customer.full_name.split('');
  const routeIdView = !routeId ? 'NEW' : routeId.id;

  const date = new Date(collectionDate);
  const timeStart = new Date(collectionTimeStart);
  const timeEnd = new Date(collectionTimeEnd);

  return (
    <Box sx={orderRow(!routeId)}>
      <Typography sx={collectionDateStyles}>
        {date.getDate()}
        {MONTHS[date.getMonth()]}
        {date.getFullYear()}
      </Typography>
      <Typography sx={collectionTimeStyles}>
        {timeStart.getHours()}:00 - {timeEnd.getHours()}:00
      </Typography>
      <Typography sx={collectionAddressStyles}>
        {t(collectionAddress)}
      </Typography>
      <Box sx={luggageStyles}>
        {luggages.map((luggage) => {
          return (
            <Typography key={luggage.id}>
              {t(`${luggage.luggage_type}, ${luggage.luggage_weight}`)}
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
      <Box sx={statusBlock}>
        <Status status={OrderStatuses[status]} />
      </Box>
      <Typography sx={routeBlock}>{t(`${routeIdView}`)}</Typography>
    </Box>
  );
};

export default OrderItem;
