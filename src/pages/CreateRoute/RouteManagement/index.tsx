import { FC } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import Map from './components/Map';
import InformBlock from './components/InformBlock';
import { mapBlockStyles } from './styles';
import { useCreateRoutes } from './useCreateRoutes';

const RouteManagementPage: FC = () => {
  const { ordersToDrivers } = useCreateRoutes();
  return (
    <Box>
      <CreateRouteProgressBar />
      <Box sx={mapBlockStyles}>
        <InformBlock title={'9 August, Tuesday'} routes={ordersToDrivers} />
        <Map />
      </Box>
      <CreateRouteButtons
        previousPath={'/drivers-management'}
        nextPath={'/route-management'}
        handleValidate={() => {}}
      />
    </Box>
  );
};

export default RouteManagementPage;
