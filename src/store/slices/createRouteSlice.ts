import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CreateRouteInterface {
  routeDate: Date;
  checkedOrders: number[];
  drivers: number[];
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
        (id) => id !== action.payload
      );
    },
    clearCheckedOrders(state) {
      state.checkedOrders = [];
    },
    addMultipleOrders(state, action: PayloadAction<number[]>) {
      state.checkedOrders = action.payload;
    },
    addNewDriver(store, action: PayloadAction<number>) {
      store.drivers.push(action.payload);
    },
    removeDriver(store, action: PayloadAction<number>) {
      store.drivers = store.drivers.filter(
        (driverId) => driverId !== action.payload
      );
    },
    resetCreateRouteSettings(store) {
      store.checkedOrders = [];
      store.drivers = [];
      store.routeDate = new Date();
    },
  },
});

export const {
  setRouteDate,
  addNewDriver,
  addNewOrder,
  removeDriver,
  removeOrder,
  clearCheckedOrders,
  addMultipleOrders,
  resetCreateRouteSettings,
} = createRouteSlice.actions;
export default createRouteSlice.reducer;
