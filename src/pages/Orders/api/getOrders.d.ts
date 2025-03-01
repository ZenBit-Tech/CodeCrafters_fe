interface GetOrdersParams {
    sortBy: string;
    filter: string;
    search?: string;
    page: number;
    companyId: number;
    isNew: boolean;
    routeDate?: Date;
}
export declare const getOrders: ({ sortBy, filter, search, page, companyId, isNew, routeDate, }: GetOrdersParams) => Promise<void>;
export declare const getNewOrdersCount: (companyId: number) => Promise<number>;
export {};
