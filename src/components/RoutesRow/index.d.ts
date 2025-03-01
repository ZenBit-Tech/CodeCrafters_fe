import React from 'react';
import { StatusEnum } from '@/constants/status';
interface RoutesRowProps {
    routeId: number;
    date: string;
    driverFirstName: string;
    driverLastName: string;
    driverPhone: string | null;
    stopsCount: number;
    route_time: string;
    distance: number;
    status: StatusEnum;
    failedOrdersCount: number;
}
declare const RoutesRow: React.FC<RoutesRowProps>;
export default RoutesRow;
