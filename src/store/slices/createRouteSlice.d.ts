export interface CreateRouteInterface {
    routeDate: Date;
    checkedOrders: number[];
    drivers: number[];
}
export declare const setRouteDate: import("@reduxjs/toolkit").ActionCreatorWithPayload<Date, "createRouteSettings/setRouteDate">, addNewDriver: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "createRouteSettings/addNewDriver">, addNewOrder: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "createRouteSettings/addNewOrder">, removeDriver: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "createRouteSettings/removeDriver">, removeOrder: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "createRouteSettings/removeOrder">, clearCheckedOrders: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"createRouteSettings/clearCheckedOrders">, addMultipleOrders: import("@reduxjs/toolkit").ActionCreatorWithPayload<number[], "createRouteSettings/addMultipleOrders">, resetCreateRouteSettings: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"createRouteSettings/resetCreateRouteSettings">;
declare const _default: import("redux").Reducer<CreateRouteInterface>;
export default _default;
