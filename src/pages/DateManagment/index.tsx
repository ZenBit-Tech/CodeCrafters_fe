import { FC } from 'react';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns/index';
import DateManager from './Calendar';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';

export const DateManagementPage: FC = () => {
  return (
    <>
      <CreateRouteProgressBar />
      <DateManager />
      <CreateRouteButtons />
    </>
  );
};

export default DateManagementPage;
