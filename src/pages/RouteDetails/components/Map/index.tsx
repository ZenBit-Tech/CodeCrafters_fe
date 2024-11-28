import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import RoutingComponent from './RoutingComponent';
import './styles.css';
const Map: FC = () => {
  const locations = ['New York', 'Washington'];

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
      <RoutingComponent locations={locations} />
    </MapContainer>
  );
};

export default Map;
