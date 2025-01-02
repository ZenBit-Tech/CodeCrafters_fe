import { FC } from 'react';
import { Typography } from '@mui/material';
import { t } from 'i18next';

import { emptyOrdersPageStyles } from './styles';

interface EmptyOrdersProps {
  width: number;
}

const EmptyOrdersComponent: FC<EmptyOrdersProps> = ({ width }) => {
  return (
    <Typography
      sx={{ ...emptyOrdersPageStyles, width: `${width}px !important` }}
    >
      {t('orderManagement.thereIsNoOrders')}
    </Typography>
  );
};

export default EmptyOrdersComponent;
