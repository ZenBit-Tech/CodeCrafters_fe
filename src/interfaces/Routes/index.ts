import React from 'react';

import { StatusEnum } from '@/constants/status';

export interface Route {
  routeId: string;
  date: string;
  driverFirstName: string;
  driverLastName: string;
  driverPhone: string;
  stopsCount: number;
  workingHours: string;
  distance: number;
  status: StatusEnum;
}

export interface UseRoutesPage {
  page: number;
  totalPages: number;
  rowsPerPage: number;
  sortedData: Route[];
  startIndex: number;
  endIndex: number;
  totalRows: number;
  sortField: string | null;
  sortDirection: 'asc' | 'desc';
  statusFilter: string | null;
  setPage: (page: number) => void;
  setSortField: (field: string) => void;
  setSortDirection: (direction: 'asc' | 'desc') => void;
  setStatusFilter: (status: string | null) => void;
  handleSort: (field: string) => void;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}
