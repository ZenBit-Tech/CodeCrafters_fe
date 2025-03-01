import { Range, RangeKeyDict } from 'react-date-range';
interface UseCalendarRangeReturn {
    isCalendarOpen: boolean;
    currentMonth: Date;
    tempRange: Range;
    handleSelect: (ranges: RangeKeyDict) => void;
    handleConfirm: () => void;
    handleCancel: () => void;
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    openCalendar: () => void;
}
export declare const useCalendarRange: () => UseCalendarRangeReturn;
export {};
