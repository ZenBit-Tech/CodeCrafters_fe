import React from 'react';
import { DateRange } from 'react-date-range';
import { t } from 'i18next';
import CalendarIcon from '@mui/icons-material/Event';
import { addMonths, format } from 'date-fns';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';

import { DATE_FORMAT, MONTH_YEAR } from '@/constants/dateFormats';
import { COLORS } from '@/constants/colors';
import rightArrow from '@/assets/icons/calendar-arr-right.svg';
import leftArrow from '@/assets/icons/calendar-arr-left.svg';
import Button from '@/components/Button';

import {
  Container,
  CalendarTrigger,
  InputField,
  CalendarPopup,
  Header,
  NavigationButton,
  ActionButtons,
  ArrowIcon,
} from './styles';
import './style.css';
import { useCalendarRange } from './useCalendarRange';

const NUM_MONTHS_TO_SHOW = 1;

const CalendarRange: React.FC<{
  onDateChange: (start: string, end: string) => void;
}> = ({ onDateChange }) => {
  const {
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
  } = useCalendarRange(onDateChange);

  return (
    <Container>
      <CalendarTrigger onClick={openCalendar}>
        <InputField
          value={`${format(
            confirmedRange.startDate as Date,
            DATE_FORMAT
          )}-${format(confirmedRange.endDate as Date, DATE_FORMAT)}`}
          readOnly
        />
        <CalendarIcon />
      </CalendarTrigger>

      {isCalendarOpen && (
        <CalendarPopup>
          <Header>
            <NavigationButton onClick={handlePrevMonth}>
              <ArrowIcon src={leftArrow} alt={t('Left Arrow')} />
            </NavigationButton>
            <span>{format(currentMonth, MONTH_YEAR)}</span>
            <span>
              {format(addMonths(currentMonth, NUM_MONTHS_TO_SHOW), MONTH_YEAR)}
            </span>
            <NavigationButton onClick={handleNextMonth}>
              <ArrowIcon src={rightArrow} alt={t('Right Arrow')} />
            </NavigationButton>
          </Header>
          <DateRange
            key={currentMonth.toISOString()}
            ranges={[tempRange]}
            onChange={handleSelect}
            months={2}
            direction="horizontal"
            showMonthAndYearPickers={false}
            rangeColors={[`${COLORS.main.light}`]}
            showDateDisplay={false}
            shownDate={currentMonth}
          />
          <ActionButtons>
            <Button
              variant="lined"
              label={t('Cancel')}
              onClick={handleCancel}
            />
            <Button
              variant="colored"
              label={t('Apply')}
              onClick={handleConfirm}
            />
          </ActionButtons>
        </CalendarPopup>
      )}
    </Container>
  );
};

export default CalendarRange;
