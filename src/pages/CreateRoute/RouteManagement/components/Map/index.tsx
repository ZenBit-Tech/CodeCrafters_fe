import { FC, useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { useSelector } from 'react-redux';

import { RootState, store } from '@/store/store';
import { clearDistances } from '@/store/slices/ordersToDriversSlice';

import RoutingComponent from './RoutingComponent';
import './styles.css';

const Map: FC<{ choseRoute: number | null }> = ({ choseRoute }) => {
  const { value: routes } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

  const [mappedRoutes, setMappedRoutes] = useState<
    { id: number; locations: string[] }[]
  >([]);

  useEffect(() => {
    store.dispatch(clearDistances());
    const updatedRoutes = routes.map((routeData) => ({
      id: routeData.driver.id,
      locations: routeData.orders.map(
        (order) =>
          order.collection_address.split(',')[
            order.collection_address.split(',').length - 2
          ]
      ),
    }));
    setMappedRoutes(updatedRoutes);
  }, [routes]);

  const { coordinates } = useSelector((store: RootState) => store.chosePin);

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
