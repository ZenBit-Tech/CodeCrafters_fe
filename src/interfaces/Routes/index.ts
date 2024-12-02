import { StatusEnum } from '@/constants/status';
import React from 'react';

export interface RouteData {
  route_id: number;
  route_submission_date: string;
  route_arrival_date: string;
  route_status: string;
  route_distance: number;
  route_companyIdId: number;
  route_userIdId: number;
  ordersCount: string;

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
