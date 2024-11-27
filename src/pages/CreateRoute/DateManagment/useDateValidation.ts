import { useCallback } from 'react';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RootState } from '@/store/store';
import { normalizeDate } from '@/utils/normalizeDate';

interface useDateValidationInterface {
  goToOrdersManagementStage: (nextPath: string) => void;
}

export const useDateValidation = (): useDateValidationInterface => {
  const navigate = useNavigate();
  const { routeDate } = useSelector(
    (store: RootState) => store.createRoutSettings
  );
  const todayDate: Date = normalizeDate(new Date());

  const goToOrdersManagementStage = useCallback(
    (nextPath: string) => {
      if (normalizeDate(routeDate) < todayDate) {
        toast(t('dateManagement.invalidDate'), { type: 'warning' });
      } else {
        navigate(nextPath);
      }
    },
    [routeDate, navigate, todayDate]
  );

  return { goToOrdersManagementStage };
};
