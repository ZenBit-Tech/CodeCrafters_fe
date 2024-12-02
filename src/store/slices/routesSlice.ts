import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Route } from '@/interfaces/Routes';

interface RoutesState {
  routes: Route[];
  page: number;
  sortField: string;
  sortDirection: 'asc' | 'desc';
  statusFilter: string | null;
  rowsPerPage: number;
  startDate: string;
  endDate: string;
}

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

const initialState: RoutesState = {
  routes: [],
  page: 1,
  sortField: 'submission_date',
  sortDirection: 'asc',
  statusFilter: null,
  rowsPerPage: 10,
  startDate: formattedDate,
  endDate: formattedDate,
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes(state, action: PayloadAction<Route[]>) {
      state.routes = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSortField(state, action: PayloadAction<string>) {
      state.sortField = action.payload;
    },
    setSortDirection(state, action: PayloadAction<'asc' | 'desc'>) {
      state.sortDirection = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<string | null>) {
      state.statusFilter = action.payload;
    },
    setStartDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string>) {
      state.endDate = action.payload;
    },
  },
});

export const {
  setRoutes,
  setPage,
  setSortField,
  setSortDirection,
  setStatusFilter,
  setStartDate,
  setEndDate,
} = routesSlice.actions;

export default routesSlice.reducer;
