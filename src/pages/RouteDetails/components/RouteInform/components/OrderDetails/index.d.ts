import { FC } from 'react';
import { StatusEnum } from '@/constants/status';
interface OrderDetailsProps {
    id: number;
    city: string;
    startTime: string;
    status: StatusEnum;
    failedReason: string | null;
}
declare const OrderDetails: FC<OrderDetailsProps>;
export default OrderDetails;
