import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { toast } from 'react-toastify';

import { store } from '@/store/store';
import { START_ROUTE_POINT } from '@/constants/constants';
import { setisVisible } from '@/store/slices/loaderSlice';
import { generateRandomColor } from '@/utils/generateRandomColor';

interface RoutingComponentProps {
  locations: string[];
}

const RoutingComponent: React.FC<RoutingComponentProps> = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    let routingControl: L.Routing.Control;

    const setupRoute = async (): Promise<void> => {
      try {
        store.dispatch(setisVisible(true));
        const coordinates = await Promise.all(
          [START_ROUTE_POINT, ...locations].map(geocode)
        );

        routingControl = L.Routing.control({
          waypoints: coordinates.map((coords) =>
            L.latLng(coords.lat, coords.lon)
          ),
          routeWhileDragging: true,
          lineOptions: {
            styles: [
              {
                color: generateRandomColor(),
                weight: 4,
              },
            ],
            extendToWaypoints: true,
            missingRouteTolerance: 10,
          },
          show: false,
        }).addTo(map);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error occurred';

        toast(`routeManagement.failedCalculate: ${errorMessage}`, {
          type: 'error',
        });
      } finally {
        store.dispatch(setisVisible(false));
      }
    };

    setupRoute();

    return (): void => {
      if (routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [map]);

  const geocode = async (
    address: string
  ): Promise<{ lat: number; lon: number }> => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_OPEN_STREET_API}/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    } else {
      throw new Error(`Address not found: ${address}`);
    }
  };

  return null;
};

export default RoutingComponent;
