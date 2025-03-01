import { LatLngExpression } from 'leaflet';
interface UseViewMapHook {
    coordinates: LatLngExpression | null;
    mappedRoutes: {
        id: number;
        locations: string[];
    }[];
}
export declare const useViewMap: () => UseViewMapHook;
export {};
