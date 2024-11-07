import { createBrowserRouter } from 'react-router-dom';

import DashboardLayout from '@/components/Layout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';
import DashboardPage from '@/pages/DashboardPage';
import ExamplePage from '@/pages/ExamplePage';
import SignInPage from '@/pages/SignIn';
import OrdersPage from '@/pages/Orders';
import ProtectedRoute from '@/pages/components/ProtectedRoute';
import AdminListPage from '@/pages/AdminList';

const router = createBrowserRouter([
  { index: true, element: <ExamplePage /> },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <DashboardLayout />,
        children: [{ path: '/', element: <DashboardPage /> }],
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
  { path: '/admin-list', element: <AdminListPage /> },
]);

export default router;
