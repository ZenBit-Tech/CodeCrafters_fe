import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Driver } from '@/interfaces/interfaces';

interface CreateRouteInterface {
  routeDate: Date;
  checkedOrders: number[];
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
    addNewOrder(store, action: PayloadAction<number>) {
      store.checkedOrders.push(action.payload);
    },
    removeOrder(store, action: PayloadAction<number>) {
      store.checkedOrders = store.checkedOrders.filter(
        (order) => order !== action.payload
      );
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
