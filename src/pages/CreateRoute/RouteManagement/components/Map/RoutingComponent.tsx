import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { toast } from 'react-toastify';

import { store } from '@/store/store';
import { addDistance } from '@/store/slices/ordersToDriversSlice';
import { START_ROUTE_POINT } from '@/constants/constants';
import { setisVisible } from '@/store/slices/loaderSlice';

interface RoutingComponentProps {
  locations: string[];
  driverId: number;
}

const RoutingComponent: React.FC<RoutingComponentProps> = ({
  driverId,
  locations,
}) => {
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
          createMarker: () => null,
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
        } as {
          waypoints: L.LatLng[];
          createMarker: () => null;
          routeWhileDragging: boolean;
          lineOptions: {
            styles: {
              color: string;
              weight: number;
            }[];
            extendToWaypoints: boolean;
            missingRouteTolerance: number;
          };
          show: boolean;
        }).addTo(map);

        routingControl.on('routesfound', (e) => {
          const routes = e.routes;
          const distance = routes[0].summary.totalDistance;

          store.dispatch(
            addDistance({ driverId, distance: Math.ceil(distance / 1000) })
          );
        });
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
  }, [locations, driverId, map]);

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

  const generateRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  };

  return null;
};

export default RoutingComponent;
