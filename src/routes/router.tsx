import { createBrowserRouter } from 'react-router-dom';

import ExamplePage from '@/pages/ExamplePage';
import RootLayout from '@/components/Layout/RootLayout';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import DashboardPage from '@/pages/DashboardPage';
import CompanyListPage from '@/pages/CompanyListPage';

const router = createBrowserRouter([
  { index: true, element: <ExamplePage /> },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'company-list', element: <CompanyListPage /> },
        ],
      },
    ],
  },
]);

export default router;
