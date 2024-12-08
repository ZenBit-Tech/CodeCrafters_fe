import { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthState } from '@/store/slices/authSlice';

const persistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage,
  whitelist: ['token', 'role', 'companyId', 'isAuthenticated'],
};

export default persistConfig;
