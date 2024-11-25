import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { COLORS } from '@/constants/colors';

interface RoutingComponentProps {
  locations: string[];
}

const RoutingComponent: React.FC<RoutingComponentProps> = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    handleCalculateRoute();
  }, [locations]);

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
    } catch (error) {
      console.error('Failed to calculate route:', error);
    }
  };

  return null;
};

export default RoutingComponent;
