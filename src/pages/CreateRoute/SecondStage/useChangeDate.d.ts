import { Dayjs } from 'dayjs';
import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';
export declare const useChangeDate: () => {
    handleDateChange: (newValue: Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => void;
    selectedDate: Dayjs | null;
};
