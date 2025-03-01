import React from 'react';
export interface DriverInfoProps {
    firstName: string;
    lastName: string;
    workingHours: string;
    stopsCount: number;
    distance: number;
    routeId: string;
}
declare const DriverInfoCard: React.FC<DriverInfoProps>;
export default DriverInfoCard;
