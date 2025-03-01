import { RouteInform } from '@/interfaces/interfaces';
interface useRouteHook {
    routeDetails: RouteInform | null;
    locations: string[];
    handleDelete: (orderId: number) => Promise<void>;
}
export declare const useRoute: () => useRouteHook;
export {};
