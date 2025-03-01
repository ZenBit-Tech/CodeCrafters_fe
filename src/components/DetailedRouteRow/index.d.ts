import React from 'react';
import { StatusEnum } from '@/constants/status';
interface DetailedRouteRowProps {
    city: string;
    time: string;
    status: StatusEnum;
}
declare const DetailedRouteRow: React.FC<DetailedRouteRowProps>;
export default DetailedRouteRow;
