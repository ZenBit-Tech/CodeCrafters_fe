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
import { RootState, store } from '@/store/store';
import { useSelector } from 'react-redux';

const RouteManagementPage: FC = () => {
  const { ordersToDrivers, onCreateRoute } = useCreateRoutes();
  const { value: choseRoute } = useSelector(
    (store: RootState) => store.choseRoute
  );

  useEffect(() => {
    store.dispatch(setOrdersToDrivers([]));
  }, []);

  return (
    <Box>
      <CreateRouteProgressBar choseRoute={CreateRouteStages.FOUR} />
      <Box sx={mapBlockStyles}>
        <InformBlock title={'9 August, Tuesday'} routes={ordersToDrivers} />
        <Map choseRoute={choseRoute} />
      </Box>
      <CreateRouteButtons
        previousPath={'/drivers-management'}
        nextPath={'/orders'}
        handleValidate={onCreateRoute}
        nextBtnText="Send to drivers"
      />
    </Box>
  );
};

export default RouteManagementPage;
