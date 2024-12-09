import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { RouteInform } from '@/interfaces/interfaces';
import { START_ROUTE_POINT } from '@/constants/constants';
import { getRouteDetails } from './components/RouteInform/api/getRouteDetails';

interface useGetRouteHook {
  routeDetails: RouteInform | null;
  locations: string[];
}

export const useGetRoute = (): useGetRouteHook => {
  const [routeDetails, setRouteDetails] = useState<RouteInform | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Number.isNaN(Number(id))) {
      toast(t('routeDetails.invalidParams'), { type: 'error' });
      navigate('/routes');
    } else {
      const details = getRouteDetails(Number(id));
      details.then((response) => {
        setRouteDetails(response.data);
      });
    }
  }, []);

  return {
    routeDetails,
    locations: routeDetails
      ? [
          START_ROUTE_POINT,
          ...routeDetails.orders.map(
            (order) =>
              order.collection_address.split(',')[
                order.collection_address.split(',').length - 2
              ]
          ),
        ]
      : [],
  };
};
