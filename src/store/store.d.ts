export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    example: import("@/store/slices/exampleSlice").ExampleState;
    auth: import("@/store/slices/authSlice").AuthState & import("redux-persist/es/persistReducer").PersistPartial;
    ordersPageSlice: import("./slices/ordersPageSlice").OrderPageState;
    loader: import("./slices/loaderSlice").loaderState;
    sortDriversBy: import("./slices/sortDriversSlice").SearchDriversInterface;
    drivers: import("./slices/driversSlice").DriversSliceInterface;
    createRoutSettings: import("./slices/createRouteSlice").CreateRouteInterface;
    ordersToDriversSlice: import("./slices/ordersToDriversSlice").OrderToDriversState;
    choseRoute: import("./slices/choseRouteSlice").ChoseRouteState;
    chosePin: import("./slices/chosePinSlice").ChosePinState;
    routes: import("./slices/routesSlice").RoutesState;
    choseRoutes: import("./slices/choseRoutes").ChoseRouteState;
    tokenModal: import("./slices/tokenModalSlice").tokenModalInterface;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        example: import("@/store/slices/exampleSlice").ExampleState;
        auth: import("@/store/slices/authSlice").AuthState & import("redux-persist/es/persistReducer").PersistPartial;
        ordersPageSlice: import("./slices/ordersPageSlice").OrderPageState;
        loader: import("./slices/loaderSlice").loaderState;
        sortDriversBy: import("./slices/sortDriversSlice").SearchDriversInterface;
        drivers: import("./slices/driversSlice").DriversSliceInterface;
        createRoutSettings: import("./slices/createRouteSlice").CreateRouteInterface;
        ordersToDriversSlice: import("./slices/ordersToDriversSlice").OrderToDriversState;
        choseRoute: import("./slices/choseRouteSlice").ChoseRouteState;
        chosePin: import("./slices/chosePinSlice").ChosePinState;
        routes: import("./slices/routesSlice").RoutesState;
        choseRoutes: import("./slices/choseRoutes").ChoseRouteState;
        tokenModal: import("./slices/tokenModalSlice").tokenModalInterface;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const persistor: import("redux-persist").Persistor;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
