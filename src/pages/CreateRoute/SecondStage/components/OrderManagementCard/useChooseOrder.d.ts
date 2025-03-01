import { ChangeEvent } from 'react';
interface UseChooseOrderInterface {
    chooseOrder: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
    checkedOrders: number[];
    selectAllOrders: (orderIds: number[]) => void;
    deselectAllOrders: () => void;
}
export declare const useChooseOrder: () => UseChooseOrderInterface;
export {};
