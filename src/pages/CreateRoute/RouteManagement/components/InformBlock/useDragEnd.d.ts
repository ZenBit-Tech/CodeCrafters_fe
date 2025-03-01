import { DragEndEvent } from '@dnd-kit/core';
interface UseDragEndHook {
    handleDragEnd: (event: DragEndEvent) => void;
}
export declare const useDragEnd: () => UseDragEndHook;
export {};
