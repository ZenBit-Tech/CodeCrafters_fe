import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs, { Dayjs } from 'dayjs';

import {
  ActionsContainer,
  SearchContainer,
  ActionButtonsContainer,
  RopeIcon,
  StyledTextField,
} from '@/pages/Routes/styles';
import CalendarRange from '@/components/CalendarRange';
import ropeIcon from '@/assets/icons/jump-rope.svg';
import Button from '@/components/Button';
import useActionsPanel from './useActionsPanel';
import {
  closeDatePickerStyles,
  mapContainer,
  mapDatePicker,
  mapDatePickerActions,
  mapDatePickerContainer,
} from './styles';
import { DATE_FORMAT } from '@/constants/dateFormats';
import { RoutesOnTheMap } from '../RoutesOnTheMap';

const ActionsPanel: React.FC<{
  onDateChange: (start: string, end: string) => void;
  onSearchChange: (searchQuery: string) => void;
}> = ({ onDateChange, onSearchChange }) => {
  const { t } = useTranslation();
  const {
    searchQuery,
    handleInputChange,
    handleKeyDown,
    handleSearchClick,
    handleCreateRouteClick,
    handleViewRoutes,
    isMapVisible,
    setIsMapVisible,
  } = useActionsPanel(onDateChange, onSearchChange);

  const today = dayjs();
  const plusMoth = dayjs().add(30, 'days');
  const [value, setValue] = useState<[Dayjs, Dayjs]>([today, plusMoth]);

  const [isMapViewVisible, toggleIsMapViewVisible] = useState<boolean>(false);

  return (
    <ActionsContainer>
      <SearchContainer>
        <StyledTextField
          label={t('routesPage.search')}
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleSearchClick}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>
      <ActionButtonsContainer>
        <CalendarRange onDateChange={onDateChange} />
        <Box sx={mapDatePickerContainer}>
          <Button
            variant="lined"
            label={t('routesPage.mapView')}
            startIcon={<RopeIcon src={ropeIcon} alt={t('routesPage.rope')} />}
            onClick={() => toggleIsMapViewVisible(true)}
            sx={{ height: '55px' }}
          />
          {isMapViewVisible && (
            <Box sx={mapDatePicker}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangeCalendar
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>
              <Box sx={mapDatePickerActions}>
                <Button
                  sx={closeDatePickerStyles}
                  label={'Cancel'}
                  variant={'outlined'}
                  onClick={() => toggleIsMapViewVisible(false)}
                ></Button>
                <Button
                  label={'Apply'}
                  variant={'contained'}
                  onClick={() =>
                    handleViewRoutes(
                      value[0]?.format(DATE_FORMAT),
                      value[1].format(DATE_FORMAT)
                    )
                  }
                ></Button>
              </Box>
            </Box>
          )}
        </Box>

        <Button
          variant="lined"
          label={t('routesPage.createRoute')}
          onClick={handleCreateRouteClick}
        />
      </ActionButtonsContainer>
      {isMapVisible && (
        <>
          <Button
            sx={{
              zIndex: 9,
              position: 'relative',
              top: '-120px',
              left: '100px',
            }}
            label={'X'}
            variant={'outlined'}
            onClick={() => setIsMapVisible(false)}
          ></Button>
          <Box sx={mapContainer}>
            <RoutesOnTheMap>
              <Box></Box>
            </RoutesOnTheMap>
          </Box>
        </>
      )}
    </ActionsContainer>
  );
};

export default ActionsPanel;
