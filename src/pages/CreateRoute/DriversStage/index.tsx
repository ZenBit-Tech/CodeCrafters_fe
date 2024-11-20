import { Box } from '@mui/material';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';

const DriversStagePage = () => {
  return (
    <Box>
      <CreateRouteProgressBar />
      <CreateRouteButtons />
    </Box>
  );
};

export default DriversStagePage;
