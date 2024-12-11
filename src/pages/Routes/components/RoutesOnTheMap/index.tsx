import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import RoutingComponent from './RoutingComponent';
import { useRoutes } from './useRoutes';
import { mapBlockStyles } from './styles';

export const RoutesOnTheMap: FC = () => {
  const { routesDetails } = useRoutes();
  return (
    <MapContainer center={[50.4501, 30.5234]} zoom={6} style={mapBlockStyles}>
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
  );
};
