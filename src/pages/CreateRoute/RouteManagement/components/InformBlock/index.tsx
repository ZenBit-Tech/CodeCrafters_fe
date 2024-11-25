import { FC } from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';

import RouteDetails from '../RouteDetails';
import { informBlockStyles, titleStyles } from './styles';

interface Order {
  time_range: string;
  city: string;
}

interface RouteInfo {
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

const InformBlock: FC<InformBlockInterface> = ({ title, routes }) => (
  <Box sx={informBlockStyles}>
    <Typography sx={titleStyles}>{t(title)}</Typography>
    {routes.map((route) => (
      <RouteDetails
        key={route.id}
        driver_full_name={route.driver_full_name}
        time_range={route.time_range}
        distance={route.distance}
        route_id={route.id}
        orders={route.orders}
      />
    ))}
  </Box>
);

export default InformBlock;
