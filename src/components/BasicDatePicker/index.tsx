import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';
import { Dayjs } from 'dayjs';

interface BasicDatePickerProps extends DatePickerProps<Dayjs> {
  dataFormat: string;
}

const BasicDatePicker: React.FC<BasicDatePickerProps> = ({
  dataFormat,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={t(dataFormat)} {...props} />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;
