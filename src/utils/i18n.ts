import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      pageTitle: 'Example Page',
      name: 'Name',
      submitExample: 'Submit',
      greeting: 'Hello',
      companyName: 'COMPANY NAME',
      action: 'ACTIONS',
      noCompanies: 'No companies yet',
      search: {
        label: 'Search',
        placeholder: 'Search…',
        noResults: 'No companies found.',
      },
      button: {
        addNewCompany: '+ Add New Company',
      },
      navigation: {
        dashboard: 'Dashboard',
        orders: 'Orders',
        routes: 'Routes',
        settings: 'Settings',
        companyList: 'Company List',
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
