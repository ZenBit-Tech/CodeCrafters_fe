import { Order } from '@/interfaces/interfaces';
interface UseOrderPaginationHook {
    viewOrdersData: {
        orders: Order[];
        pagesCount: number;
        page: number;
    };
    currentPage: number;
    totalPages: number;
    fetchOrders: (page?: number) => void;
}
export declare const useOrdersPagination: () => UseOrderPaginationHook;
export {};
