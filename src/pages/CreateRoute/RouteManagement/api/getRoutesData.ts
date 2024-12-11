import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { setOrdersToDrivers } from '@/store/slices/ordersToDriversSlice';
import { store } from '@/store/store';
import { setisVisible } from '@/store/slices/loaderSlice';

export const getRoutesData = async (
  ordersListOfId: number[],
  driversListOfId: number[]
): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));
    const { data: assignedOrders } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/orders/assign-orders?driversIds=${JSON.stringify(driversListOfId)}&ordersIds=${JSON.stringify(ordersListOfId)}`,
      { headers: { authorization: store.getState().auth.token } }
    );

    store.dispatch(setOrdersToDrivers(assignedOrders));
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message, { type: 'error' });
    }
  } finally {
    store.dispatch(setisVisible(false));
  }
};
