import { Typography } from '@mui/material';
import { t } from 'i18next';
import { emptyOrdersPageStyles } from './styles';

const EmptyOrdersComponent = () => {
  return (
    <Typography sx={emptyOrdersPageStyles}>
      {t('orderManagement.thereIsNoOrders')}
    </Typography>
  );
};

export default EmptyOrdersComponent;
