import { createBrowserRouter } from 'react-router-dom';

import DashboardLayout from '@/components/Layout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';
import DashboardPage from '@/pages/DashboardPage';
import ExamplePage from '@/pages/ExamplePage';

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
]);

export default router;
