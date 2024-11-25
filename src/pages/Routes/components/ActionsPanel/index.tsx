import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ActionsContainer,
  SearchContainer,
  ActionButtonsContainer,
  RopeIcon,
} from '@/pages/Routes/styles';
import CalendarRange from '@/components/CalendarRange';
import TextInput from '@/components/TextInput';
import ropeIcon from '@/assets/icons/jump-rope.svg';
import Button from '@/components/Button';

const ActionsPanel: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ActionsContainer>
      <SearchContainer>
        <TextInput label={t('routesPage.search')} />
      </SearchContainer>
      <ActionButtonsContainer>
        <CalendarRange />
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
