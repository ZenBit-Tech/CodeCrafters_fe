import React, { useState } from 'react';

const useUserFilters = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByRole, setFilterByRole] = useState('');
  const [sortOrder, setSortOrder] = useState<Record<string, 'asc' | 'desc'>>({
    full_name: 'asc',
    email: 'asc',
    phone_number: 'asc',
    role: 'asc',
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleRoleFilterChange = (role: string) => {
    setFilterByRole(role);
    setPage(1);
  };

  const toggleSortOrder = (key: string) => {
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

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
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
