import { useEffect } from 'react';
import { getRoutesData } from './api/getRoutesData';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RouteInfo } from './components/InformBlock';

export const useCreateRoutes = (): { ordersToDrivers: RouteInfo[] } => {
  const { value } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

  useEffect(() => {
    getRoutesData([1, 2, 3, 4], [2, 3]);
  }, []);

  const mappedRoutes = value.map((orderToDriver) => {
    return {
      id: orderToDriver.driver.id,
      driver_full_name: orderToDriver.driver.full_name,
      time_range: `${new Date(orderToDriver.orders[0].collection_time_start).getHours()}:${new Date(orderToDriver.orders[0].collection_time_start).getMinutes() === 0 ? '00' : new Date(orderToDriver.orders[0].collection_time_start).getMinutes()} - ${new Date(orderToDriver.orders[orderToDriver.orders.length - 1].collection_time_end).getHours()}:${new Date(orderToDriver.orders[orderToDriver.orders.length - 1].collection_time_end).getMinutes()}`,
      distance: 1741,
      orders: orderToDriver.orders.map((order) => {
        return {
          time_range: `${new Date(order.collection_time_start).getHours()}:${new Date(order.collection_time_start).getMinutes() === 0 ? '00' : new Date(order.collection_time_start).getMinutes()} - ${new Date(order.collection_time_start).getHours() === 0 ? '00' : new Date(order.collection_time_start).getHours()}:${new Date(order.collection_time_end).getMinutes() == 0 ? '00' : new Date(order.collection_time_end).getMinutes()}`,
          city: order.collection_address.split(',')[
            order.collection_address.split(',').length - 2
          ],
        };
      }),
    };
  });

  return { ordersToDrivers: mappedRoutes };
};
