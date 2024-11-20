import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { setViewOrdersData } from '@/store/slices/ordersPageSlice';
import { setisVisible } from '@/store/slices/loaderSlice';
import { store } from '@/store/store';

interface GetOrdersParams {
  sortBy: string;
  filter: string;
  search?: string;
  page: number;
  companyId: number;
}

export const getOrders = async ({
  sortBy,
  filter,
  search,
  page,
  companyId,
}: GetOrdersParams): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));

    const orders: AxiosResponse = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/orders/?sortBy=${sortBy}${filter !== 'STATUS' ? `&filterBy=${filter}` : ''}${!search ? '' : `&search=${search}`}&page=${page}&companyId=${companyId}`,
      {
        headers: {
          authorization: store.getState().auth.token,
        },
      }
    );

    if (!orders.data) throw new Error();

    store.dispatch(setViewOrdersData(orders.data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message, { type: 'error' });
    } else {
      toast(t('Something went wrong'), { type: 'error' });
    }
  } finally {
    store.dispatch(setisVisible(false));
  }
};