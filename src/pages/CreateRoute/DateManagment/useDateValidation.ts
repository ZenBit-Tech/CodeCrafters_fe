import { RootState } from '@/store/store';
import { normalizeDate } from '@/utils/normalizeDate';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        toast(
          'The selected date is in the past. Please choose a date that is today or in the future',
          { type: 'warning' }
        );
      } else {
        navigate(nextPath);
      }
    },
    [routeDate, navigate, todayDate]
  );

  return { goToOrdersManagementStage };
};
