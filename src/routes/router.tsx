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
import DriversStagePage from '@/pages/CreateRoute/DriversStage';
import RouteManagementPage from '@/pages/CreateRoute/RouteManagement';
import SecondStagePage from '@/pages/CreateRoute/SecondStage';
import RoutesPage from '@/pages/Routes';
import DateManagementPage from '@/pages/CreateRoute/DateManagment';
import RouteDetailsPage from '@/pages/RouteDetails';

const AppRouter: React.FC = () => {
  const { isAuthenticated, role } = useSelector(
    (state: RootState) => state.auth
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
              element: (
                <ProtectedRoute isAllowed={role === 'superadmin'}>
                  <CompanyListPage />
                </ProtectedRoute>
              ),
            },
            {
              path: 'company-list/:id',
              element: (
                <ProtectedRoute isAllowed={role === 'superadmin'}>
                  <AdminListPage />
                </ProtectedRoute>
              ),
            },
            ...(role === 'admin' || role === 'dispatcher'
              ? [
                  {
                    path: 'orders',
                    element: <OrdersPage />,
                  },
                  {
                    path: 'date-management',
                    element: <DateManagementPage />,
                  },
                  {
                    path: 'drivers-management',
                    element: <DriversStagePage />,
                  },
                  {
                    path: 'route-management',
                    element: <RouteManagementPage />,
                  },
                  {
                    path: 'orders-stage',
                    element: <SecondStagePage />,
                  },
                  {
                    path: 'routes',
                    element: <RoutesPage />,
                  },
                  {
                    path: 'routes/:id',
                    element: <RouteDetailsPage />,
                  },
                ]
              : []),
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
