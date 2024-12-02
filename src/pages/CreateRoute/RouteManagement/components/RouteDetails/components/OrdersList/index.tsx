import { FC } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';

import OrderRow from '../Order';

const OrdersList: FC<{
  routeId: number;
  orders: {
    id: number;
    time_range: string;
    city: string;
  }[];
}> = ({ routeId, orders }) => {
  const { setNodeRef } = useDroppable({ id: routeId });

  return (
    <Box ref={setNodeRef}>
      {orders.map((order) => (
        <OrderRow key={order.id} order={order} parentId={routeId} />
      ))}
    </Box>
  );
};

export default OrdersList;
