import { Box } from '@mui/material';
import Map from './components/Map';
import RouteInformBlock from './components/RouteInform';
import { COLORS } from '@/constants/colors';
import RouteDetailsControlBtns from './components/RouteDetailsControlBtns';

const RouteDetailsPage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: COLORS.white,
          padding: '0px 0px 0px 15px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <RouteInformBlock />
        <Map />
      </Box>
      <RouteDetailsControlBtns />
    </>
  );
};

export default RouteDetailsPage;
