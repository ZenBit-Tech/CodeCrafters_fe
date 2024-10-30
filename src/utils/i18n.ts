import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      pageTitle: 'Example Page',
      name: 'Name',
      submitExample: 'Submit',
      greeting: 'Hello',
      logo: 'Logo',
      key: 'Key',
      lock: 'Lock',
      welcomeMessage: 'Welcome to Smartporters! 👋',
      signInInstructions:
        'Please sign in to your account and start the delivery',
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
