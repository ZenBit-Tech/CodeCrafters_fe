import { FC } from 'react';
import { Box } from '@mui/material';

import Map from './components/Map';
import RouteInformBlock from './components/RouteInform';
import RouteDetailsControlBtns from './components/RouteDetailsControlBtns';
import { routeDetailsPageStyles } from './styles';
import { useGetRoute } from './useGetRoute';

const RouteDetailsPage: FC = () => {
  const { routeDetails, locations } = useGetRoute();

  return (
    <>
      <Box sx={routeDetailsPageStyles}>
        {routeDetails ? (
          <RouteInformBlock routeDetails={routeDetails} />
        ) : (
          'Error'
        )}
        <Map locations={locations} />
      </Box>
      <RouteDetailsControlBtns />
    </>
  );
};

export default RouteDetailsPage;
