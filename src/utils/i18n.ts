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
      adminList: {
        title: 'Admin List',
        companyName: 'Company Name LTD',
        clientName: 'Client name:',
        email: 'Email:',
        editButton: 'Edit',
        searchPlaceholder: 'Search',
        addAdminButton: 'Add New Admin',
        adminName: 'ADMIN NAME',
        actions: 'ACTIONS',
        pagination: 'Showing {{start}} to {{end}} of {{total}} users',
        prev: 'Previous',
        next: 'Next',
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
