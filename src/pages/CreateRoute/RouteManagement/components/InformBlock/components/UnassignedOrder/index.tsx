import { RootState } from '@/store/store';
import { createTimeRange } from '@/utils/createTimeRange';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import OrderRow from '../../../RouteDetails/components/Order';
import { COLORS } from '@/constants/colors';

const UnassignedOrder: FC = () => {
  const { notAssignedOrders } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

  return (
    <>
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
      {notAssignedOrders.map((order) => {
        return (
          <OrderRow
            key={order.id}
            order={{
              id: 0,
              time_range: createTimeRange(
                order.collection_time_start,
                order.collection_time_end
              ),
              city: order.collection_address?.split(',')[
                order.collection_address.split(',').length - 2
              ],
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
    </>
  );
};

export default UnassignedOrder;
