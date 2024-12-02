import { RootState } from '@/store/store';
import { createTimeRange } from '@/utils/createTimeRange';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import OrderRow from '../../../RouteDetails/components/Order';
import { COLORS } from '@/constants/colors';
import { useDroppable } from '@dnd-kit/core';

const UnassignedOrder: FC = () => {
  const { notAssignedOrders } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

  const { setNodeRef } = useDroppable({ id: 'asd' });

  return (
    <Box ref={setNodeRef}>
      {notAssignedOrders.length > 0 && (
        <Typography
          sx={{
            background: '#C7282829',
            color: 'red',
            padding: '1px 5px',
            borderradius: '4px',
            display: 'block',
            marginTop: '15px',
          }}
        >
          {t("Couldn'n be added automatically")}
        </Typography>
      )}
      {notAssignedOrders.length > 0 &&
        notAssignedOrders.map((order) => {
          return (
            <OrderRow
              key={order.id}
              order={{
                time_range: createTimeRange(
                  order.collection_time_start,
                  order.collection_time_end
                ),
                city: order.collection_address?.split(',')[
                  order.collection_address.split(',').length - 2
                ],
                ...order,
              }}
              parentId={0}
            />
          );
        })}
      {notAssignedOrders.length > 0 && (
        <Typography sx={{ color: COLORS.text.dark }}>
          {t('No driver can reach this stop on time')}
        </Typography>
      )}
    </Box>
  );
};

export default UnassignedOrder;
