import { Route } from '@/interfaces/Routes';
export interface RoutesState {
    routes: Route[];
    page: number;
    sortField: string;
    sortDirection: 'asc' | 'desc';
    statusFilter: string | null;
    rowsPerPage: number;
    startDate: string;
    endDate: string;
}
export declare const setRoutes: import("@reduxjs/toolkit").ActionCreatorWithPayload<Route[], "routes/setRoutes">, setPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "routes/setPage">, setSortField: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "routes/setSortField">, setSortDirection: import("@reduxjs/toolkit").ActionCreatorWithPayload<"desc" | "asc", "routes/setSortDirection">, setStatusFilter: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, "routes/setStatusFilter">, setStartDate: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "routes/setStartDate">, setEndDate: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "routes/setEndDate">;
declare const _default: import("redux").Reducer<RoutesState>;
export default _default;
