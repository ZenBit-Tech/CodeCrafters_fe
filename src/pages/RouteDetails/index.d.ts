import { FC } from 'react';
import { Coordinates } from './useViewPin';
interface RouteDetailsContextInterface {
    pinCoordinates: Coordinates | null;
    getPinCoordinates: (address: string) => Promise<void>;
    handleDelete: (orderId: number) => Promise<void>;
}
export declare const useRouteDetails: () => RouteDetailsContextInterface;
declare const RouteDetailsPage: FC;
export default RouteDetailsPage;
