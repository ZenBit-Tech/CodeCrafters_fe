import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';

import App from '@/App';

import { persistor, store } from '@/store/store';
import theme from '@/theme';
import i18n from '@/utils/i18n';
import { ThemeProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
