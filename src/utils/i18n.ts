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
        add: 'Add',
        update: 'Update',
        cancel: 'Cancel',
        close: 'Close',
      },
      modal: {
        addCompanyTitle: 'Add company',
        updateCompanyTitle: 'Update company',
      },
      form: {
        organizationName: 'Organization name',
        clientName: 'Client Name',
        email: 'Email',
        validation: {
          companyNameRequired: "Company name can't be empty",
          emailRequired: "Email can't be empty",
          invalidEmail: 'String should be email',
          invalidData: 'Invalid data. Please check the fields.',
        },
      },
      company: {
        successMessage: 'Company created successfully',
        updateSuccessMessage: 'Company updated successfully',
        error: 'Failed to create company',
        updateError: 'Failed to update company',
      },
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
      adminList: {
        title: 'Admin List',
        companyName: '{{companyName}}',
        clientName: '{{clientName}}',
        clientEmail: '{{clientEmail}}',
        clientDetails: 'DETAILS',
        name: 'Client name:',
        email: 'Email:',
        editButton: 'Edit',
        searchPlaceholder: 'Search',
        addAdminButton: 'Add New Admin',
        adminName: 'ADMIN NAME',
        actions: 'ACTIONS',
        pagination: 'Showing {{start}} to {{end}} of {{total}} users',
        prev: 'Previous',
        next: 'Next',
        altText: {
          edit: 'Edit Icon',
          delete: 'Delete Icon',
        },
      },
      adminForm: {
        button: 'Add new admin',
        title: 'Add new admin',
        fullName: 'Admin name',
        email: 'Email',
        add: 'Add',
        update: 'Update',
        cancel: 'Cancel',
        errors: {
          emptyFullName: "Admin full name can't be empty",
          emptyEmail: "Admin email can't be empty",
          invalidEmail: 'String should have email format',
        },
      },
      addNewAdmin: {
        button: 'Add new admin',
        title: 'Add new admin',
      },
      updateAdmin: {
        title: 'Update Admin',
      },
      deleteAdmin: {
        heading: 'Delete Admin',
        mainMessage: 'Do you really want to delete this admin?',
        subMessage: "You can't restore it after deleting.",
        cancelText: 'Cancel',
        confirmText: 'Delete',
      },
      adminApi: {
        fetch_failed: 'Failed to fetch admins data',
        created_successfully: 'Admin created successfully',
        create_failed:
          'Failed to create admin. User with such email already exists',
        updated_successfully: 'Admin data updated successfully',
        update_failed:
          'Failed to change admin data. User with such email already exists',
        deleted_successfully: 'Admin deleted successfully',
        delete_failed: 'Failed to delete admin',
        unexpected_error: 'An unexpected error occurred',
      },
      routesPage: {
        filter: 'FILTER',
        selectDriver: 'Select Driver',
        selectStops: 'Select Stops',
        selectStatus: 'Select Status',
        search: 'Search',
        mapView: 'MAP VIEW',
        createRoute: 'Create Route',
        allStatuses: 'ALL STATUSES',
        actions: 'ACTIONS',
        previous: 'Previous',
        next: 'Next',
        pagination: 'Showing {{start}} to {{end}} of {{total}} routes',
        columns: {
          routeId: 'ID ROUTE',
          date: 'COLLECTION DATE',
          driverFirstName: 'DRIVER',
          stopsCount: 'STOPS',
          workingHours: 'ROUTE TIME',
          distance: 'DISTANCE',
          status: 'Status',
        },
        status: {
          completed: 'Completed',
          failed: 'Failed',
          not_arrived: 'Not Arrived',
          at_risk: 'At Risk',
          upcoming: 'Upcoming',
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
