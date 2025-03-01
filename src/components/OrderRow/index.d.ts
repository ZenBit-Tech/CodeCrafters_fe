import React from 'react';
interface OrderRowProps {
    date: string;
    time: string;
    address: string;
    luggageSize: string[];
    driverFirstName: string;
    driverLastName: string;
    driverPhone: string;
}
declare const OrderRow: React.FC<OrderRowProps>;
export default OrderRow;
