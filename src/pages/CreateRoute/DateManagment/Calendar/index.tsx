import { FC } from 'react';
import { toast } from 'react-toastify';
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/esm/shared/types.js';
import { t } from 'i18next';
import 'react-calendar/dist/Calendar.css';

import { useMarkDates } from './useMarkDates';
import './styles.css';

interface OnActiveStartDateChangeParams {
  action: string;
  activeStartDate: Date | null;
  value: Value;
  view: string;
}

const MyCalendar: FC = () => {
  const { tileContent, selectedDate, setSelectedDate, fetchDates } =
    useMarkDates();

  const handleMonthChange = ({
    activeStartDate,
  }: OnActiveStartDateChangeParams): void => {
    if (activeStartDate) {
      if (
        !(
          activeStartDate < new Date() &&
          new Date().getMonth() - activeStartDate.getMonth() >= 1
        )
      ) {
        fetchDates(activeStartDate.toISOString(), 1);
      }
    } else {
      toast(t('dateManagement.dateIsNull'), { type: 'error' });
    }
  };

  const handleDateChange = (value: Value): void => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else {
      toast.error('Invalid date selected');
    }
  };

  return (
    <Calendar
      onChange={handleDateChange}
      value={selectedDate}
      tileContent={tileContent}
      locale="en-EN"
      onActiveStartDateChange={handleMonthChange}
      tileDisabled={({ date }) =>
        new Date(date) < new Date(new Date().setHours(0, 0, 0, 0))
      }
    />
  );
};

export default MyCalendar;
