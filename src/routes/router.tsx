import { createBrowserRouter } from 'react-router-dom';

import ExamplePage from '@/pages/ExamplePage/ExamplePage';

const router = createBrowserRouter([{ index: true, element: <ExamplePage /> }]);

export default router;
