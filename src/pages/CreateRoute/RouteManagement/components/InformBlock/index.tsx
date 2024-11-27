import { FC } from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';

import { informBlockStyles, titleStyles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RouteDetails } from '../RouteDetails/RouteDetails';

interface Order {
  time_range: string;
  city: string;
}

export interface RouteInfo {
  driver_full_name: string;
  time_range: string;
  distance: number;
  id: number;
  orders: Order[];
}

interface InformBlockInterface {
  title: string;
  routes: RouteInfo[];
}

const InformBlock: FC<InformBlockInterface> = ({ title, routes }) => {
  const { distances } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

  return (
    <Box sx={informBlockStyles}>
      <Typography sx={titleStyles}>{t(title)}</Typography>
      {routes.map((route) => (
        <RouteDetails
          key={route.id}
          driver_full_name={route.driver_full_name}
          time_range={route.time_range}
          distance={
            distances.find((distanceObj) => distanceObj.driverId === route.id)
              ?.distance as number
          }
          route_id={route.id}
          orders={route.orders}
        />
      ))}
    </Box>
  );
};

export default InformBlock;
