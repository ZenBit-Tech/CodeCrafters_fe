import dayjs, { Dayjs } from 'dayjs';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

import { RootState, store } from '@/store/store';
import { setRouteDate } from '@/store/slices/createRouteSlice';
import { getOrders } from '@/pages/Orders/api/getOrders';
import { ORDERS_SORTS } from '@/constants/ordersSorts';

export const useChangeDate = (): {
  handleDateChange: (newValue: Dayjs) => void;
  selectedDate: Dayjs | null;
} => {
  const { routeDate } = useSelector(
    (store: RootState) => store.createRoutSettings
  );

  const handleDateChange = (newValue: Dayjs | null): void => {
    if (newValue) {
      if (!newValue.isBefore(new Date(), 'day')) {
        const ChangedDate = new Date(
          newValue.year(),
          newValue.month(),
          newValue.date()
        );

        store.dispatch(setRouteDate(ChangedDate));

        getOrders({
          sortBy: ORDERS_SORTS.collection_date.asc,
          filter: 'STATUS',
          search: '',
          page: 1,
          companyId: 1,
          isNew: true,
          routeDate: ChangedDate,
        });
      } else {
        store.dispatch(setRouteDate(new Date()));
        getOrders({
          sortBy: ORDERS_SORTS.collection_date.asc,
          filter: 'STATUS',
          search: '',
          page: 1,
          companyId: 1,
          isNew: true,
          routeDate: new Date(),
        });
        toast(t('dateManagement.invalidDate'), { type: 'warning' });
      }
    }
  };

  return { handleDateChange, selectedDate: dayjs(routeDate) };
};
