import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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

  const chooseDriver = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    if (event.currentTarget.checked) {
      if (drivers.length < checkedOrders.length) {
        store.dispatch(addNewDriver(id));
      } else {
        toast(
          'The number of drivers selected must not exceed the number of chosen orders. Please adjust your selection accordingly',
          { type: 'warning' }
        );
      }
    } else {
      store.dispatch(removeDriver(id));
    }
    event.currentTarget.checked = !event.currentTarget.checked;
  };

  const goToRouteManagement = (nextPath: string) => {
    if (drivers.length < 1) {
      toast(
        'Please select at least one driver to proceed with filling out the form',
        { type: 'warning' }
      );
    } else {
      navigate(nextPath);
    }
  };

  return { chooseDriver, goToRouteManagement, choseDrivers: drivers };
};
