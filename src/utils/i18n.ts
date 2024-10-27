import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      pageTitle: 'Example Page',
      name: 'Name',
      submitExample: 'Submit',
      greeting: 'Hello',
    },
  },
  ua: {
    translation: {
      pageTitle: 'Сторінка Прикладу',
      name: 'Ім’я',
      submitExample: 'Відправити',
      greeting: 'Привіт',
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
