import { createBrowserRouter } from 'react-router-dom';

import DashboardLayout from '@/components/Layout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';
import CompanyListPage from '@/pages/CompanyListPage';
import ProtectedRoute from '@/pages/components/ProtectedRoute';
import DashboardPage from '@/pages/DashboardPage';
import ExamplePage from '@/pages/ExamplePage';
import OrdersPage from '@/pages/Orders';
import SignInPage from '@/pages/SignIn';

const router = createBrowserRouter([
  { index: true, element: <ExamplePage /> },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/',
            element: <DashboardPage />,
          },
          { path: 'company-list', element: <CompanyListPage /> },
        ],
      },
    ],
  },
  {
    path: '/signin',
    element: (
      <ProtectedRoute>
        <SignInPage />
      </ProtectedRoute>
    ),
  },
  { path: '/orders', element: <OrdersPage /> },
]);

export default router;
