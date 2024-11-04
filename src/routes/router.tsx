import { createBrowserRouter } from 'react-router-dom';

import ExamplePage from '@/pages/ExamplePage';
import RootLayout from '@/components/Layout/RootLayout';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import DashboardPage from '@/pages/DashboardPage';

const router = createBrowserRouter([
  // { index: true, element: <ExamplePage /> },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: '/', element: <DashboardPage /> },
          // { path: 'orders', element: <OrdersPage /> },
          // { path: 'routes', element: <RoutesPage /> },
          // { path: 'settings', element: <SettingsPage /> },
          // { path: 'company-list', element: <CompanyListPage /> },
        ],
      },
    ],
  },
]);

export default router;
