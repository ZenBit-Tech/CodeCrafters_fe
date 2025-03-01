import { PayloadAction } from '@reduxjs/toolkit';
export interface ExampleState {
    message: string;
}
export declare const exampleSlice: import("@reduxjs/toolkit").Slice<ExampleState, {
    updateMessage: (state: import("immer").WritableDraft<ExampleState>, action: PayloadAction<string>) => void;
}, "example", "example", import("@reduxjs/toolkit").SliceSelectors<ExampleState>>;
export declare const updateMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "example/updateMessage">;
declare const _default: import("redux").Reducer<ExampleState>;
export default _default;
