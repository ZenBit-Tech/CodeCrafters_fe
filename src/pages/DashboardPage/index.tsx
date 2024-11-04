import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  return <Typography variant="h4">{t('pages.dashboard')}</Typography>;
};

export default DashboardPage;
