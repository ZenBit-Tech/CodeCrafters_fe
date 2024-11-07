import { createBrowserRouter } from 'react-router-dom';

import SignInPage from '@/pages/SignIn';
import AdminListPage from '@/pages/AdminList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
  },
  { path: '/admin-list', element: <AdminListPage /> },
]);

export default router;
