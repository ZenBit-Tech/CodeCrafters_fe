import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import App from '@/App';
import '@/constants/colors.css';
import { persistor, store } from '@/store/store';
import i18n from '@/utils/i18n';
import Loader from './components/Loader/Loader';
import theme from './theme';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Loader />
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </PersistGate>
    <ToastContainer />
  </Provider>
);
