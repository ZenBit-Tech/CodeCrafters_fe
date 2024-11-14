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

        altText: {
          logo: 'Logo',
          key: 'Key',
          lock: 'Lock',
        },
        notFound: {
          header: 'Page Not Found',
          errorMessage: 'The page you are looking for does not exist.',
          button: 'Back to app',
        },
        auth: {
          loginLinkSuccess:
            'Message successfully sent to {{email}}, please check your email.',
          loginLinkFailure:
            'Failed to send the login link. Please try again later.',
          userNotExistError:
            "User with this email doesn't exist. Please try again later.",
          unknownError: 'An unknown error occurred.',
          invalidExpiredLink: 'Invalid or expired link.',
          verificationError:
            'An error occurred during verification. Please try again.',
        },
        signin: {
          welcomeMessage: 'Welcome to Smartporters! 👋',
          instructions: 'Please sign in to your account and start the delivery',
          email: 'Email',
          submit: 'Sign In',
          error: {
            invalidCredentials: 'Please enter valid credentials.',
            accountLocked: 'Too many attempts, try later.',
            invalidFormat: 'Email format is incorrect.',
            incorrectEmail: 'Email incorrect.',
            required: 'Email is required.',
          },
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
