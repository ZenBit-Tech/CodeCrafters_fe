import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { Customer } from '@/interfaces/interfaces';
import { getDrivers } from './api/getDrivers';

export const useExportDrivers = (): { drivers: Customer[] } => {
  const { value, search } = useSelector(
    (store: RootState) => store.sortDriversBy
  );
  const { drivers } = useSelector((store: RootState) => store.drivers);

  useEffect(() => {
    getDrivers(value, search);
  }, []);

  return { drivers };
};
