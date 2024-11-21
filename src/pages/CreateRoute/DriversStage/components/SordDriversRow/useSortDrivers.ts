import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RootState, store } from '@/store/store';
import { toggleSortDriversByName } from '@/store/slices/sortDriversSlice';
import { getDrivers } from '@/pages/CreateRoute/DriversStage/api/getDrivers';

export const useSortDrivers = (): {
  setSorting: () => void;
  sortBy: 'ASC' | 'DESC';
} => {
  const { value } = useSelector((store: RootState) => store.sortDriversBy);

  const setSorting = useCallback(() => {
    if (value === 'ASC') {
      getDrivers('DESC', '');
    } else {
      getDrivers('ASC', '');
    }
    store.dispatch(toggleSortDriversByName());
  }, [value]);

  return { setSorting, sortBy: value };
};
