import { setDriverSearchString } from '@/store/slices/sortDriversSlice';
import { RootState, store } from '@/store/store';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getDrivers } from '../../api/getDrivers';

export const useSearchDrivers = () => {
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
