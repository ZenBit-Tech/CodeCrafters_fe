import { FC } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useMarkDates } from './useMarkDates';
import './styles.css';

const MyCalendar: FC = () => {
  const { tileContent, selectedDate, setSelectedDate, fetchDates } =
    useMarkDates();

  const handleMonthChange = ({
    activeStartDate,
  }: {
    action: string;
    activeStartDate: Date | null;
    value: Date[];
    view: string;
  }) => {
    if (activeStartDate) {
      fetchDates(activeStartDate.toISOString(), 1);
    } else {
      console.warn('activeStartDate is null');
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
