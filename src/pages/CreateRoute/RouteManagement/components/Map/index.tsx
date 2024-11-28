import { FC } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

import { store } from '@/store/store';

import RoutingComponent from './RoutingComponent';
import './styles.css';
import { useViewMap } from './useViewMap';

const Map: FC<{ choseRoute: number | null }> = ({ choseRoute }) => {
  const { coordinates, mappedRoutes } = useViewMap();

  return (
    <MapContainer
      center={[50.4501, 30.5234]}
      zoom={6}
      style={{ height: '810px', width: '728px', zIndex: 5 }}
    >
      <TileLayer
        url={import.meta.env.VITE_BASE_TILE_LAYER}
        attribution={`&copy; <a href="${import.meta.env.VITE_BASE_OPEN_STREET_API}/copyright">OpenStreetMap</a> contributors`}
      />
      {mappedRoutes.map((routeData) => {
        if (choseRoute === null) {
          return (
            <RoutingComponent
              key={routeData.id}
              locations={routeData.locations}
              driverId={routeData.id}
            />
          );
        } else {
          if (routeData.id === choseRoute) {
            return (
              <RoutingComponent
                key={routeData.id}
                locations={routeData.locations}
                driverId={routeData.id}
              />
            );
          }
          return null;
        }
      })}
      {coordinates !== null && (
        <Marker
          position={store.getState().chosePin.coordinates as LatLngExpression}
        ></Marker>
      )}
    </MapContainer>
  );
};

export default Map;
