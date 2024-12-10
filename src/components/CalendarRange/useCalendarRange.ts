import { useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import { addMonths, format } from 'date-fns';

import { DATE_FORMAT } from '@/constants/dateFormats';

interface UseCalendarRangeReturn {
  isCalendarOpen: boolean;
  currentMonth: Date;
  confirmedRange: Range;
  tempRange: Range;
  handleSelect: (ranges: RangeKeyDict) => void;
  handleConfirm: () => void;
  handleCancel: () => void;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  openCalendar: () => void;
  closeCalendar: () => void;
}

const MONTH_SHIFT = 1;
const INITIAL_DATE = new Date();

export const useCalendarRange = (
  onDateChange: (start: string, end: string) => void
): UseCalendarRangeReturn => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [confirmedRange, setConfirmedRange] = useState<Range>({
    startDate: INITIAL_DATE,
    endDate: INITIAL_DATE,
    key: 'selection',
  });

  const [tempRange, setTempRange] = useState<Range>({
    startDate: INITIAL_DATE,
    endDate: INITIAL_DATE,
    key: 'selection',
  });

  const handleSelect = (ranges: RangeKeyDict): void => {
    const { selection } = ranges;
    setTempRange(selection);
  };

  const handleConfirm = (): void => {
    setConfirmedRange(tempRange);
    onDateChange(
      format(tempRange.startDate as Date, DATE_FORMAT),
      format(tempRange.endDate as Date, DATE_FORMAT)
    );
    setIsCalendarOpen(false);
  };

  const handleCancel = (): void => {
    setTempRange(confirmedRange);
    setIsCalendarOpen(false);
  };

  const handlePrevMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, -MONTH_SHIFT));
  };

  const handleNextMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, MONTH_SHIFT));
  };

  const openCalendar = (): void => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = (): void => {
    setIsCalendarOpen(false);
  };

  return {
    isCalendarOpen,
    currentMonth,
    confirmedRange,
    tempRange,
    handleSelect,
    handleConfirm,
    handleCancel,
    handlePrevMonth,
    handleNextMonth,
    openCalendar,
    closeCalendar,
  };
};
