import { ChangeEvent, FC } from 'react';
import { Customer } from '@/interfaces/interfaces.ts';
declare const DriverCard: FC<{
    customer: Customer;
    isDriverChosen: boolean;
    toggleDriver: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
}>;
export default DriverCard;
