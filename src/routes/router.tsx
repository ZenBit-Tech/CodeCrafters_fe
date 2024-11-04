import { createBrowserRouter } from 'react-router-dom';

import SignInPage from '@/pages/SignIn';
import OrdersPage from '@/pages/Orders';
import ProtectedRoute from '@/pages/components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <SignInPage />
      </ProtectedRoute>
    ),
  },
  { path: '/orders', element: <OrdersPage /> },
]);

export default router;
