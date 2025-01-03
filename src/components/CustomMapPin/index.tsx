import L from 'leaflet';
import markerIconUrl from '@/assets/icons/map-pin.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

export const customIcon = L.icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});
