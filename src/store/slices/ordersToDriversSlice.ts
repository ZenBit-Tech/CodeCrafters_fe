import { Driver, Order } from '@/interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface OrderToDriversState {
  value: {
    driver: Driver;
    orders: Order[];
  }[];
}

const initialState: OrderToDriversState = {
  value: [],
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
  },
});

export const { setOrdersToDrivers } = ordersToDriversSlice.actions;
export default ordersToDriversSlice.reducer;
