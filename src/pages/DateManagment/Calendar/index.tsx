import { FC } from 'react';
import { toast } from 'react-toastify';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useMarkDates } from './useMarkDates';
import './styles.css';
import { Value } from 'react-calendar/dist/esm/shared/types.js';

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
      fetchDates(activeStartDate.toISOString(), 1);
    } else {
      toast('activeStartDate is null', { type: 'error' });
    }
  };

  return (
    <Calendar
      onChange={setSelectedDate}
      value={selectedDate}
      tileContent={tileContent}
      locale="en-EN"
      onActiveStartDateChange={handleMonthChange}
    />
  );
};

export default MyCalendar;
