import { toast } from 'react-toastify';
import i18n from '@/utils/i18n';
import { AxiosError } from 'axios';

import axiosInstance from '@/utils/axiosInstance';
import { RouteData } from '@/interfaces/Routes';

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
  try {
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
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const errorMessage =
        error.response.data.message ||
        i18n.t('routesPage.routesApi.unexpected_error');
      toast.error(i18n.t(errorMessage));
    } else {
      toast.error(i18n.t('routesPage.routesApi.fetch_failed'));
    }
    throw new Error(i18n.t('routesPage.routesApi.unexpected_error'));
  }
};

export const getRouteFilters = async (
  startDate: string,
  endDate: string
): Promise<{ drivers: string[]; stops: number[]; statuses: string[] }> => {
  try {
    const response = await axiosInstance.get('/route/list-filters', {
      params: {
        startDate,
        endDate,
      },
    });

    return response.data;
  } catch (error) {
    toast.error(i18n.t('routesPage.routesApi.fetch_filters_failed'));
    throw new Error(i18n.t('routesPage.routesApi.fetch_filters_failed'));
  }
};
