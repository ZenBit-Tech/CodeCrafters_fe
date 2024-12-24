import React from 'react';
import { t } from 'i18next';

import Button from '@/components/Button';
import { ButtonWrapper, NoRoutesContainer, NoRoutesTypography } from './styles';

interface NoRoutesMessageProps {
  onCreateRouteClick: () => void;
}

const NoRoutesMessage: React.FC<NoRoutesMessageProps> = ({
  onCreateRouteClick,
}) => (
  <NoRoutesContainer>
    <NoRoutesTypography variant="body1">
      {t('routesPage.noRoutes')}
    </NoRoutesTypography>
    <ButtonWrapper>
      <Button
        label={t('routesPage.createRoute')}
        variant="lined"
        onClick={onCreateRouteClick}
      />
    </ButtonWrapper>
  </NoRoutesContainer>
);

export default NoRoutesMessage;
