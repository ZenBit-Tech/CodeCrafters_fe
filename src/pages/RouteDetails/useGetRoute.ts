import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { t } from 'i18next';

import { getRouteDetails } from './components/RouteInform/api/getRouteDetails';
import { RouteInform } from '@/interfaces/interfaces';

export const useGetRoute = (): { routeDetails: RouteInform | null } => {
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

  return { routeDetails };
};
