import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import persistConfig from '@/store/persistConfig';

export interface AuthState {
  token: string | null;
  role: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  role: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<{ token: string; role: string }>
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAccessToken, logout } = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);
