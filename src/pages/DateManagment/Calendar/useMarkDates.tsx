import {
  useEffect,
  useState,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';
import { TileContentFunc } from 'react-calendar';
import axios from 'axios';

interface MarkDatesInterface {
  tileContent: ReactNode | TileContentFunc;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
}

export const useMarkDates = (): MarkDatesInterface => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/orders/by-dates?date=2024-11-18T00:00:00.000Z&comanyId=1`
        );
        setDates(response.data);
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    };

    fetchDates();
  }, []);

  const tileContent = ({ date }: { date: Date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    if (dates[formattedDate]) {
      return <span className="has-drivers">{dates[formattedDate]} orders</span>;
    }
    return null;
  };

  return {
    tileContent,
    selectedDate,
    setSelectedDate,
  };
};
