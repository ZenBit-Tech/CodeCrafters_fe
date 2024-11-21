import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import { Box } from '@mui/material';

const RouteManagementPage = () => {
  return (
    <Box>
      <CreateRouteProgressBar />
      <CreateRouteButtons />
    </Box>
  );
};

export default RouteManagementPage;
