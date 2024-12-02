import { FC } from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { RouteDetails } from '../RouteDetails/RouteDetails';
import { informBlockStyles, titleStyles } from './styles';
import { useDragEnd } from './useDragEnd';
import UnassignedOrder from './components/UnassignedOrder';

interface Order {
  id: number;
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
  const { handleDragEnd } = useDragEnd();

  return (
    <Box sx={informBlockStyles}>
      <Typography sx={titleStyles}>{t(title)}</Typography>
      <DndContext onDragEnd={handleDragEnd}>
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
        <UnassignedOrder />
      </DndContext>
    </Box>
  );
};

export default InformBlock;
