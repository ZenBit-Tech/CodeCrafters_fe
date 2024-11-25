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

interface MarkDatesInterface {
  tileContent: ReactNode | TileContentFunc;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  fetchDates: (dateStartString: string, companyId: number) => Promise<void>;
}

export const useMarkDates = (): MarkDatesInterface => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState<Record<string, number>>({});

  const fetchDates = useCallback(
    async (dateStartString: string, companyId: number): Promise<void> => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders/by-dates?date=${dateStartString}&comanyId=${companyId}`
        );

        setDates(response.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          toast(error.response?.data.message, { type: 'error' });
        } else {
          toast('Something went wrong', { type: 'error' });
        }
      }
    },
    []
  );

  useEffect(() => {
    fetchDates(new Date().toISOString(), 1);
  }, [fetchDates]);

  const tileContent = ({ date }: { date: Date }) => {
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
