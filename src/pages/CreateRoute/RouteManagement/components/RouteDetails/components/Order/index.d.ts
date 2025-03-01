import { FC } from 'react';
declare const OrderRow: FC<{
    order: {
        id: number;
        time_range: string;
        city: string;
    };
    parentId: number;
}>;
export default OrderRow;
