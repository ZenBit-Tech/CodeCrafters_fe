import { FC } from 'react';

import CreateRouteButtons from '@/pages/components/CreateRouteBtns/index';
import DateManager from './Calendar';
import CreateRouteProgressBar, {
  CreateRouteStages,
} from '@/pages/components/CreateRouteProgressBar';
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
