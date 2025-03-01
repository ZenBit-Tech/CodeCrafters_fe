export interface SearchDriversInterface {
    value: 'ASC' | 'DESC';
    search: string;
}
export declare const toggleSortDriversByName: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"sortDriversSlice/toggleSortDriversByName">, setDriverSearchString: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "sortDriversSlice/setDriverSearchString">;
declare const _default: import("redux").Reducer<SearchDriversInterface>;
export default _default;
