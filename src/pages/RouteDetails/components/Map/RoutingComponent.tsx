import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

import { store } from '@/store/store';
import { setisVisible } from '@/store/slices/loaderSlice';

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
        const coordinates = await Promise.all([...locations].map(geocode));

        routingControl = L.Routing.control({
          waypoints: coordinates.map((coords) =>
            L.latLng(coords.lat, coords.lon)
          ),
          routeWhileDragging: true,
          createMarker: () => null,
          lineOptions: {
            styles: [
              {
                color: generateRandomColor(),
                weight: 4,
              },
            ],
          },
          show: false,
        }).addTo(map);
      } catch (error) {
        console.error('Failed to calculate route:', error);
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
  }, [locations, map]);

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
