import { RootState } from '@/store/store';
import { t } from 'i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface useValidationInterface {
  goToDriversStage: (nextPath: string) => void;
}

export const useValidateChoosedOrders = (): useValidationInterface => {
  const { checkedOrders } = useSelector(
    (store: RootState) => store.createRoutSettings
  );
  const navigate = useNavigate();

  const goToDriversStage = useCallback(
    (nextPath: string) => {
      if (checkedOrders.length < 1) {
        toast(t('orderManagement.zeroOrders'), { type: 'warning' });
      } else {
        navigate(nextPath);
      }
    },
    [checkedOrders, navigate]
  );

  return { goToDriversStage };
};
