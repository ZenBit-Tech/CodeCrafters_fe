import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from '@/routes/router';
import '@/App.css';

function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}

export default App;
