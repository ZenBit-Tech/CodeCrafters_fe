import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { RootState, store } from '@/store/store';
import { addNewOrder, removeOrder } from '@/store/slices/createRouteSlice';

interface UseChooseOrderInterface {
  chooseOrder: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
  checkedOrders: number[];
}

export const useChooseOrder = (): UseChooseOrderInterface => {
  const { checkedOrders } = useSelector(
    (store: RootState) => store.createRoutSettings
  );

  const chooseOrder = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    if (event.currentTarget.checked) {
      store.dispatch(addNewOrder(id));
    } else {
      store.dispatch(removeOrder(id));
    }
    event.currentTarget.checked = !event.currentTarget.checked;
  };

  return { chooseOrder, checkedOrders };
};
