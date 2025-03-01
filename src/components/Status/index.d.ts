import React from 'react';
import { StatusEnum } from '@/constants/status';
interface StatusProps {
    status: StatusEnum;
}
declare const Status: React.FC<StatusProps>;
export default Status;
