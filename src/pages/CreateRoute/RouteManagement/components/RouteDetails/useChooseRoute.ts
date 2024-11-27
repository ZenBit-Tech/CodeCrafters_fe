import { toggleChooseRoute } from '@/store/slices/choseRouteSlice';
import { RootState, store } from '@/store/store';
import { useSelector } from 'react-redux';

interface UseChooseRouteHook {
  chooseRoute: (routeId: number) => void;
  choseRouteId: number | null;
}

export const useChooseRoute = (): UseChooseRouteHook => {
  const { value: choseRouteId } = useSelector(
    (store: RootState) => store.choseRoute
  );

  const chooseRoute = (routeId: number) => {
    if (routeId === choseRouteId) {
      store.dispatch(toggleChooseRoute(null));
    } else {
      store.dispatch(toggleChooseRoute(routeId));
    }
  };

  return { chooseRoute, choseRouteId };
};
