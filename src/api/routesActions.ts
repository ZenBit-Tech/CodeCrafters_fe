import { toast } from 'react-toastify';
import i18n from '@/utils/i18n';
import { AxiosError } from 'axios';

import axiosInstance from '@/utils/axiosInstance';
import { NotificationsData, RouteData } from '@/interfaces/Routes';
import { setisVisible } from '@/store/slices/loaderSlice';
import { store } from '@/store/store';
import { MIN_LOADER_TIME } from '@/constants/constants';

export const getRoutesByDateRange = async (
  startDate: string,
  endDate: string,
  sortField: string,
  sortDirection: 'asc' | 'desc',
  searchQuery?: string,
  drivers?: string[],
  stopsCount?: number[],
  statuses?: string[]
): Promise<RouteData[]> => {
  const loaderStartTime = Date.now();

  try {
    store.dispatch(setisVisible(true));

    const response = await axiosInstance.get('/route/by-dates', {
      params: {
        startDate,
        endDate,
        sortField,
        sortDirection,
        searchQuery,
        drivers,
        stopsCount,
        statuses,
      },
    });

    const elapsedTime = Date.now() - loaderStartTime;
    if (elapsedTime < MIN_LOADER_TIME) {
      await new Promise((resolve) =>
        setTimeout(resolve, MIN_LOADER_TIME - elapsedTime)
      );
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(i18n.t(`${error.response.data.message}`));
    }
    throw new Error(i18n.t('routesPage.routesApi.unexpected_error'));
  } finally {
    store.dispatch(setisVisible(false));
  }
};

export const getRouteFilters = async (
  startDate: string,
  endDate: string
): Promise<{ drivers: string[]; stops: number[]; statuses: string[] }> => {
  const loaderStartTime = Date.now();

  try {
    store.dispatch(setisVisible(true));

    const response = await axiosInstance.get('/route/list-filters', {
      params: {
        startDate,
        endDate,
      },
    });

    const elapsedTime = Date.now() - loaderStartTime;
    if (elapsedTime < MIN_LOADER_TIME) {
      await new Promise((resolve) =>
        setTimeout(resolve, MIN_LOADER_TIME - elapsedTime)
      );
    }

    return response.data;
  } catch (error) {
    toast.error(i18n.t('routesPage.routesApi.fetch_filters_failed'));
    throw new Error(`${error}`);
  } finally {
    store.dispatch(setisVisible(false));
  }
};

export const getDriverNotification = async (
  routeId: number
): Promise<NotificationsData[]> => {
  try {
    const response = await axiosInstance.get(
      `/orders/by-routeId?routeId=${routeId}`
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(i18n.t(`${error.response.data.message}`));
    }
    return [];
  }
};
