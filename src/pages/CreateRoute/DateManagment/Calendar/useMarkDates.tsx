import {
  useEffect,
  useState,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
} from 'react';
import { TileContentFunc } from 'react-calendar';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { store } from '@/store/store';
import { setRouteDate } from '@/store/slices/createRouteSlice';
import { setisVisible } from '@/store/slices/loaderSlice';

interface MarkDatesInterface {
  tileContent: ReactNode | TileContentFunc;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  fetchDates: (dateStartString: string, companyId: number) => Promise<void>;
}

export const useMarkDates = (): MarkDatesInterface => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState<Record<string, number>>({});

  useEffect(() => {
    const utcDate = new Date(
      Date.UTC(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      )
    );

    store.dispatch(setRouteDate(utcDate));
  }, [selectedDate]);

  const fetchDates = useCallback(
    async (dateStartString: string, companyId: number): Promise<void> => {
      try {
        store.dispatch(setisVisible(true));
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders/by-dates?date=${dateStartString}&comanyId=${companyId}`
        );

        setDates(response.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          toast(error.response?.data.message, { type: 'error' });
        } else {
          toast(t('getOrdersDates.failed'), { type: 'error' });
        }
      } finally {
        store.dispatch(setisVisible(false));
      }
    },
    []
  );

  useEffect(() => {
    fetchDates(new Date().toISOString(), 1);
  }, [fetchDates]);

  const tileContent = ({ date }: { date: Date }): ReactNode => {
    const formattedDate = date.toLocaleDateString('en-CA');

    if (dates[formattedDate]) {
      return <span className="has-drivers">{dates[formattedDate]} orders</span>;
    }
    return null;
  };

  return {
    tileContent,
    selectedDate,
    setSelectedDate,
    fetchDates,
  };
};
