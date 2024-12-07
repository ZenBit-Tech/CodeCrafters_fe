import React from 'react';
import { t } from 'i18next';
import { Typography } from '@mui/material';

const NoRoutesMessage: React.FC = () => (
  <Typography variant="body1" align="center" sx={{ padding: 4 }}>
    {t('No routes have been sent to drivers yet')}
  </Typography>
);

export default NoRoutesMessage;
