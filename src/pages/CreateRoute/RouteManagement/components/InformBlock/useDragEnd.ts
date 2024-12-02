import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DragEndEvent } from '@dnd-kit/core';
import { t } from 'i18next';

import {
  changeRoutes,
  removeNotAssignedOrder,
} from '@/store/slices/ordersToDriversSlice';
import { RootState, store } from '@/store/store';

interface UseDragEndHook {
  handleDragEnd: (event: DragEndEvent) => void;
}

export const useDragEnd = (): UseDragEndHook => {
  const { notAssignedOrders } = useSelector(
    (store: RootState) => store.ordersToDriversSlice
  );

  function handleDragEnd(event: DragEndEvent): void {
    const { active, over } = event;
    if (!over) return;

    const ordersCount: number = store
      .getState()
      .ordersToDriversSlice.value.find(
        (routeData) => routeData.driver.id === active.data.current?.parentId
      )?.orders.length as number;
    if (ordersCount < 2) {
      toast(t('routeManagement.dndWarning'), { type: 'warning' });
      return;
    }

    if (
      notAssignedOrders.some(
        (order) => order.id === active.data.current?.order.id
      )
    ) {
      store.dispatch(removeNotAssignedOrder(active.data.current?.order.id));
    }

    store.dispatch(
      changeRoutes({
        currentRouteId: active.data.current?.parentId,
        draggedOrder: active.data.current?.order,
        newRouteId: over.id as number,
      })
    );
  }

  return { handleDragEnd };
};
