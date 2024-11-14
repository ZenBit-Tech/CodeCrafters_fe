import { StatusEnum } from '@/constants/status';

export enum LuggageTypes {
  SMALL = 'small',
  MIDDLE = 'middle',
  BIG = 'big',
}

interface Luggage {
  id: number;
  luggage_weight: number;
  luggage_type: LuggageTypes;
}

interface Customer {
  fullName: string;
  phoneNumber: string;
  email: string;
}

export interface OrderItemInterface {
  collectionDate: Date;
  collectionAddress: string;
  luggages: Luggage[];
  customer: Customer;
  status: StatusEnum;
  routeId: number | string | null;
}
