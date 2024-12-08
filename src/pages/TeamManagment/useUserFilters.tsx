import React, { useState, ChangeEvent } from 'react';

type SortOrder = Record<string, 'asc' | 'desc'>;

interface UseUserFiltersReturn {
  page: number;
  searchTerm: string;
  filterByRole: string;
  sortOrder: SortOrder;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRoleFilterChange: (role: string) => void;
  toggleSortOrder: (key: string) => void;
  handlePageChange: (_: ChangeEvent<unknown>, value: number) => void;
}

const useUserFilters = (): UseUserFiltersReturn => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByRole, setFilterByRole] = useState('');
  const [sortOrder, setSortOrder] = useState<Record<string, 'asc' | 'desc'>>({
    full_name: 'asc',
    email: 'asc',
    phone_number: 'asc',
    role: 'asc',
  });

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleRoleFilterChange = (role: string): void => {
    setFilterByRole(role);
    setPage(1);
  };

  const toggleSortOrder = (key: string): void => {
    const validKeys: Record<string, string> = {
      name: 'full_name',
      email: 'email',
      phoneNumber: 'phone_number',
      role: 'role',
    };

    const sortKey = validKeys[key] || key;

    setSortOrder((prev) => ({
      [sortKey]: prev[sortKey] === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handlePageChange = (
    _: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setPage(value);
  };

  return {
    page,
    searchTerm,
    filterByRole,
    sortOrder,
    handleSearchChange,
    handleRoleFilterChange,
    toggleSortOrder,
    handlePageChange,
  };
};

export default useUserFilters;
