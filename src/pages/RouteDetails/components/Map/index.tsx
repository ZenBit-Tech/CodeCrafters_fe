import { FC } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useRouteDetails } from '@/pages/RouteDetails';
import RoutingComponent from './RoutingComponent';
import './styles.css';
import { MapContainerStyles } from './styles';

const Map: FC<{ locations: string[] }> = ({ locations }) => {
  const { pinCoordinates } = useRouteDetails();

  return (
    <MapContainer
      center={[50.4501, 30.5234]}
      zoom={6}
      style={MapContainerStyles}
    >
      <TileLayer
        url={import.meta.env.VITE_BASE_TILE_LAYER}
        attribution={`&copy; <a href="${import.meta.env.VITE_BASE_OPEN_STREET_API}/copyright">OpenStreetMap</a> contributors`}
      />
      <RoutingComponent locations={locations} />
      {pinCoordinates && <Marker position={pinCoordinates}></Marker>}
    </MapContainer>
  );
};

export default Map;
