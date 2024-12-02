import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar, {
  CreateRouteStages,
} from '@/pages/components/CreateRouteProgressBar';
import { setOrdersToDrivers } from '@/store/slices/ordersToDriversSlice';
import { RootState, store } from '@/store/store';
import { MONTHS } from '@/constants/moths';

import Map from './components/Map';
import InformBlock from './components/InformBlock';
import { mapBlockStyles } from './styles';
import { useCreateRoutes } from './useCreateRoutes';

const RouteManagementPage: FC = () => {
  const { routeDate } = useSelector(
    (store: RootState) => store.createRoutSettings
  );
  const { value: choseRoute } = useSelector(
    (store: RootState) => store.choseRoute
  );
  const { ordersToDrivers, onCreateRoute } = useCreateRoutes();

  useEffect(() => {
    store.dispatch(setOrdersToDrivers({ value: [], notAssignedOrders: [] }));
  }, []);

  return (
    <Box>
      <CreateRouteProgressBar choseRoute={CreateRouteStages.FOUR} />
      <Box sx={mapBlockStyles}>
        <InformBlock
          title={t(`${routeDate.getDate()} ${MONTHS[routeDate.getMonth()]} `)}
          routes={ordersToDrivers}
        />
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
