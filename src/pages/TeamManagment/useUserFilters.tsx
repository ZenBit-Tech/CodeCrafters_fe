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
  triggerSearch: () => void;
  pendingSearchTerm: string;
  handleKeyDown: (event: React.KeyboardEvent) => void;
}

const useUserFilters = (): UseUserFiltersReturn => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pendingSearchTerm, setPendingSearchTerm] = useState<string>('');
  const [filterByRole, setFilterByRole] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<Record<string, 'asc' | 'desc'>>({
    full_name: 'asc',
    email: 'asc',
    phone_number: 'asc',
    role: 'asc',
  });

  const triggerSearch = (): void => {
    setSearchTerm(pendingSearchTerm);
    setPage(1);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPendingSearchTerm(event.target.value);
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

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      triggerSearch();
    }
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
    triggerSearch,
    pendingSearchTerm,
    handleKeyDown,
  };
};

export default useUserFilters;
