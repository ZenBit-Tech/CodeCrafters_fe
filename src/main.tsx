import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import App from '@/App';
import '@/constants/colors.css';
import { persistor, store } from '@/store/store';
import i18n from '@/utils/i18n';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader/Loader';
import theme from './theme';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
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
  </StrictMode>
);
