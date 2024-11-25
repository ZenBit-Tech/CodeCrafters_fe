import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { store } from '@/store/store';
import { setRouteDate } from '@/store/slices/createRouteSlice';
import { getOrders } from '@/pages/Orders/api/getOrders';
import { toast } from 'react-toastify';

export const useChangeDate = (): {
  handleDateChange: (newValue: Dayjs) => void;
  selectedDate: Dayjs | null;
} => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      if (!newValue.isBefore(new Date(), 'day')) {
        const ChangedDate = new Date(
          newValue.year(),
          newValue.month(),
          newValue.date()
        );

        setSelectedDate(newValue);
        store.dispatch(setRouteDate(ChangedDate));

        getOrders({
          sortBy: '%7B%22collection_date%22%3A%22DESC%22%7D',
          filter: 'STATUS',
          search: '',
          page: 1,
          companyId: 1,
          isNew: true,
        });
      } else {
        setSelectedDate(dayjs());
        toast(
          'The selected date is in the past. Please choose a date that is today or in the future',
          { type: 'warning' }
        );
      }
    }
  };

  return { handleDateChange, selectedDate };
};
