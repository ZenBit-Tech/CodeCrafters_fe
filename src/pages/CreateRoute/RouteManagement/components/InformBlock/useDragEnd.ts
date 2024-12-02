import { DragEndEvent } from '@dnd-kit/core';
import { t } from 'i18next';
import { toast } from 'react-toastify';

import { changeRoutes } from '@/store/slices/ordersToDriversSlice';
import { store } from '@/store/store';

interface UseDragEndHook {
  handleDragEnd: (event: DragEndEvent) => void;
}

export const useDragEnd = (): UseDragEndHook => {
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
