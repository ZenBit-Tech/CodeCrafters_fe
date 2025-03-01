import { FC } from 'react';
interface Order {
    id: number;
    time_range: string;
    city: string;
}
export interface RouteInfo {
    driver_full_name: string;
    time_range: string;
    distance: number;
    id: number;
    orders: Order[];
}
interface InformBlockInterface {
    title: string;
    routes: RouteInfo[];
}
declare const InformBlock: FC<InformBlockInterface>;
export default InformBlock;
