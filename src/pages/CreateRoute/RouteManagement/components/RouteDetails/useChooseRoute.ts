import { useSelector } from 'react-redux';

import { toggleChooseRoute } from '@/store/slices/choseRouteSlice';
import { RootState, store } from '@/store/store';

interface UseChooseRouteHook {
  chooseRoute: (routeId: number) => void;
  choseRouteId: number | null;
}

export const useChooseRoute = (): UseChooseRouteHook => {
  const { value: choseRouteId } = useSelector(
    (store: RootState) => store.choseRoute
  );

  const chooseRoute = (routeId: number): void => {
    if (routeId === choseRouteId) {
      store.dispatch(toggleChooseRoute(null));
    } else {
      store.dispatch(toggleChooseRoute(routeId));
    }
  };

  return { chooseRoute, choseRouteId };
};
