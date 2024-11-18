import { useState } from 'react';
import Calendar from 'react-calendar';

import '@/pages/DateManagment/Calendar/styles.css';

export default function DateManager() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} value={date} locale="en-EN" />
    </div>
  );
}
