import { useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { RootState, store } from '@/store/store';
import { getOrders } from '@/pages/Orders/api/getOrders';
import { setSearchBy } from '@/store/slices/ordersPageSlice';

type UseSearchType = () => { sendRequestByParams: (search: string) => void };

export const useSearchOrders: UseSearchType = () => {
  const { params } = useSelector((store: RootState) => store.ordersPageSlice);
  const { routeDate } = useSelector(
    (store: RootState) => store.createRoutSettings
  );

  const sendRequestByParams = debounce((search: string) => {
    store.dispatch(setSearchBy(search));

    getOrders({
      ...params,
      search: search,
      sortBy: params.sortBy.encoded,
      filter: params.filterBy,
      page: 1,
      companyId: 1,
      isNew: true,
      routeDate,
    });
  }, 300);

  return { sendRequestByParams };
};
