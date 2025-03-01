interface UseChooseRouteHook {
    chooseRoute: (routeId: number) => void;
    choseRouteId: number | null;
}
export declare const useChooseRoute: () => UseChooseRouteHook;
export {};
