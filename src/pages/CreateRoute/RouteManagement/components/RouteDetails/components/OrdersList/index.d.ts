import { FC } from 'react';
declare const OrdersList: FC<{
    routeId: number;
    orders: {
        id: number;
        time_range: string;
        city: string;
    }[];
}>;
export default OrdersList;
