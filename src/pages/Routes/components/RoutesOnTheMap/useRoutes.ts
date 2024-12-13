import { useSelector } from 'react-redux';

import { START_ROUTE_POINT } from '@/constants/constants';
import { RootState } from '@/store/store';

interface UseRoute {
  routesDetails: string[][];
}

export const useRoutes = (): UseRoute => {
  const { routes } = useSelector((store: RootState) => store.choseRoutes);

  const routesDetails = routes.map((routeDetails) => {
    return [
      START_ROUTE_POINT,
      ...routeDetails.orders.map(
        (order) =>
          order.collection_address.split(',')[
            order.collection_address.split(',').length - 2
          ]
      ),
    ];
  });

  return { routesDetails };
};
