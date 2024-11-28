import { FC } from 'react';
import { Box } from '@mui/material';

import Map from './components/Map';
import RouteInformBlock from './components/RouteInform';
import RouteDetailsControlBtns from './components/RouteDetailsControlBtns';
import { routeDetailsPageStyles } from './styles';

const RouteDetailsPage: FC = () => {
  return (
    <>
      <Box sx={routeDetailsPageStyles}>
        <RouteInformBlock />
        <Map />
      </Box>
      <RouteDetailsControlBtns />
    </>
  );
};

export default RouteDetailsPage;
