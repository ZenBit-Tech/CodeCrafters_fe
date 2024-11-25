import React, { useState, useMemo } from 'react';

import { StatusEnum } from '@/constants/status';
import { Route, UseRoutesPage } from '@/interfaces/Routes';

// Dummy data. Change with the real one from BE
const mockData: Route[] = Array.from({ length: 20 }, (_, index) => ({
  routeId: `ID${index + 1}`,
  date: '25 Aug 2024',
  driverFirstName: 'John',
  driverLastName: `Doe ${index + 1}`,
  driverPhone: '123-456-7890',
  stopsCount: 5 + index,
  workingHours: `${8 + (index % 3)}:00-${9 + (index % 3)}:00`,
  distance: 50 + index * 5,
  status: index % 2 === 0 ? StatusEnum.COMPLETED : StatusEnum.UPCOMING,
}));

export const useRoutes = (): UseRoutesPage => {
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const rowsPerPage = 10;
  const totalRows = mockData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows);

  const handleSort = (field: string): void => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleChangePage = (
    _e: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setPage(value);
  };

  const sortedData = useMemo(() => {
    return [...mockData]
      .filter((item) => (statusFilter ? item.status === statusFilter : true))
      .sort((a, b) => {
        if (!sortField) return 0;
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
  }, [statusFilter, sortField, sortDirection]);

  return {
    page,
    totalPages,
    rowsPerPage,
    sortedData,
    startIndex,
    endIndex,
    totalRows,
    sortField,
    sortDirection,
    statusFilter,
    setPage,
    setSortField,
    setSortDirection,
    setStatusFilter,
    handleSort,
    handleChangePage,
  };
};
