import React from 'react';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
interface BasicDatePickerProps extends DatePickerProps<Dayjs> {
    dataFormat: string;
}
declare const BasicDatePicker: React.FC<BasicDatePickerProps>;
export default BasicDatePicker;
