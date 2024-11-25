import React from 'react';
import { useTranslation } from 'react-i18next';

import { Checkbox, Typography } from '@mui/material';
import { FilterOptions, Header } from '@/pages/Routes/styles';

const FilterHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Header>
      <Typography variant="body2" color="textSecondary">
        {t('routesPage.filter')}
      </Typography>
      <FilterOptions>
        <Checkbox />
        <Typography variant="subtitle1">
          {t('routesPage.selectDriver')}
        </Typography>
        <Checkbox />
        <Typography variant="subtitle1">
          {t('routesPage.selectStops')}
        </Typography>
        <Checkbox />
        <Typography variant="subtitle1">
          {t('routesPage.selectStatus')}
        </Typography>
      </FilterOptions>
    </Header>
  );
};

export default FilterHeader;
