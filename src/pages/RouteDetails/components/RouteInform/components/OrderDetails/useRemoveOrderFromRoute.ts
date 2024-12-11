import { RootState } from '@/store/store';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface useRemoveOrderFromRouteHook {
  handleDelete: (id: number) => void;
}

export const useRemoveOrderFromRoute = (): useRemoveOrderFromRouteHook => {
  const { id } = useParams();
  const { token: accessToken } = useSelector((store: RootState) => store.auth);

  const handleDelete = async (orderId: number): Promise<void> => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/route/${id}?orderId=${orderId}`,
      { headers: { authorization: accessToken } }
    );

    console.log(response);
  };

  return { handleDelete };
};
