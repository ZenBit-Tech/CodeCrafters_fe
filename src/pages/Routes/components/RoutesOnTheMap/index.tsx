import { FC, ReactElement } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from '@mui/material';

import RoutingComponent from './RoutingComponent';
import { useRoutes } from './useRoutes';
import { mapBlockStyles, mapStyles } from './styles';

export const RoutesOnTheMap: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const { routesDetails } = useRoutes();

  return (
    <Box sx={mapBlockStyles}>
      {children}
      <MapContainer center={[50.4501, 30.5234]} zoom={6} style={mapStyles}>
        <TileLayer
          url={import.meta.env.VITE_BASE_TILE_LAYER}
          attribution={`&copy; <a href='${import.meta.env.VITE_BASE_OPEN_STREET_API}/copyright'>OpenStreetMap</a> contributors`}
        />
        {routesDetails.length > 0 &&
          routesDetails.map((routeData) => {
            return (
              <RoutingComponent
                key={Math.random() * 1000000}
                locations={routeData}
              />
            );
          })}
      </MapContainer>
    </Box>
  );
};
