import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import { t } from 'i18next';

import { START_ROUTE_POINT } from '@/constants/constants';
import { RouteInform } from '@/interfaces/interfaces';
import { RootState, store } from '@/store/store';
import { setisVisible } from '@/store/slices/loaderSlice';
import { getRouteDetails } from './components/RouteInform/api/getRouteDetails';

interface useRouteHook {
  routeDetails: RouteInform | null;
  locations: string[];
  handleDelete: (orderId: number) => Promise<void>;
}

export const useRoute = (): useRouteHook => {
  const [routeDetails, setRouteDetails] = useState<RouteInform | null>(null);
  const { token: accessToken } = useSelector((store: RootState) => store.auth);
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
  }, [id, navigate]);

  const handleDelete = async (orderId: number): Promise<void> => {
    try {
      store.dispatch(setisVisible(true));
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/route/${id}?orderId=${orderId}`,
        {},
        { headers: { authorization: accessToken } }
      );

      setRouteDetails(response.data);
    } catch (error: unknown) {
      toast.error('routeDetails.deletedFailed');
      throw new Error(`${error}`);
    } finally {
      store.dispatch(setisVisible(false));
    }
  };

  return {
    handleDelete,
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
