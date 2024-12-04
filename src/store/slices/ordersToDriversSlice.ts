import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Driver, Order } from '@/interfaces/interfaces';

interface OrderToDriversState {
  value: {
    driver: Driver;
    orders: Order[];
  }[];
  notAssignedOrders: Order[];
  distances: { driverId: number; distance: number }[];
}

const initialState: OrderToDriversState = {
  value: [],
  notAssignedOrders: [],
  distances: [],
};

const ordersToDriversSlice = createSlice({
  name: 'ordersToDrivers',
  initialState,
  reducers: {
    setOrdersToDrivers(
      state,
      action: PayloadAction<{
        value: {
          driver: Driver;
          orders: Order[];
          notAssignedOrders: Order[];
        }[];
        notAssignedOrders: Order[];
      }>
    ) {
      state.value = action.payload.value;
      state.notAssignedOrders = action.payload.notAssignedOrders;
    },
    removeNotAssignedOrder(state, action: PayloadAction<number>) {
      state.notAssignedOrders = state.notAssignedOrders.filter(
        (order) => order.id !== action.payload
      );
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
    changeRoutes(
      state,
      action: PayloadAction<{
        currentRouteId: number;
        draggedOrder: Order;
        newRouteId: number;
      }>
    ) {
      state.value = state.value.map((route) => {
        if (route.driver.id === action.payload.currentRouteId) {
          route.orders = route.orders.filter(
            (order) => order.id !== action.payload.draggedOrder.id
          );
        }

        if (route.driver.id === action.payload.newRouteId) {
          route.orders.push(action.payload.draggedOrder);
          route.orders.sort(
            (a: Order, b: Order) =>
              new Date(a.collection_time_start).getTime() -
              new Date(b.collection_time_start).getTime()
          );
        }

        return route;
      });
    },
  },
});

export const {
  setOrdersToDrivers,
  addDistance,
  clearDistances,
  changeRoutes,
  removeNotAssignedOrder,
} = ordersToDriversSlice.actions;
export default ordersToDriversSlice.reducer;
