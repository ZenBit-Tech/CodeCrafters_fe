import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import { Box } from '@mui/material';
import RouteDetails from './components/RouteDetails';

const RouteManagementPage = () => {
  return (
    <Box>
      <CreateRouteProgressBar />
      <RouteDetails
        driver_full_name={'John Doe'}
        time_range={'19:00 - 20:00'}
        distance={900}
        route_id={1}
        orders={[
          { time_range: '19:20 - 19:30', city: 'Berlin' },
          { time_range: '19:20 - 19:30', city: 'Berlin' },
          { time_range: '19:20 - 19:30', city: 'Berlin' },
          { time_range: '19:20 - 19:30', city: 'Berlin' },
        ]}
      />
      <CreateRouteButtons />
    </Box>
  );
};

export default RouteManagementPage;
