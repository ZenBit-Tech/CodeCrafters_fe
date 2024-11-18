import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from './api/getOrders';
import { setParamsPage } from '@/store/slices/ordersPageSlice';
import { RootState } from '@/store/store';

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
        page,
        companyId: 1,
      });
      dispatch(setParamsPage(page));
    },
    [dispatch, params.sortBy.encoded, params.filterBy]
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
