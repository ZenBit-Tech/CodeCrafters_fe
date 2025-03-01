import { Customer } from '@/interfaces/interfaces';
export interface DriversSliceInterface {
    drivers: Customer[];
}
export declare const setDrivers: import("@reduxjs/toolkit").ActionCreatorWithPayload<Customer[], "driversSlice/setDrivers">;
declare const _default: import("redux").Reducer<DriversSliceInterface>;
export default _default;
