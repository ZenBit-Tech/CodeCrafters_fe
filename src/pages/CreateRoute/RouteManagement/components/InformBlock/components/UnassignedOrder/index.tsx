import { FC } from 'react';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useDroppable } from '@dnd-kit/core';
import { Box, Typography } from '@mui/material';

import OrderRow from '@/pages/CreateRoute/RouteManagement/components/RouteDetails/components/Order';
import { createTimeRange } from '@/utils/createTimeRange';
import { RootState } from '@/store/store';
import { errorSubtitleStyles, errorTitleStyle } from './styles';

const NOT_ASSIGNED_ORDERS_BLOCK = -1;

const UnassignedOrder: FC = () => {
  const { notAssignedOrders } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

  const { setNodeRef } = useDroppable({ id: NOT_ASSIGNED_ORDERS_BLOCK });

  return (
    <Box ref={setNodeRef}>
      {notAssignedOrders.length > 0 && (
        <Typography sx={errorTitleStyle}>
          {t('routeManagement.assignError')}
        </Typography>
      )}
      {notAssignedOrders.length > 0 &&
        notAssignedOrders.map((order) => {
          return (
            <OrderRow
              key={order.id}
              order={{
                ...order,
                time_range: createTimeRange(
                  order.collection_time_start,
                  order.collection_time_end
                ),
                city: order.collection_address?.split(',')[
                  order.collection_address.split(',').length - 2
                ],
              }}
              parentId={NOT_ASSIGNED_ORDERS_BLOCK}
            />
          );
        })}
      {notAssignedOrders.length > 0 && (
        <Typography sx={errorSubtitleStyles}>
          {t('routeManagement.assignErrorSubtitle')}
        </Typography>
      )}
    </Box>
  );
};

export default UnassignedOrder;
