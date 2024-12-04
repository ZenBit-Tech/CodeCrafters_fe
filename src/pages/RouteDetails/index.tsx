import { FC, createContext, useContext } from 'react';
import { t } from 'i18next';
import { Box } from '@mui/material';

import Map from './components/Map';
import RouteInformBlock from './components/RouteInform';
import RouteDetailsControlBtns from './components/RouteDetailsControlBtns';
import { routeDetailsPageStyles } from './styles';
import { useGetRoute } from './useGetRoute';
import { Coordinates, useViewPin } from './useViewPin';

interface RouteDetailsContextInterface {
  pinCoordinates: Coordinates | null;
  getPinCoordinates: (address: string) => Promise<void>;
}

const RouteDetailsContext = createContext<
  RouteDetailsContextInterface | undefined
>(undefined);

export const useRouteDetails = (): RouteDetailsContextInterface => {
  const context = useContext(RouteDetailsContext);
  if (!context) {
    throw new Error(t('routeDetails.contextIsUndefined'));
  }
  return context;
};

const RouteDetailsPage: FC = () => {
  const { routeDetails, locations } = useGetRoute();
  const { getPinCoordinates, pinCoordinates } = useViewPin();

  return (
    <RouteDetailsContext.Provider value={{ getPinCoordinates, pinCoordinates }}>
      <Box sx={routeDetailsPageStyles}>
        {routeDetails ? <RouteInformBlock routeDetails={routeDetails} /> : ''}
        <Map locations={locations} />
      </Box>
      <RouteDetailsControlBtns />
    </RouteDetailsContext.Provider>
  );
};

export default RouteDetailsPage;
