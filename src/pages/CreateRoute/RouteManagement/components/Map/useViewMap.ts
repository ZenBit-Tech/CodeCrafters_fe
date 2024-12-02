import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { clearDistances } from '@/store/slices/ordersToDriversSlice';
import { RootState, store } from '@/store/store';
import { LatLngExpression } from 'leaflet';

interface UseViewMapHook {
  coordinates: LatLngExpression | null;
  mappedRoutes: { id: number; locations: string[] }[];
}

export const useViewMap = (): UseViewMapHook => {
  const [mappedRoutes, setMappedRoutes] = useState<
    { id: number; locations: string[] }[]
  >([]);
  const { coordinates } = useSelector((store: RootState) => store.chosePin);
  const { value: routes } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

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

  return { coordinates, mappedRoutes };
};
