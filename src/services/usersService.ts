import { store } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';
import axios from 'axios';

export const getUsers = async (
  page = 1,
  pageSize = 10,
  searchTerm = '',
  filterBy = '',
  sortBy = 'name',
  sortOrder = 'ASC'
) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`, {
    params: {
      page,
      pageSize,
      searchTerm,
      filterBy,
      sortBy,
      sortOrder,
      companyId: 1,
    },
    headers: {
      authorization: store.getState().auth.token,
    },
  });

  return response.data;
};

export const deleteUser = async (userId: number): Promise<void> => {
  await axiosInstance.delete(`/users/${userId}`);
};
