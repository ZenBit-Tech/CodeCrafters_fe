import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import axiosInstance from '@/utils/axiosInstance';

import { ApiUser, User } from './types';

const useFetchUsers = (
  page: number,
  searchTerm: string,
  filterByRole: string,
  sortOrder: Record<string, 'asc' | 'desc'>
) => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    const sortKey = Object.keys(sortOrder)[0];
    const sortDirection = sortOrder[sortKey];

    try {
      const response = await axiosInstance.get('/users', {
        params: {
          page,
          search: searchTerm,
          role: filterByRole,
          sortBy: JSON.stringify({ [sortKey]: sortDirection }),
        },
      });

      const adaptedUsers = response.data.users.map((user: ApiUser) => {
        const [firstName, ...lastNameParts] = user.full_name.split(' ');
        return {
          ...user,
          firstName,
          lastName: lastNameParts.join(' ') || '',
          phoneNumber: user.phone_number || 'No phone number',
        };
      });

      setUsers(adaptedUsers);
      setTotalPages(response.data.pagesCount);
    } catch (err) {
      toast.error(t('settings.message.fetchErorr'));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, searchTerm, filterByRole, sortOrder]);

  const addUserToList = (newUser: User) => {
    const adaptedUser = {
      ...newUser,
      fullName: `${newUser.firstName} ${newUser.lastName}`.trim(),
    };
    setUsers((prevUsers) => [adaptedUser, ...prevUsers]);
  };

  return { users, totalPages, loading, error, fetchUsers, addUserToList };
};

export default useFetchUsers;
