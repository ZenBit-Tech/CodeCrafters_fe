import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

import { addNewDriver, removeDriver } from '@/store/slices/createRouteSlice';
import { RootState, store } from '@/store/store';

interface UseChooseDriverInterface {
  chooseDriver: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
  choseDrivers: number[];
  goToRouteManagement: (nextPath: string) => void;
}

export const useChooseDriver = (): UseChooseDriverInterface => {
  const navigate = useNavigate();
  const { drivers, checkedOrders } = useSelector(
    (store: RootState) => store.createRoutSettings
  );

  const chooseDriver = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    if (event.currentTarget.checked) {
      if (drivers.length < checkedOrders.length) {
        store.dispatch(addNewDriver(id));
      } else {
        toast(t('driverManagement.aLot'), { type: 'warning' });
      }
    } else {
      store.dispatch(removeDriver(id));
    }
    event.currentTarget.checked = !event.currentTarget.checked;
  };

  const goToRouteManagement = (nextPath: string): void => {
    if (drivers.length < 1) {
      toast(t('driverManagement.zeroDrivers'), { type: 'warning' });
    } else if (drivers.length > checkedOrders.length) {
      toast(t(`driverManagement.moreThanOrders`), { type: 'warning' });
    } else {
      navigate(nextPath);
    }
  };

  return { chooseDriver, goToRouteManagement, choseDrivers: drivers };
};
