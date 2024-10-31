import React from 'react';
import Calendar from '@mui/icons-material/Event';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const CalendarRange: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
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
