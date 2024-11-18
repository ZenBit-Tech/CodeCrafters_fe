import { setisVisible } from '@/store/slices/loaderSlice';
import { setViewData } from '@/store/slices/ordersPageSlice';
import { store } from '@/store/store';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export const getOrders = async ({
  sortBy,
  filter,
  page,
  companyId,
}: {
  sortBy: string;
  filter: string;
  page: number;
  companyId: number;
}): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));
    const orders: AxiosResponse = await axios.get(
      `http://localhost:4000/orders/?sortBy=${sortBy}${filter !== 'STATUS' ? `&filterBy=${filter}` : ''}&page=${page}&companyId=${companyId}`,
      {
        headers: {
          authorization: store.getState().auth.token,
        },
      }
    );

    store.dispatch(setViewData(orders.data));

    if (!orders.data) throw new Error();
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message, { type: 'error' });
    }
  } finally {
    store.dispatch(setisVisible(false));
  }
};
