import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import {
  addNewOrder,
  removeOrder,
  clearCheckedOrders,
  addMultipleOrders,
} from '@/store/slices/createRouteSlice';

interface UseChooseOrderInterface {
  chooseOrder: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
  checkedOrders: number[];
  selectAllOrders: (orderIds: number[]) => void;
  deselectAllOrders: () => void;
}

export const useChooseOrder = (): UseChooseOrderInterface => {
  const dispatch = useDispatch();
  const { checkedOrders } = useSelector(
    (store: RootState) => store.createRoutSettings
  );

  const chooseOrder = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    if (event.currentTarget.checked) {
      dispatch(addNewOrder(id));
    } else {
      dispatch(removeOrder(id));
    }
    event.currentTarget.checked = !event.currentTarget.checked;
  };

  const selectAllOrders = useCallback(
    (orderIds: number[]) => {
      dispatch(addMultipleOrders(orderIds));
    },
    [dispatch]
  );

  const deselectAllOrders = useCallback(() => {
    dispatch(clearCheckedOrders());
  }, [dispatch]);

  return {
    chooseOrder,
    checkedOrders,
    selectAllOrders,
    deselectAllOrders,
  };
};
