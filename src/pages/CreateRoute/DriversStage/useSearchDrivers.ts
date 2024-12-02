import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { setDriverSearchString } from '@/store/slices/sortDriversSlice';
import { RootState, store } from '@/store/store';
import { getDrivers } from '@/pages/CreateRoute/DriversStage/api/getDrivers';

export const useSearchDrivers = (): {
  getDriversBySearch: (searchString: string) => void;
} => {
  const { value } = useSelector((store: RootState) => store.sortDriversBy);

  const getDriversBySearch = useCallback(
    (searchString: string) => {
      store.dispatch(setDriverSearchString(searchString));

      getDrivers(value, searchString);
    },
    [value]
  );

  return {
    getDriversBySearch,
  };
};
