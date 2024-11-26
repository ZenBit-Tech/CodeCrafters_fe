import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { COLORS } from '@/constants/colors';
import { store } from '@/store/store';
import { addDistance } from '@/store/slices/ordersToDriversSlice';

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
    handleCalculateRoute();
  }, []);

  const geocode = async (address: string) => {
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
      throw new Error('Address not found');
    }
  };

  const handleCalculateRoute = async () => {
    try {
      const coordinates = await Promise.all(
        locations.map((location) => geocode(location))
      );

      const routingControl = L.Routing.control({
        waypoints: coordinates.map((coords) =>
          L.latLng(coords.lat, coords.lon)
        ),
        routeWhileDragging: true,
        createMarker: () => null,
        lineOptions: {
          styles: [{ color: `${COLORS.green}`, weight: 4 }],
        },
        show: false,
      }).addTo(map);

      L.Routing.control({
        waypoints: coordinates.map((coords) =>
          L.latLng(coords.lat, coords.lon)
        ),
        routeWhileDragging: true,
        createMarker: () => null,
        lineOptions: {
          styles: [{ color: `${COLORS.green}`, weight: 4 }],
        },
        show: false,
      }).addTo(map);

      routingControl.on('routesfound', (e) => {
        const routes = e.routes;
        const distance = routes[0].summary.totalDistance;

        store.dispatch(
          addDistance({ driverId, distance: Math.ceil(distance / 1000) })
        );
        // console.log(`Total distance: ${distance / 1000} km`);
      });
    } catch (error) {
      console.error('Failed to calculate route:', error);
    }
  };

  return null;
};

export default RoutingComponent;
