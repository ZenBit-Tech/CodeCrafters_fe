import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { setViewOrdersData } from '@/store/slices/ordersPageSlice';
import { setisVisible } from '@/store/slices/loaderSlice';
import { store } from '@/store/store';
import { setAccessToken } from '@/store/slices/authSlice';

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
    store.dispatch(
      setAccessToken({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9nbyI6Imh0dHA6Ly9sb2dvIiwiZnVsbF9uYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJjb21wYW55X2lkIjp7ImlkIjoyLCJuYW1lIjoiTHVnZ2FnZSBkZWxpdmVyeSIsImxvZ28iOiJodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9zYT1pJnVybD1odHRwcyUzQSUyRiUyRmxvZ28uY29tJTJGbG9nb3MlMkZkZWxpdmVyeSZwc2lnPUFPdlZhdzFyYzM5ZklOUUJsYjdZRGZYTDBGSmsmdXN0PTE3MzA1Mzk5NzA2NzIwMDAmc291cmNlPWltYWdlcyZjZD12ZmUmb3BpPTg5OTc4NDQ5JnZlZD0wQ0JRUWpSeHFGd29UQ01qUHU0VHF1b2tERlFBQUFBQWRBQUFBQUJBRSIsImVtYWlsIjoiZGVsaXZlcnkuY29tcGFueUBnbWlhbC5jb20iLCJjcmVhdGVkQXQiOiIyMDI0LTExLTE0VDA5OjQzOjUyLjMwOFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTExLTE0VDA5OjQzOjUyLjMwOFoifSwiY3JlYXRlZEF0IjoiMjAyNC0xMS0xNFQwOTo0NDoxMy41NzRaIiwidXBkYXRlZEF0IjoiMjAyNC0xMS0xNFQwOTo0NDoxMy41NzRaIiwiaWF0IjoxNzMxNTg0NjUzfQ.8xGQt2L7LmoVWECMF55kLlMzTNz6uhoz6SXYg_kzZNY',
        role: 'admin',
      })
    );
    store.dispatch(setisVisible(true));

    const orders: AxiosResponse = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/orders/?sortBy=${sortBy}${filter !== 'STATUS' ? `&filterBy=${filter}` : ''}${!search ? '' : `&search=${search}`}&page=${page}&companyId=${companyId}?isNew=false`,
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
