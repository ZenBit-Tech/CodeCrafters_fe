import { Order } from '@/interfaces/interfaces';
interface UseOrdersHook {
    viewOrdersData: {
        orders: Order[];
        pagesCount: number;
        page: number;
    };
    currentPage: number;
    totalPages: number;
    fetchOrders: (page?: number) => void;
    allOrderIds: number[];
}
export declare const useOrdersPagination: () => UseOrdersHook;
export {};
