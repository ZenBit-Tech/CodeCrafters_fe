import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from '@/store/slices/exampleSlice';
import authReducer, { setAccessToken } from '@/store/slices/authSlice';

const loadAccessToken = (): string => {
  return localStorage.getItem('accessToken') || '';
};

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
  },
});

store.dispatch(setAccessToken(loadAccessToken()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
