import { useEffect, useState } from 'react';
import { t } from 'i18next';
import { toast } from 'react-toastify';
import axios from 'axios';

import { store } from '@/store/store';
import { ApiUser, User } from './types';
import { setisVisible } from '@/store/slices/loaderSlice';

type FetchUsers = () => Promise<void>;

type AddUserToList = (newUser: User) => void;

interface UseFetchUsersReturn {
  users: User[];
  totalPages: number;
  loading: boolean;
  error: Error | null;
  fetchUsers: FetchUsers;
  addUserToList: AddUserToList;
}

const useFetchUsers = (
  page: number,
  searchTerm: string,
  filterByRole: string,
  sortOrder: Record<string, 'asc' | 'desc'>
): UseFetchUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    const sortKey = Object.keys(sortOrder)[0];
    const sortDirection = sortOrder[sortKey];

    try {
      store.dispatch(setisVisible(true));
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users`,
        {
          params: {
            page,
            search: searchTerm,
            role: filterByRole,
            sortBy: JSON.stringify({ [sortKey]: sortDirection }),
            companyId: 1,
          },
          headers: {
            authorization: store.getState().auth.token,
          },
        }
      );

      const adaptedUsers = response.data.users.map((user: ApiUser) => {
        const [firstName, ...lastNameParts] = user.full_name.split(' ');
        return {
          ...user,
          firstName,
          lastName: lastNameParts.join(' ') || '',
          phoneNumber: user.phone_number || t('setting.noPhone'),
        };
      });

      setUsers(adaptedUsers);
      setTotalPages(response.data.pagesCount);
    } catch (err: unknown) {
      toast.error(t('settings.message.fetchError'));
      throw new Error(`${err}`);
    } finally {
      store.dispatch(setisVisible(false));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, searchTerm, filterByRole, sortOrder]);

  const addUserToList = (newUser: User): void => {
    const adaptedUser = {
      ...newUser,
      fullName: `${newUser.firstName} ${newUser.lastName}`.trim(),
    };
    setUsers((prevUsers) => [adaptedUser, ...prevUsers]);
  };

  return { users, totalPages, loading, error, fetchUsers, addUserToList };
};

export default useFetchUsers;
