import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { t } from 'i18next';

import { store } from '@/store/store';
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
            extendToWaypoints: false,
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
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast(error.message, { type: 'error' });
        } else if (error instanceof AxiosError) {
          toast(error.message, { type: 'error' });
        } else {
          toast(t('routeDetails.failedToCalculate'), { type: 'error' });
        }
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
  }, [map, locations]);

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
      toast('routeDetails.addressNotFound', { type: 'error' });
      throw new Error();
    }
  };

  return null;
};

export default RoutingComponent;
