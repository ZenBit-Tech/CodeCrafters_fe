import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { Driver, Order } from '@/interfaces/interfaces';
import { setOrdersToDrivers } from '@/store/slices/ordersToDriversSlice';
import { store } from '@/store/store';

interface Assignment {
  driver: Driver;
  orders: Order[];
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
  }));

  for (const order of orders) {
    let bestAssignment: Assignment | null = null;

    for (const assignment of assignments) {
      const driverOrders = assignment.orders;

      if (
        driverOrders.length === 0 ||
        new Date(
          driverOrders[driverOrders.length - 1].collection_time_end
        ).getTime() <= new Date(order.collection_time_start).getTime()
      ) {
        if (
          !bestAssignment ||
          driverOrders.length < bestAssignment.orders.length
        ) {
          bestAssignment = assignment;
        }
      }
    }

    if (bestAssignment) {
      bestAssignment.orders.push(order);
    } else {
      toast(`Order ${order.id} could not be assigned to any driver`, {
        type: 'error',
      });
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
      `${import.meta.env.VITE_BASE_URL}/orders/by-id?ordersIdArray=${JSON.stringify(ordersListOfId)}`,
      { headers: { authorization: store.getState().auth.token } }
    );
    const { data: driversData } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/driver/by-id?listOfId=${JSON.stringify(driversListOfId)}`,
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
