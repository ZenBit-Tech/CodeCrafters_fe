import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import exampleReducer from '@/store/slices/exampleSlice';
import authReducer from '@/store/slices/authSlice';
import ordersPageSlice from './slices/ordersPageSlice';
import loaderSlice from './slices/loaderSlice';
import sortDriversSlice from './slices/sortDriversSlice';
import driversSlice from './slices/driversSlice';
import createRouteSlice from './slices/createRouteSlice';
import ordersToDriversSlice from './slices/ordersToDriversSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    ordersPageSlice: ordersPageSlice,
    loader: loaderSlice,
    sortDriversBy: sortDriversSlice,
    drivers: driversSlice,
    createRoutSettings: createRouteSlice,
    ordersToDriversSlice: ordersToDriversSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
