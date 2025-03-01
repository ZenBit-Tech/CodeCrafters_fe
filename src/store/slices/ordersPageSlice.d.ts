import { Order } from '@/interfaces/interfaces';
export interface OrderPageState {
    params: {
        sortBy: {
            type: string;
            value: 'ASC' | 'DESC';
            encoded: string;
        };
        search: string;
        filterBy: string;
        page: number;
    };
    viewOrdersData: {
        orders: Order[];
        pagesCount: number;
        page: number;
    };
}
export declare const setViewOrdersData: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    orders: [];
    pagesCount: number;
    page: number;
}, "orderPageSlice/setViewOrdersData">, setParamsFilter: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "orderPageSlice/setParamsFilter">, setParamsPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "orderPageSlice/setParamsPage">, setParamsSortBy: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    type: string;
    value: "ASC" | "DESC";
    encoded: string;
}, "orderPageSlice/setParamsSortBy">, setSearchBy: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "orderPageSlice/setSearchBy">;
declare const _default: import("redux").Reducer<OrderPageState>;
export default _default;
