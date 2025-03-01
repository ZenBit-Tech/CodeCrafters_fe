import { FC } from 'react';
import 'leaflet/dist/leaflet.css';
import './styles.css';
declare const Map: FC<{
    locations: string[];
}>;
export default Map;
