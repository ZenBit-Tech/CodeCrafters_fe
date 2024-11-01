import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';
import { Dayjs } from 'dayjs';

const BasicDatePicker: React.FC<DatePickerProps<Dayjs>> = (props) => {
  const { t } = useTranslation();
  const dateFormat = t('MM/DD/YYYY');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={dateFormat} {...props} />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
