import { PersistConfig } from 'redux-persist';
import { AuthState } from '@/store/slices/authSlice';
declare const persistConfig: PersistConfig<AuthState>;
export default persistConfig;
