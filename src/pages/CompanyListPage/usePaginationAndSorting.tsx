import React, { useState } from 'react';

const usePaginationAndSorting = (initialSortOrder: 'asc' | 'desc' = 'asc') => {
  const [page, setPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  return {
    page,
    setPage,
    sortOrder,
    searchTerm,
    handleSearchChange,
    handlePageChange,
    toggleSortOrder,
  };
};

export default usePaginationAndSorting;
