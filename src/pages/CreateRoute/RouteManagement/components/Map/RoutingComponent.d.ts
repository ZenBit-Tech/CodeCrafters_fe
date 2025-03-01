import React from 'react';
import 'leaflet-routing-machine';
interface RoutingComponentProps {
    locations: string[];
    driverId: number;
}
declare const RoutingComponent: React.FC<RoutingComponentProps>;
export default RoutingComponent;
