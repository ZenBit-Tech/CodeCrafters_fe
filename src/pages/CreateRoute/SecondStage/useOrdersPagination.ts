import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setParamsPage } from '@/store/slices/ordersPageSlice';
import { RootState } from '@/store/store';
import { getOrders } from '@/pages/Orders/api/getOrders';

export const useOrdersPagination = () => {
  const dispatch = useDispatch();
  const { viewOrdersData, params } = useSelector(
    (store: RootState) => store.ordersPageSlice
  );

  const fetchOrders = useCallback(
    (page: number = 1) => {
      getOrders({
        sortBy: params.sortBy.encoded,
        filter: params.filterBy,
        search: params.search,
        page,
        companyId: 1,
        isNew: true,
      });
      dispatch(setParamsPage(page));
    },
    [dispatch, params.sortBy.encoded, params.filterBy, params.search]
  );

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return {
    viewOrdersData,
    currentPage: viewOrdersData.page,
    totalPages: viewOrdersData.pagesCount,
    fetchOrders,
  };
};
