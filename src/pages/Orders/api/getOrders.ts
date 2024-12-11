import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { setViewOrdersData } from '@/store/slices/ordersPageSlice';
import { setisVisible } from '@/store/slices/loaderSlice';
import { store } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';

interface GetOrdersParams {
  sortBy: string;
  filter: string;
  search?: string;
  page: number;
  companyId: number;
  isNew: boolean;
  routeDate?: Date;
}

export const getOrders = async ({
  sortBy,
  filter,
  search,
  page,
  companyId,
  isNew,
  routeDate,
}: GetOrdersParams): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));

    const orders: AxiosResponse = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/orders/?sortBy=${sortBy}${filter !== 'STATUS' ? `&filterBy=${filter}` : ''}&isNew=${isNew}${!search ? '' : `&search=${search}`}&page=${page}&companyId=${companyId}${routeDate ? `&startDate=${routeDate}` : ''}`,
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

export const getNewOrdersCount = async (companyId: number): Promise<number> => {
  const response = await axiosInstance.get(
    `${import.meta.env.VITE_BASE_URL}/orders/new-orders-count`,
    {
      params: { companyId },
    }
  );
  return response.data;
};
