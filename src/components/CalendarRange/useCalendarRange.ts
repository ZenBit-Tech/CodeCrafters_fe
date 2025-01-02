import { useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import { addMonths, endOfDay, format, startOfDay } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { setEndDate, setStartDate } from '@/store/slices/routesSlice';
import {
  END_OF_DAY_FORMAT,
  START_OF_DAY_FORMAT,
} from '@/constants/dateFormats';

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
const INITIAL_DATE = new Date();

export const useCalendarRange = (): UseCalendarRangeReturn => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(INITIAL_DATE);

  const dispatch = useDispatch();
  const startDate = useSelector((state: RootState) => state.routes.startDate);
  const endDate = useSelector((state: RootState) => state.routes.endDate);
  const [tempRange, setTempRange] = useState<Range>({
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    key: 'selection',
  });

  const handleSelect = (ranges: RangeKeyDict): void => {
    const { selection } = ranges;
    setTempRange(selection);
  };

  const handleConfirm = (): void => {
    const formattedStartDate = format(
      startOfDay(tempRange.startDate as Date),
      START_OF_DAY_FORMAT
    );
    const formattedEndDate = format(
      endOfDay(tempRange.endDate as Date),
      END_OF_DAY_FORMAT
    );

    dispatch(setStartDate(formattedStartDate));
    dispatch(setEndDate(formattedEndDate));
    setIsCalendarOpen(false);
  };

  const handleCancel = (): void => {
    setTempRange({
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      key: 'selection',
    });
    setIsCalendarOpen(false);
  };

  const handlePrevMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const handleNextMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const openCalendar = (): void => {
    setIsCalendarOpen(true);
  };

  return {
    isCalendarOpen,
    currentMonth,
    tempRange,
    handleSelect,
    handleConfirm,
    handleCancel,
    handlePrevMonth,
    handleNextMonth,
    openCalendar,
  };
};
