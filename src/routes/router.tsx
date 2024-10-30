import { createBrowserRouter } from 'react-router-dom';

import SignInPage from '@/pages/SignIn';

const router = createBrowserRouter([{ index: true, element: <SignInPage /> }]);

export default router;
