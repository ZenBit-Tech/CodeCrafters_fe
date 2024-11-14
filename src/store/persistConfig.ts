import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist';

import { AuthState } from '@/store/slices/authSlice';

const persistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage,
  whitelist: ['token', 'role', 'isAuthenticated'],
};

export default persistConfig;
