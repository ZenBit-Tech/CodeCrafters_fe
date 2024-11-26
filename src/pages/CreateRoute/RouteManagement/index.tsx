import { FC } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import Map from './components/Map';
import InformBlock from './components/InformBlock';
import { mapBlockStyles } from './styles';
import { useCreateRoutes } from './useCreateRoutes';

const locations = [
  'Kyiv, Khreshchatyk Street',
  'Lviv, Svobody Avenue',
  'Odessa, Deribasivska Street',
  'Dnipro, Yavornytskoho Avenue',
];

const RouteManagementPage: FC = () => {
  const { ordersToDrivers } = useCreateRoutes();
  return (
    <Box>
      <CreateRouteProgressBar />
      <Box sx={mapBlockStyles}>
        <InformBlock
          title={'9 August, Tuesday'}
          // TODO replace with real data
          routes={ordersToDrivers}
        />
        <Map locations={locations} />
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
