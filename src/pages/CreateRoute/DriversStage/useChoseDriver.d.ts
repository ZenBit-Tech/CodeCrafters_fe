import { ChangeEvent } from 'react';
interface UseChooseDriverInterface {
    chooseDriver: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
    choseDrivers: number[];
    goToRouteManagement: (nextPath: string) => void;
}
export declare const useChooseDriver: () => UseChooseDriverInterface;
export {};
