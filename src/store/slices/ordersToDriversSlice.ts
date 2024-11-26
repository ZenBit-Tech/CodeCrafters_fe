import { Driver, Order } from '@/interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OrderToDriversState {
  value: {
    driver: Driver;
    orders: Order[];
  }[];
  distances: { driverId: number; distance: number }[];
}

const initialState: OrderToDriversState = {
  value: [],
  distances: [],
};

const ordersToDriversSlice = createSlice({
  name: 'ordersToDrivers',
  initialState,
  reducers: {
    setOrdersToDrivers(
      state,
      action: PayloadAction<{ driver: Driver; orders: Order[] }[]>
    ) {
      state.value = action.payload;
    },
    addDistance(
      state,
      action: PayloadAction<{ driverId: number; distance: number }>
    ) {
      state.distances = [...state.distances, action.payload];
    },
    clearDistances(state) {
      state.distances = [];
    },
  },
});

export const { setOrdersToDrivers, addDistance, clearDistances } =
  ordersToDriversSlice.actions;
export default ordersToDriversSlice.reducer;
