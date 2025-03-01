export interface AuthState {
    token: string | null;
    role: string | null;
    companyId: number | null;
    email: string | null;
    isAuthenticated: boolean;
}
export declare const setAccessToken: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    token: string;
    role: string;
    companyId: number;
    email: string;
}, "auth/setAccessToken">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">;
declare const _default: import("redux").Reducer<AuthState & import("redux-persist/es/persistReducer").PersistPartial, import("redux").UnknownAction>;
export default _default;
