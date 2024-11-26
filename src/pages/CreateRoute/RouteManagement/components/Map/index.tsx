import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import RoutingComponent from './RoutingComponent';
import './styles.css';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

interface MapProps {
  locations: string[];
}

const Map: React.FC<MapProps> = ({ locations }) => {
  // const { value: routes } = useSelector(
  //   (store: RootState) => store.ordersToDriversSlice
  // );
  // const coords = routes[0].orders.map(
  //   (order) =>
  //     order.collection_address.split(',')[
  //       order.collection_address.split(',').length - 2
  //     ]
  // );
  return (
    <MapContainer
      center={[50.4501, 30.5234]}
      zoom={6}
      style={{ height: '810px', width: '728px' }}
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
