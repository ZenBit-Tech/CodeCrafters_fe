import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { t } from 'i18next';

import { setisVisible } from '@/store/slices/loaderSlice';
import { RootState, store } from '@/store/store';

interface UseDeleteRoute {
  handleDelete: () => Promise<void>;
}

export const useDeleteRoute = (): UseDeleteRoute => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token: accessToken } = useSelector((store: RootState) => store.auth);

  const handleDelete = async (): Promise<void> => {
    try {
      store.dispatch(setisVisible(true));
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/route/${id}`, {
        headers: { authorization: accessToken },
      });

      toast.success(t('routeDetails.deletedSuccessfully'));
      navigate('/routes');
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      store.dispatch(setisVisible(false));
    }
  };

  return { handleDelete };
};
