import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import exampleReducer from '@/store/slices/exampleSlice';
import authReducer from '@/store/slices/authSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
