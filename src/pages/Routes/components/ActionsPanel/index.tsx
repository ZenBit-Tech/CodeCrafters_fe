import React, { useState } from 'react';
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

const ActionsPanel: React.FC<{
  onDateChange: (start: string, end: string) => void;
  onSearchChange: (searchQuery: string) => void;
}> = ({ onDateChange, onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchChange(searchQuery);
    }
  };

  const handleSearchClick = () => {
    onSearchChange(searchQuery);
  };
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
        <Button variant="lined" label={t('routesPage.createRoute')} />
      </ActionButtonsContainer>
    </ActionsContainer>
  );
};

export default ActionsPanel;
