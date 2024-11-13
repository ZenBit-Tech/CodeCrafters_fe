import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

import {
  containerStyles,
  headingStyles,
  messageStyles,
} from '@/pages/NotFound/styles';
import Button from '@/components/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRedirect = (): void => {
    navigate('/');
  };

  return (
    <Container sx={containerStyles}>
      <Typography variant="h1" sx={headingStyles}>
        {t('notFound.header')}
      </Typography>
      <Typography variant="subtitle1" sx={messageStyles}>
        {t('notFound.errorMessage')}
      </Typography>
      <Button
        variant="colored"
        onClick={handleRedirect}
        label={t('notFound.button')}
      />
    </Container>
  );
};

export default NotFoundPage;
