import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import RoutingComponent from './RoutingComponent';
import './styles.css';

interface MapProps {
  locations: string[];
}

const Map: React.FC<MapProps> = ({ locations }) => {
  return (
    <MapContainer
      center={[50.4501, 30.5234]}
      zoom={6}
      style={{ height: '810px', width: '728px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <RoutingComponent locations={locations} />
    </MapContainer>
  );
};

export default Map;
