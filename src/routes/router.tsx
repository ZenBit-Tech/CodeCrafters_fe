import React from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashboardLayout from '@/components/Layout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';
import CompanyListPage from '@/pages/CompanyListPage';
import ProtectedRoute from '@/pages/components/ProtectedRoute';
import DashboardPage from '@/pages/DashboardPage';
import OrdersPage from '@/pages/Orders';
import SignInPage from '@/pages/SignIn';
import AdminListPage from '@/pages/AdminList';
import NotFoundPage from '@/pages/NotFound';
import { RootState } from '@/store/store';
import ExamplePage from '@/pages/ExamplePage';
import DateManagementPage from '@/pages/DateManagment';

const AppRouter: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: isAuthenticated ? (
        <RootLayout />
      ) : (
        <ProtectedRoute isAllowed={!isAuthenticated}>
          <SignInPage />
        </ProtectedRoute>
      ),
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute isAllowed={isAuthenticated}>
                  <DashboardPage />
                </ProtectedRoute>
              ),
            },
            {
              path: 'company-list',
              element: <CompanyListPage />,
            },
            {
              path: 'orders',
              element: <OrdersPage />,
            },
            {
              path: 'date-management',
              element: <DateManagementPage />,
            },
          ],
        },
        { path: '/admin-list', element: <AdminListPage /> },

        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
    { path: '/example-page', element: <ExamplePage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
