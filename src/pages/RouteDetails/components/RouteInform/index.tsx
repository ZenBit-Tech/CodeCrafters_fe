import { FC } from 'react';
import { t } from 'i18next';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { DAY_MONTH_WEEKDAY, FULL_TIME } from '@/constants/dateFormats';
import { RouteInform } from '@/interfaces/interfaces';
import { createTimeRange } from '@/utils/createTimeRange';
import { createIdString } from '@/utils/createIdString';
import DriverBlock from './components/DriverBlock';
import OrderDetails from './components/OrderDetails';
import { driverTitleStyles, routeDateStyles, routeIdStyles } from './styles';

const RouteInformBlock: FC<{
  routeDetails: RouteInform;
}> = ({ routeDetails }) => {
  return (
    <Box>
      <Typography sx={routeDateStyles}>
        {dayjs(routeDetails?.submission_date).format(DAY_MONTH_WEEKDAY)}
      </Typography>
      <Typography sx={routeIdStyles}>
        {createIdString(`${routeDetails.id}`)}
      </Typography>
      <Typography sx={driverTitleStyles}>{t('Driver')}</Typography>
      <DriverBlock
        fullName={routeDetails.driver.full_name}
        collectionTime={createTimeRange(
          routeDetails.arrival_date,
          routeDetails.submission_date
        )}
        stops={routeDetails.orders.length}
        distance={routeDetails.distance}
      />
      {routeDetails.orders.map((order) => (
        <OrderDetails
          key={order.id}
          id={order.id}
          city={
            order.collection_address.split(',')[
              order.collection_address.split(',').length - 2
            ]
          }
          startTime={dayjs(order.collection_time_start).format(FULL_TIME)}
          status={order.status}
        />
      ))}
    </Box>
  );
};

export default RouteInformBlock;
