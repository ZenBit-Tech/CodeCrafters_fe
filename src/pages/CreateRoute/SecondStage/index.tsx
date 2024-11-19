import CreateRouteButtons from '@/pages/components/CreateRouteBtns';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import { Box } from '@mui/material';

const SecondStagePage = () => {
  return (
    <Box>
      <CreateRouteProgressBar />
      <CreateRouteButtons />
    </Box>
  );
};

export default SecondStagePage;
