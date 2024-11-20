import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { setDrivers } from '@/store/slices/driversSlice';
import { store } from '@/store/store';

export const getDrivers = async (
  sortBy: 'ASC' | 'DESC',
  search: string
): Promise<void> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/driver?sortBy=${sortBy}&search=${search}&companyId=1`
    );

    store.dispatch(setDrivers(response.data));
  } catch (error) {
    if (error instanceof AxiosError) {
      toast('Something went wrong');
    }
  }
};
