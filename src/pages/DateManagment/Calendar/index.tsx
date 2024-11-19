import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useMarkDates } from './useMarkDates';
import './styles.css';

const MyCalendar = () => {
  const { tileContent, selectedDate, setSelectedDate } = useMarkDates();

  return (
    <Calendar
      onChange={setSelectedDate}
      value={selectedDate}
      tileContent={tileContent}
      locale="en-EN"
    />
  );
};

export default MyCalendar;
