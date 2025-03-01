import { ORDERS_SORTS } from '@/constants/ordersSorts';
interface SortingParamsType {
    sortBy: {
        type: string;
        value: 'ASC' | 'DESC';
        encoded: string;
    };
    filterBy: string;
}
interface UseSortOrdersReturn {
    params: SortingParamsType;
    toggleSortOrder: (sortType: keyof typeof ORDERS_SORTS) => void;
    updateFilter: (filterValue: string) => void;
}
export declare const useSortOrders: () => UseSortOrdersReturn;
export {};
