import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import RoutingComponent from './RoutingComponent';
import './styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Map: FC = () => {
  const routes = useSelector(
    (store: RootState) => store.ordersToDriversSlice.value
  );

  const updatedRouteCoords = routes.map((routeData) => {
    return {
      id: routeData.driver.id,
      locations: routeData.orders.map(
        (order) =>
          order.collection_address.split(',')[
            order.collection_address.split(',').length - 2
          ]
      ),
    };
  });

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
      {updatedRouteCoords.map((routeData) => (
        <RoutingComponent
          key={routeData.id}
          locations={routeData.locations}
          driverId={routeData.id}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
