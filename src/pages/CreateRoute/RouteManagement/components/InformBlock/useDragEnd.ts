import { changeRoutes } from '@/store/slices/ordersToDriversSlice';
import { store } from '@/store/store';
import { DragEndEvent } from '@dnd-kit/core';
import { toast } from 'react-toastify';

interface UseDragEndHook {
  handleDragEnd: (event: DragEndEvent) => void;
}

export const useDragEnd = (): UseDragEndHook => {
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const ordersCount: number = store
      .getState()
      .ordersToDriversSlice.value.find(
        (routeData) => routeData.driver.id === active.data.current?.parentId
      )?.orders.length as number;
    if (ordersCount < 2) {
      toast(
        'Each route must contain at least one order. Please ensure all routes meet this requirement before proceeding',
        { type: 'warning' }
      );
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
