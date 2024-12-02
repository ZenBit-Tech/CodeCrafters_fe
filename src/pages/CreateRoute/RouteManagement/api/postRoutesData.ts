import axios, { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { StatusEnum } from '@/constants/status';
import { Order } from '@/interfaces/interfaces';
import { resetCreateRouteSettings } from '@/store/slices/createRouteSlice';
import { setisVisible } from '@/store/slices/loaderSlice';
import { store } from '@/store/store';

interface Route {
  submission_date: Date;
  arrival_date: Date;
  distance: number | undefined;
  status: StatusEnum;
  user_id: { id: number };
  company_id: { id: number };
  orders: Order[];
}

export const postRoutesData = async (
  createRoutesDto: Route[],
  navigate: NavigateFunction,
  nextPath: string
): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/route`,
      createRoutesDto,
      { headers: { authorization: store.getState().auth.token } }
    );

    toast(t('routeManagement.createSuccessfully'), { type: 'success' });

    store.dispatch(resetCreateRouteSettings());
    navigate(nextPath);
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.message, { type: 'error' });
    }
  } finally {
    store.dispatch(setisVisible(false));
  }
};
