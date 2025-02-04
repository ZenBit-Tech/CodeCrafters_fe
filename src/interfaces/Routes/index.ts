import React, { ChangeEvent } from 'react';

import { StatusEnum } from '@/constants/status';

export interface RouteData {
  route_id: number;
  route_submission_date: string;
  route_arrival_date: string;
  route_status: string;
  route_distance: number;
  route_companyIdId: number;
  route_userIdId: number;
  ordersCount: string;
  failedOrdersCount: number;

  company_id: number;
  company_name: string;
  company_email: string;
  company_logo: string;
  company_createdAt: string;
  company_updatedAt: string;
  company_client_name: string;

  user_id: number;
  user_full_name: string;
  user_email: string;
  user_logo: string;
  user_phone_number: string | null;
  user_role: string;
  user_createdAt: string;
  user_updatedAt: string;
}

export interface Route {
  routeId: number;
  date: string;
  driverFirstName: string;
  driverLastName: string;
  driverPhone: string;
  stopsCount: number;
  routeTime: string;
  distance: number;
  status: StatusEnum;
  failedOrdersCount: number;
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

export interface Filters {
  drivers: string[];
  stops: number[];
  statuses: string[];
}

export interface UseRoutesReturn {
  routes: Route[];
  page: number;
  rowsPerPage: number;
  sortField: string;
  sortDirection: 'asc' | 'desc';
  handleSort: (field: string) => void;
  handlePageChange: (_e: ChangeEvent<unknown>, value: number) => void;
  handleSearchChange: (query: string) => void;
  handleFilterChange: (newFilters: Filters) => void;
  filters: Filters;
  handleCreateRouteClick: () => void;
}

export interface NotificationsData {
  collection_address: string;
  collection_date: Date;
  collection_time_end: string;
  collection_time_start: string;
  failed_reason: string;
  id: number;
  status: StatusEnum;
  user: { id: number; full_name: string; email: string };
}
