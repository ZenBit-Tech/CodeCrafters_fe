import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      pageTitle: 'Example Page',
      name: 'Name',
      submitExample: 'Submit',
      greeting: 'Hello',

      altText: {
        logo: 'Logo',
        key: 'Key',
        lock: 'Lock',
      },
      signin: {
        welcomeMessage: 'Welcome to Smartporters! 👋',
        instructions: 'Please sign in to your account and start the delivery',
        email: 'Email',
        submit: 'Sign In',
      },
      orders: {
        welcome: 'Orders page',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
