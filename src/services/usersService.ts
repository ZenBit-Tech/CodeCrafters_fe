import axiosInstance from '@/utils/axiosInstance';

export const getUsers = async (
  page = 1,
  pageSize = 10,
  searchTerm = '',
  filterBy = '',
  sortBy = 'name',
  sortOrder = 'ASC'
) => {
  const response = await axiosInstance.get('/users', {
    params: {
      page,
      pageSize,
      searchTerm,
      filterBy,
      sortBy,
      sortOrder,
    },
  });

  return response.data;
};

export const deleteUser = async (userId: number): Promise<void> => {
  await axiosInstance.delete(`/users/${userId}`);
};
