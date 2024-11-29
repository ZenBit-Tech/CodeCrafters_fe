import { StatusEnum } from '@/constants/status';
import React from 'react';

export interface Company {
  id: number;
  name: string;
  client_name: string;
  logo: string;
  email: string;
}

export interface User {
  id: number;
  full_name: string;
  email: string;
  phone_number: string | null;
  role: string;
  company_id: Company;
  createdAt: string;
  updatedAt: string;
  logo: string;
}

export interface BackendRoute {
  id: number;
  submission_date: string;
  arrival_date: string;
  distance: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  user_id: User;
  company_id: Company;
}

export interface Route {
  routeId: number;
  date: string;
  driverFirstName: string;
  driverLastName: string;
  driverPhone: string;
  stopsCount: number;
  route_time: string;
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
