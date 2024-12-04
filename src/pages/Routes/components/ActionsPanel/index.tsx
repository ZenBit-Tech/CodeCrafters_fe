import React from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

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
  } = useActionsPanel(onDateChange, onSearchChange);

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
        <Button
          variant="lined"
          label={t('routesPage.mapView')}
          startIcon={<RopeIcon src={ropeIcon} alt={t('routesPage.rope')} />}
        />
        <Button
          variant="lined"
          label={t('routesPage.createRoute')}
          onClick={handleCreateRouteClick}
        />
      </ActionButtonsContainer>
    </ActionsContainer>
  );
};

export default ActionsPanel;
