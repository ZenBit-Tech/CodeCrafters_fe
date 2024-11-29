import { FC } from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';

import DriverBlock from './components/DriverBlock';
import OrderDetails from './components/OrderDetails';
import { driverTitleStyles, routeDateStyles, routeIdStyles } from './styles';
import { RouteInform } from '@/interfaces/interfaces';
import { MONTHS } from '@/constants/moths';
import { DAYS } from '@/constants/days';

const RouteInformBlock: FC<{ routeDetails: RouteInform }> = ({
  routeDetails,
}) => {
  return (
    <Box>
      <Typography sx={routeDateStyles}>
        {/*// TODO date formatter utils */}
        {new Date(routeDetails?.submission_date).getDate()}{' '}
        {MONTHS[new Date(routeDetails?.submission_date).getMonth()]},{' '}
        {DAYS[new Date(routeDetails?.submission_date).getDay()]}
      </Typography>
      {/* // TODO id formatter */}
      <Typography sx={routeIdStyles}>#{routeDetails?.id}</Typography>
      <Typography sx={driverTitleStyles}>{t('Driver')}</Typography>
      {/* // TODO Diver props */}
      <DriverBlock />
      {/* // TODO Orders props */}
      <OrderDetails />
    </Box>
  );
};

export default RouteInformBlock;
