import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

interface RoutingComponentProps {
  locations: string[];
}

const RoutingComponent: React.FC<RoutingComponentProps> = ({ locations }) => {
  const map = useMap();

  const geocode = async (address: string) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
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
          styles: [{ color: '#6FA1EC', weight: 4 }],
        },
        show: false,
      }).addTo(map);
    } catch (error) {
      console.error('Failed to calculate route:', error);
    }
  };

  useEffect(() => {
    handleCalculateRoute();
  }, [locations]);

  return null;
};

export default RoutingComponent;
