import { useEffect } from 'react';
import { getRoutesData } from './api/getRoutesData';

export const useCreateRoutes = () => {
  useEffect(() => {
    getRoutesData([1, 2, 3, 4], [2]);
  }, []);
};
