import { createBrowserRouter } from 'react-router-dom';

import DashboardLayout from '@/components/Layout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';
import DashboardPage from '@/pages/DashboardPage';
import SignInPage from '@/pages/SignIn';
import ProtectedRoute from '@/pages/components/ProtectedRoute';
import AdminListPage from '@/pages/AdminList';

const router = createBrowserRouter([
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
  { path: '/admin-list', element: <AdminListPage /> },
]);

export default router;
