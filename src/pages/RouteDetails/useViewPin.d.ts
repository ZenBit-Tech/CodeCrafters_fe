export interface Coordinates {
    lat: number;
    lng: number;
}
interface useViewPinHook {
    pinCoordinates: Coordinates | null;
    getPinCoordinates: (address: string) => Promise<void>;
}
export declare const useViewPin: () => useViewPinHook;
export {};
