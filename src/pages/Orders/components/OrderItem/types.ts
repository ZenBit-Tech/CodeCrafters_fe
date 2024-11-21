import { StatusEnum } from '@/constants/status';
import { Customer, Luggage } from '@/interfaces/interfaces';

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
