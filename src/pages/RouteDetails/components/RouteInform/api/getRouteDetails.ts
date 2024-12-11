import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { store } from '@/store/store';
import { RouteInform } from '@/interfaces/interfaces';
import { setisVisible } from '@/store/slices/loaderSlice';

export const getRouteDetails = async (
  routeId: number
): Promise<AxiosResponse<RouteInform>> => {
  try {
    store.dispatch(setisVisible(true));
    const response = await axios(
      `${import.meta.env.VITE_BASE_URL}/route/${routeId}`,
      { headers: { authorization: store.getState().auth.token } }
    );

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.message, { type: 'error' });
    }
    throw new Error();
  } finally {
    store.dispatch(setisVisible(false));
  }
};
