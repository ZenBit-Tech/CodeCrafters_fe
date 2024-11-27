import { useEffect } from 'react';
import { getRoutesData } from './api/getRoutesData';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { RouteInfo } from './components/InformBlock';
import { StatusEnum } from '@/constants/status';
import { postRoutesData } from './api/postRoutesData';
import { useNavigate } from 'react-router-dom';

export const useCreateRoutes = (): {
  ordersToDrivers: RouteInfo[];
  onCreateRoute: (nextPath: string) => void;
} => {
  const { value: routeData, distances } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );
  const { checkedOrders, drivers } = useSelector(
    (store: RootState) => store.createRoutSettings
  );
  const navigate = useNavigate();

  useEffect(() => {
    getRoutesData([...checkedOrders], [...drivers]);
  }, [checkedOrders, drivers]);

  const mappedRoutes = routeData.map((orderToDriver) => {
    return {
      id: orderToDriver.driver.id,
      driver_full_name: orderToDriver.driver.full_name,
      time_range: `${new Date(orderToDriver.orders[0].collection_time_start).getHours()}:${new Date(orderToDriver.orders[0].collection_time_start).getMinutes() === 0 ? '00' : new Date(orderToDriver.orders[0].collection_time_start).getMinutes()} - ${new Date(orderToDriver.orders[orderToDriver.orders.length - 1].collection_time_end).getHours()}:${new Date(orderToDriver.orders[orderToDriver.orders.length - 1].collection_time_end).getMinutes()}`,
      distance: 1741,
      orders: orderToDriver.orders.map((order) => {
        return {
          ...order,
          id: order.id,
          time_range: `${new Date(order.collection_time_start).getHours()}:${new Date(order.collection_time_start).getMinutes() === 0 ? '00' : new Date(order.collection_time_start).getMinutes()} - ${new Date(order.collection_time_start).getHours() === 0 ? '00' : new Date(order.collection_time_start).getHours()}:${new Date(order.collection_time_end).getMinutes() == 0 ? '00' : new Date(order.collection_time_end).getMinutes()}`,
          city: order.collection_address.split(',')[
            order.collection_address.split(',').length - 2
          ],
        };
      }),
    };
  });

  const onCreateRoute = (nextPath: string): void => {
    const createRoutesData = routeData.map((route) => {
      return {
        submission_date: route.orders[0].collection_time_start,
        arrival_date: route.orders[route.orders.length - 1].collection_time_end,
        distance: distances.find((distance) => {
          return distance.driverId === route.driver.id;
        })?.distance,
        status: StatusEnum.UPCOMING,
        user_id: { id: route.driver.id },
        company_id: { id: 1 },
        orders: route.orders,
      };
    });

    postRoutesData(createRoutesData, navigate, nextPath);
  };

  return { ordersToDrivers: mappedRoutes, onCreateRoute };
};
