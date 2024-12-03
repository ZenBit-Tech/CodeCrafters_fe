import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { Customer } from '@/interfaces/interfaces';
import { getDrivers } from './api/getDrivers';

export const useExportDrivers = (): {
  drivers: Customer[];
  refreshDrivers: () => Promise<void>;
} => {
  const { value, search } = useSelector(
    (store: RootState) => store.sortDriversBy
  );
  const { drivers } = useSelector((store: RootState) => store.drivers);

  const refreshDrivers = async (): Promise<void> => {
    await getDrivers(value, search);
  };

  useEffect(() => {
    getDrivers(value, search);
  }, [search, value]);

  return { drivers, refreshDrivers };
};
