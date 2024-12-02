import { useSelector } from 'react-redux';

import { RootState, store } from '@/store/store';
import { getOrders } from '@/pages/Orders/api/getOrders';
import { setSearchBy } from '@/store/slices/ordersPageSlice';

interface UseSearchHook {
  sendRequestByParams: (search: string) => void;
}

export const useSearchOrders = (): UseSearchHook => {
  const { params } = useSelector((store: RootState) => store.ordersPageSlice);

  const sendRequestByParams = (search: string) => {
    store.dispatch(setSearchBy(search));

    getOrders({
      ...params,
      search: search,
      sortBy: params.sortBy.encoded,
      filter: params.filterBy,
      page: 1,
      companyId: 1,
      isNew: false,
    });
  };

  return { sendRequestByParams };
};
