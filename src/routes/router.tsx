import React from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashboardLayout from '@/components/Layout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';
import DashboardPage from '@/pages/DashboardPage';
import SignInPage from '@/pages/SignIn';
import ProtectedRoute from '@/pages/components/ProtectedRoute';
import NotFoundPage from '@/pages/NotFound';
import { RootState } from '@/store/store';

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
          path: 'dashboard',
          element: (
            <ProtectedRoute isAllowed={isAuthenticated}>
              <DashboardLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute isAllowed={isAuthenticated}>
                  <DashboardPage />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
