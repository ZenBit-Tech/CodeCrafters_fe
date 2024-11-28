import { FC } from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';

import DriverBlock from './components/DriverBlock';
import OrderDetails from './components/OrderDetails';
import { driverTitleStyles, routeDateStyles, routeIdStyles } from './styles';

const RouteInformBlock: FC = () => {
  return (
    <Box>
      <Typography sx={routeDateStyles}>9 August, Tuesday</Typography>
      <Typography sx={routeIdStyles}>#000000</Typography>
      <Typography sx={driverTitleStyles}>{t('Driver')}</Typography>
      <DriverBlock />
      <OrderDetails />
    </Box>
  );
};

export default RouteInformBlock;
