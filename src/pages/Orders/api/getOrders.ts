import { setAccessToken } from '@/store/slices/authSlice';
import { setisVisible } from '@/store/slices/loaderSlice';
import { setViewOrdersData } from '@/store/slices/ordersPageSlice';
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
    store.dispatch(
      setAccessToken({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9nbyI6Imh0dHA6Ly9sb2dvIiwiZnVsbF9uYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJjb21wYW55X2lkIjp7ImlkIjoyLCJuYW1lIjoiTHVnZ2FnZSBkZWxpdmVyeSIsImxvZ28iOiJodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9zYT1pJnVybD1odHRwcyUzQSUyRiUyRmxvZ28uY29tJTJGbG9nb3MlMkZkZWxpdmVyeSZwc2lnPUFPdlZhdzFyYzM5ZklOUUJsYjdZRGZYTDBGSmsmdXN0PTE3MzA1Mzk5NzA2NzIwMDAmc291cmNlPWltYWdlcyZjZD12ZmUmb3BpPTg5OTc4NDQ5JnZlZD0wQ0JRUWpSeHFGd29UQ01qUHU0VHF1b2tERlFBQUFBQWRBQUFBQUJBRSIsImVtYWlsIjoiZGVsaXZlcnkuY29tcGFueUBnbWlhbC5jb20iLCJjcmVhdGVkQXQiOiIyMDI0LTExLTE0VDA5OjQzOjUyLjMwOFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTExLTE0VDA5OjQzOjUyLjMwOFoifSwiY3JlYXRlZEF0IjoiMjAyNC0xMS0xNFQwOTo0NDoxMy41NzRaIiwidXBkYXRlZEF0IjoiMjAyNC0xMS0xNFQwOTo0NDoxMy41NzRaIiwiaWF0IjoxNzMxNTg0NjUzfQ.8xGQt2L7LmoVWECMF55kLlMzTNz6uhoz6SXYg_kzZNY',
        role: 'admin',
      })
    );
    store.dispatch(setisVisible(true));
    const orders: AxiosResponse = await axios.get(
      `http://localhost:4000/orders/?sortBy=${sortBy}${filter !== 'STATUS' ? `&filterBy=${filter}` : ''}&page=${page}&companyId=${companyId}`,
      {
        headers: {
          authorization: store.getState().auth.token,
        },
      }
    );

    store.dispatch(setViewOrdersData(orders.data));

    if (!orders.data) throw new Error();
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message, { type: 'error' });
    }
  } finally {
    store.dispatch(setisVisible(false));
  }
};
