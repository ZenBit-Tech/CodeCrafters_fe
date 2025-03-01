import { Driver, Order } from '@/interfaces/interfaces';
export interface OrderToDriversState {
    value: {
        driver: Driver;
        orders: Order[];
    }[];
    notAssignedOrders: Order[];
    distances: {
        driverId: number;
        distance: number;
    }[];
}
export declare const setOrdersToDrivers: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: {
        driver: Driver;
        orders: Order[];
        notAssignedOrders: Order[];
    }[];
    notAssignedOrders: Order[];
}, "ordersToDrivers/setOrdersToDrivers">, addDistance: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    driverId: number;
    distance: number;
}, "ordersToDrivers/addDistance">, clearDistances: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"ordersToDrivers/clearDistances">, changeRoutes: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    currentRouteId: number;
    draggedOrder: Order;
    newRouteId: number;
}, "ordersToDrivers/changeRoutes">, removeNotAssignedOrder: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "ordersToDrivers/removeNotAssignedOrder">;
declare const _default: import("redux").Reducer<OrderToDriversState>;
export default _default;
