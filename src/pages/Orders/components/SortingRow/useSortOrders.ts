import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setParamsFilter,
  setParamsSortBy,
} from '@/store/slices/ordersPageSlice';
import { ORDERS_SORTS } from '@/constants/ordersSorts';
import { RootState } from '@/store/store';
import { getOrders } from '@/pages/Orders/api/getOrders';

interface SortingParamsType {
  sortBy: {
    type: string;
    value: 'ASC' | 'DESC';
    encoded: string;
  };
  filterBy: string;
}

interface UseSortOrdersReturn {
  params: SortingParamsType;
  toggleSortOrder: (sortType: keyof typeof ORDERS_SORTS) => void;
  updateFilter: (filterValue: string) => void;
}

export const useSortOrders = (): UseSortOrdersReturn => {
  const dispatch = useDispatch();
  const { params } = useSelector((store: RootState) => store.ordersPageSlice);

  const toggleSortOrder = useCallback(
    (sortType: keyof typeof ORDERS_SORTS) => {
      const isAscending = params.sortBy.value !== 'ASC';
      const sortOrder = isAscending ? 'ASC' : 'DESC';

      dispatch(
        setParamsSortBy({
          type: sortType,
          value: sortOrder,
          encoded: ORDERS_SORTS[sortType][isAscending ? 'asc' : 'desc'],
        })
      );

      getOrders({
        sortBy: ORDERS_SORTS[sortType][isAscending ? 'asc' : 'desc'],
        filter: params.filterBy,
        search: params.search,
        page: 1,
        companyId: 1,
        isNew: false,
      });
    },
    [dispatch, params.sortBy.value, params.filterBy, params.search]
  );

  const updateFilter = useCallback(
    (filterValue: string) => {
      dispatch(setParamsFilter(filterValue));

      getOrders({
        sortBy: params.sortBy.encoded,
        filter: filterValue,
        page: 1,
        companyId: 1,
        isNew: false,
      });
    },
    [dispatch, params.sortBy.encoded]
  );

  return {
    params,
    toggleSortOrder,
    updateFilter,
  };
};
