import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum OrderStatuses {
  COMPLETED = 'Completed',
  FAILED = 'Failed',
  NOT_ARRIVED = 'Not arrived',
  AT_RISK = 'At Risk',
  UPCOMING = 'Upcoming',
}

export enum RouteStatuses {
  UPCOMING = 'Upcoming',
  AT_RISK = 'At Risk',
  ON_TIME = 'On Time',
  FAILED = 'Failed',
}

export interface RouteInform {
  id: number;
  submission_date: Date;
  arrival_date: Date;
  distance: number;
  status: RouteStatuses;
  driver: {
    id: number;
    full_name: string;
    email: string;
  };
  orders: {
    id: number;
    collection_date: Date;
    collection_time_start: Date;
    collection_time_end: Date;
    collection_address: string;
    status: OrderStatuses;
  }[];
}

interface ChoseRouteState {
  routes: RouteInform[];
}

const initialState: ChoseRouteState = {
  routes: [],
};

const choseRoutes = createSlice({
  name: 'choseRoutes',
  initialState,
  reducers: {
    setChoseRoutes(state, action: PayloadAction<RouteInform[]>) {
      state.routes = action.payload;
    },
  },
});

export const { setChoseRoutes } = choseRoutes.actions;
export default choseRoutes.reducer;
