import { FC } from 'react';
export interface RouteDetailsInterface {
    driver_full_name: string;
    time_range: string;
    distance: number;
    route_id: number;
    orders: {
        id: number;
        time_range: string;
        city: string;
    }[];
}
export declare const RouteDetails: FC<RouteDetailsInterface>;
