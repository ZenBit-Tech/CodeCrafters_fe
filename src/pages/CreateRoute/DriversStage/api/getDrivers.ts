import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { setDrivers } from '@/store/slices/driversSlice';
import { store } from '@/store/store';
import { DriverFormValues } from '@/pages/CreateRoute/DriversStage/components/DriverForm/useDriverForm';
import { DRIVERROLE, LOGO } from '@/constants/constants';
import { setisVisible } from '@/store/slices/loaderSlice';

export const getDrivers = async (
  sortBy: 'ASC' | 'DESC',
  search: string
): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));
    const response: AxiosResponse = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/driver?sortBy=${sortBy}&search=${search}&companyId=1`,
      { headers: { authorization: store.getState().auth.token } }
    );

    store.dispatch(setDrivers(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(t('driverManagement.cantGetDrivers'), { type: 'error' });
    }
  } finally {
    store.dispatch(setisVisible(false));
  }
};

export const addDrivers = async (
  formData: DriverFormValues,
  companyId: number
): Promise<void> => {
  try {
    store.dispatch(setisVisible(true));
    const response: AxiosResponse = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/driver`,
      {
        ...formData,
        company_id: companyId,
        logo: LOGO,
        role: DRIVERROLE,
      },
      { headers: { authorization: store.getState().auth.token } }
    );

    if (response.status === 201) {
      toast.success(t('driverManagement.driverAdd'));
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      toast.error(
        t('driverManagement.cantAddDriver', {
          message: error.response.data.message,
        })
      );
    }
  } finally {
    store.dispatch(setisVisible(false));
  }
};
