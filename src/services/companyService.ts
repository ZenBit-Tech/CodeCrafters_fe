import axiosInstance from '@/utils/axiosInstance';

export const getCompanies = async (
  page = 1,
  pageSize = 10,
  searchTerm = '',
  sortBy = 'name',
  sortOrder = 'ASC'
) => {
  const response = await axiosInstance.get('/company', {
    params: {
      page,
      pageSize,
      searchTerm,
      sortBy,
      sortOrder,
    },
  });

  return response.data;
};
