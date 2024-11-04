import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from '@/store/slices/exampleSlice';
import authReducer from '@/store/slices/authSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
