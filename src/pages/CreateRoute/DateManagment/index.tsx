import { FC } from 'react';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns/index';
import CreateRouteProgressBar, {
  CreateRouteStages,
} from '@/pages/components/CreateRouteProgressBar';
import DateManager from './Calendar';
import { useDateValidation } from './useDateValidation';

export const DateManagementPage: FC = () => {
  const { goToOrdersManagementStage } = useDateValidation();

  return (
    <>
      <CreateRouteProgressBar choseRoute={CreateRouteStages.FIRST} />
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
