import { AxiosResponse } from 'axios';
import { RouteInform } from '@/interfaces/interfaces';
export declare const getRouteDetails: (routeId: number) => Promise<AxiosResponse<RouteInform>>;
