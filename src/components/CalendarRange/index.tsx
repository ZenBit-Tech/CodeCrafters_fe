import React from 'react';

import Calendar from '@mui/icons-material/Event';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

const CalendarRange: React.FC<{
  onDateChange: (start: string, end: string) => void;
}> = ({ onDateChange }) => {
  const handleDateChange = (range: [Dayjs | null, Dayjs | null]) => {
    if (range[0] && range[1]) {
      onDateChange(
        range[0].format('YYYY-MM-DD'),
        range[1].format('YYYY-MM-DD')
      );
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        onChange={(newValue) => handleDateChange(newValue)}
        slots={{ field: SingleInputDateRangeField }}
        slotProps={{
          textField: {
            InputProps: {
              endAdornment: <Calendar />,
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CalendarRange;
