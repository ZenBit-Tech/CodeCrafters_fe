import { StatusEnum } from '@/constants/status';

export enum LuggageTypes {
  SMALL = 'small',
  MIDDLE = 'middle',
  BIG = 'big',
}

export interface Luggage {
  id: number;
  luggage_weight: number;
  luggage_type: LuggageTypes;
}

export const OrderStatuses: Record<string, StatusEnum> = {
  Completed: StatusEnum.COMPLETED,
  Failed: StatusEnum.FAILED,
  'Not arrived': StatusEnum.NOT_ARRIVED,
  'At Risk': StatusEnum.AT_RISK,
  Upcoming: StatusEnum.UPCOMING,
};

export interface Customer {
  full_name: string;
  phone_number: string;
  email: string;
}
