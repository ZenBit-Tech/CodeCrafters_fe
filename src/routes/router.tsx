import { createBrowserRouter } from 'react-router-dom';

import SignInPage from '@/pages/SignIn';
import OrdersPage from '@/pages/Orders';

const router = createBrowserRouter([
  { index: true, element: <SignInPage /> },
  { path: 'orders', element: <OrdersPage /> },
]);

export default router;
