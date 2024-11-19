import React from 'react';

import AppRouter from '@/routes/router';
import { store } from './store/store';
import { setAccessToken } from './store/slices/authSlice';

function App(): React.ReactElement {
  store.dispatch(setAccessToken({ token: '', role: 'admin' }));

  return <AppRouter />;
}

export default App;
