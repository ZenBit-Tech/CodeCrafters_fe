import { Driver, Order } from '@/interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CreateRouteInterface {
  routeDate: Date;
  checkedOrders: Order[];
  drivers: Driver[];
}

const initialState: CreateRouteInterface = {
  routeDate: new Date(),
  checkedOrders: [],
  drivers: [],
};

const createRouteSlice = createSlice({
  name: 'createRouteSettings',
  initialState,
  reducers: {
    setRouteDate(store, action: PayloadAction<Date>) {
      store.routeDate = action.payload;
    },
    addNewOrder(store, action: PayloadAction<Order>) {
      store.checkedOrders.push(action.payload);
    },
    removeOrder(store, action: PayloadAction<number>) {
      store.checkedOrders.filter((order) => order.id !== action.payload);
    },
    addNewDriver(store, action: PayloadAction<Driver>) {
      store.drivers.push(action.payload);
    },
    removeDriver(store, action: PayloadAction<number>) {
      store.drivers.filter((driver) => driver.id !== action.payload);
    },
  },
});

export const {
  setRouteDate,
  addNewDriver,
  addNewOrder,
  removeDriver,
  removeOrder,
} = createRouteSlice.actions;
export default createRouteSlice.reducer;
