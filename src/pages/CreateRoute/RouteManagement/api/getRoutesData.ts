import { Driver, Order } from '@/interfaces/interfaces';
import { setOrdersToDrivers } from '@/store/slices/ordersToDriversSlice';
import { store } from '@/store/store';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

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
    let assigned = false;

    for (const assignment of assignments) {
      const driverOrders = assignment.orders;

      if (driverOrders.length === 0) {
        driverOrders.push(order);
        assigned = true;
        break;
      }

      const lastOrder = driverOrders[driverOrders.length - 1];

      if (lastOrder.collection_time_end <= order.collection_time_start) {
        driverOrders.push(order);
        assigned = true;
        break;
      }
    }

    if (!assigned) {
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
) => {
  try {
    const { data: ordersData } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/orders/by-id?ordersIdArray=${ordersListOfId}`,
      { headers: { authorization: store.getState().auth.token } }
    );
    const { data: driversData } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/driver/by-id?listOfId=${driversListOfId}`,
      { headers: { authorization: store.getState().auth.token } }
    );

    const routesData = assignOrdersToDrivers(driversData, ordersData);
    store.dispatch(setOrdersToDrivers(routesData));
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message);
    }
  }
};
