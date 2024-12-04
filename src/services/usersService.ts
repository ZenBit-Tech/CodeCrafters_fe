import axios from 'axios';

import { store } from '@/store/store';
import axiosInstance from '@/utils/axiosInstance';

interface ApiUser {
  id: number;
  full_name: string;
  email: string;
  phone_number: string | null;
  role: string;
}

interface GetUsersResponse {
  users: ApiUser[];
  page: number;
  pageSize: number;
  totalPages: number;
  totalUsers: number;
}

export const getUsers = async (
  page = 1,
  pageSize = 10,
  searchTerm = '',
  filterBy = '',
  sortBy = 'name',
  sortOrder = 'ASC'
): Promise<GetUsersResponse> => {
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
