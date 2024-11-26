import { FC, useEffect } from 'react';
import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar, {
  CreateRouteStages,
} from '@/pages/components/CreateRouteProgressBar';
import Map from './components/Map';
import InformBlock from './components/InformBlock';
import { mapBlockStyles } from './styles';
import { useCreateRoutes } from './useCreateRoutes';
import { setOrdersToDrivers } from '@/store/slices/ordersToDriversSlice';
import { store } from '@/store/store';

const RouteManagementPage: FC = () => {
  const { ordersToDrivers } = useCreateRoutes();

  useEffect(() => {
    store.dispatch(setOrdersToDrivers([]));
  }, []);

  return (
    <Box>
      <CreateRouteProgressBar choseRoute={CreateRouteStages.FOUR} />
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
