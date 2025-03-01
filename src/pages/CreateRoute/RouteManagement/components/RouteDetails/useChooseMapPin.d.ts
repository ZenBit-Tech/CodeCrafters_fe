interface UseChooseMapPinHook {
    choosePin: (city: string) => void;
    choseCity: string | null;
}
export declare const useChooseMapPin: () => UseChooseMapPinHook;
export {};
