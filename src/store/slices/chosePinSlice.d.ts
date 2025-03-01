import { LatLngExpression } from 'leaflet';
export interface ChosePinState {
    value: string | null;
    coordinates: LatLngExpression | null;
}
export declare const toggleChosePin: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    value: string | null;
    coordinates: LatLngExpression | null;
}, "chosePinSlice/toggleChosePin">;
declare const _default: import("redux").Reducer<ChosePinState>;
export default _default;
