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
  'Customer Informed': StatusEnum.CUSTOMER_INFORMED,
  'Transporter Locked': StatusEnum.TRANSPORTER_LOCKED,
  'Identity Verified': StatusEnum.IDENTITY_VERIFIED,
  'Boarding pass verified': StatusEnum.BOARDING_PASS_VERIFIED,
  'Baggage confirmed': StatusEnum.BAGGAGE_CONFIRMED,
  'Customer confirmed': StatusEnum.CUSTOMER_CONFIRMED,
};

export interface Customer {
  id: number;
  full_name: string;
  phone_number: string;
  email: string;
}

export interface Order {
  id: number;
  collection_date: Date;
  collection_time_start: Date;
  collection_time_end: Date;
  collection_address: string;
  status: StatusEnum;
  route: null | {
    id: number;
  };
  customer: Customer;
  luggages: {
    id: number;
    luggage_weight: number;
    luggage_type: LuggageTypes;
  }[];
  createdAt: string;
  updatedAt: string;
  driverId?: number;
  addedAutomatically?: boolean;
}

export interface Driver {
  id: number;
  full_name: string;
  phone_number: string;
  email: string;
}

export interface RouteInform {
  id: number;
  submission_date: Date;
  arrival_date: Date;
  distance: number;
  status: StatusEnum;
  driver: {
    id: number;
    full_name: string;
    email: string;
    phone_number: string;
  };
  orders: {
    id: number;
    collection_date: Date;
    collection_time_start: Date;
    collection_time_end: Date;
    collection_address: string;
    failed_reason: string | null;
    status: StatusEnum;
  }[];
}
