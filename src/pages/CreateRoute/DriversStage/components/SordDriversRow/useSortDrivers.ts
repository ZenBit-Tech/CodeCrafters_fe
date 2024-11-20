import { RootState, store } from '@/store/store';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { toggleSortDriversByName } from '@/store/slices/sortDriversSlice';
import { getDrivers } from '@/pages/CreateRoute/DriversStage/api/getDrivers';

export const useSortDrivers = () => {
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
