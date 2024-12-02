import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { Driver, Order } from '@/interfaces/interfaces';
import {
  addNotAssignedOrder,
  setOrdersToDrivers,
} from '@/store/slices/ordersToDriversSlice';
import { store } from '@/store/store';

interface Assignment {
  driver: Driver;
  orders: Order[];
  notAssignedOrders: Order[];
}

const assignOrdersToDrivers = (
  drivers: Driver[],
  orders: Order[]
): Assignment[] => {
  orders.sort(
    (a, b) =>
      new Date(a.collection_time_start).getTime() -
      new Date(b.collection_time_start).getTime()
  );

  const assignments: Assignment[] = drivers.map((driver) => ({
    driver,
    orders: [],
    notAssignedOrders: [],
  }));

  const driverCount = drivers.length;

  for (const order of orders) {
    let assigned = false;

    for (let i = 0; i < driverCount; i++) {
      const assignment = assignments[i];
      const driverOrders = assignment.orders;

      const hasSameStartTime = driverOrders.some(
        (o) =>
          new Date(o.collection_time_start).getTime() ===
          new Date(order.collection_time_start).getTime()
      );

      if (!hasSameStartTime) {
        assignment.orders.push(order);
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      store.dispatch(addNotAssignedOrder(order));
      toast(
        `Order ${order.id} could not be assigned because all drivers already have an order with collection_time_start: ${order.collection_time_start}`,
        {
          type: 'error',
        }
      );
    }
  }

  return assignments;
};

export const getRoutesData = async (
  ordersListOfId: number[],
  driversListOfId: number[]
): Promise<void> => {
  try {
    const { data: ordersData } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/orders/by-ids?ordersIdArray=${JSON.stringify(ordersListOfId)}`,
      { headers: { authorization: store.getState().auth.token } }
    );
    const { data: driversData } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/driver/by-ids?listOfId=${JSON.stringify(driversListOfId)}`,
      { headers: { authorization: store.getState().auth.token } }
    );

    const routesData = assignOrdersToDrivers(driversData, ordersData);
    store.dispatch(setOrdersToDrivers(routesData));
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
  }
};
