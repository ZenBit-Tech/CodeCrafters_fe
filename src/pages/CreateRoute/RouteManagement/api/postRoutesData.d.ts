import { NavigateFunction } from 'react-router-dom';
import { StatusEnum } from '@/constants/status';
import { Order } from '@/interfaces/interfaces';
interface Route {
    submission_date: Date;
    arrival_date: Date;
    distance: number | undefined;
    status: StatusEnum;
    user_id: {
        id: number;
    };
    company_id: {
        id: number;
    };
    orders: Order[];
}
export declare const postRoutesData: (createRoutesDto: Route[], navigate: NavigateFunction, nextPath: string) => Promise<void>;
export {};
