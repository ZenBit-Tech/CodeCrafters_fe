import React from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashboardLayout from '@/components/Layout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';
import AdminListPage from '@/pages/AdminList';
import CompanyListPage from '@/pages/CompanyListPage';
import ProtectedRoute from '@/pages/components/ProtectedRoute';
import DriversStagePage from '@/pages/CreateRoute/DriversStage';
import DashboardPage from '@/pages/DashboardPage';
import NotFoundPage from '@/pages/NotFound';
import OrdersPage from '@/pages/Orders';
import SignInPage from '@/pages/SignIn';
import TeamManagementPage from '@/pages/TeamManagment';
import { RootState } from '@/store/store';
import RouteManagementPage from '@/pages/CreateRoute/RouteManagement';
import SecondStagePage from '@/pages/CreateRoute/SecondStage';
import RoutesPage from '@/pages/Routes';
import DateManagementPage from '@/pages/CreateRoute/DateManagment';
import RouteDetailsPage from '@/pages/RouteDetails';
import { Roles } from '@/constants/roles';

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
                <ProtectedRoute isAllowed={role === Roles.SUPERADMIN}>
                  <CompanyListPage />
                </ProtectedRoute>
              ),
            },
            {
              path: 'company-list/:id',
              element: (
                <ProtectedRoute isAllowed={role === Roles.SUPERADMIN}>
                  <AdminListPage />
                </ProtectedRoute>
              ),
            },
            ...(role === Roles.ADMIN || role === Roles.DISPATCHER
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
            {
              path: 'settings',
              element: <TeamManagementPage />,
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
