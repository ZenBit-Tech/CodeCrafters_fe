import { FC } from 'react';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns/index';
import DateManager from './Calendar';
import CreateRouteProgressBar from '@/pages/components/CreateRouteProgressBar';
import { useDateValidation } from './useDateValidation';

export const DateManagementPage: FC = () => {
  const { goToOrdersManagementStage } = useDateValidation();

  return (
    <>
      <CreateRouteProgressBar />
      <DateManager />
      <CreateRouteButtons
        previousPath={'/orders'}
        nextPath={'/orders-stage'}
        handleValidate={goToOrdersManagementStage}
      />
    </>
  );
};

export default DateManagementPage;
