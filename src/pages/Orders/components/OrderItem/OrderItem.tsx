import { OrderItemInterface } from '@/pages/Orders/components/OrderItem/types';
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
} from '@/pages/Orders/components/OrderItem/styles';
import { FC } from 'react';

const OrderItem: FC<OrderItemInterface> = ({
  collectionDate,
  collectionAddress,
  customer,
  status,
  luggages,
  routeId,
}) => {
  const { t } = useTranslation();
  const customerNames: string[] = customer.fullName.split('');
  const routeIdView = routeId === null ? 'NEW' : routeId;

  return (
    <Box sx={orderRow(routeId === null)}>
      <Typography sx={collectionDateStyles}>
        {collectionDate.getDate()}
        {MONTHS[collectionDate.getMonth()]}
        {collectionDate.getFullYear()}
      </Typography>
      <Box sx={{ width: '140px' }}></Box>
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
        <DriverAvatar
          firstName={customerNames[0]}
          lastName={customerNames[1]}
        />
        <Box>
          <Typography>{t(customer.fullName)}</Typography>
          <Typography>{t(customer.phoneNumber)}</Typography>
        </Box>
      </Box>
      <Box sx={statusBlock}>
        <Status status={status} />
      </Box>
      <Typography sx={routeBlock}>{t(`${routeIdView}`)}</Typography>
    </Box>
  );
};

export default OrderItem;
