import { persistReducer } from 'redux-persist';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import persistConfig from '@/store/persistConfig';

export interface AuthState {
  token: string | null;
  role: string | null;
  companyId: number | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  role: null,
  companyId: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<{ token: string; role: string; companyId: number }>
    ) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.companyId = action.payload.companyId;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.companyId = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAccessToken, logout } = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);
