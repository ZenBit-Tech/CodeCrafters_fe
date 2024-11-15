import { StatusEnum } from '@/constants/status';

export const OrderStatuses: Record<string, StatusEnum> = {
  Completed: StatusEnum.COMPLETED,
  Failed: StatusEnum.FAILED,
  'Not arrived': StatusEnum.NOT_ARRIVED,
  'At Risk': StatusEnum.AT_RISK,
  Upcoming: StatusEnum.UPCOMING,
};

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

export interface Customer {
  full_name: string;
  phone_number: string;
  email: string;
}

export interface OrderItemInterface {
  id: number;
  collectionDate: Date;
  collectionTimeStart: Date;
  collectionTimeEnd: Date;
  collectionAddress: string;
  luggages: Luggage[];
  customer: Customer;
  status: StatusEnum;
  routeId: { id: number } | null;
}
