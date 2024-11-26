import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RouteDistanceState {
  value: { driverId: number; distance: number }[];
}

const initialState: RouteDistanceState = {
  value: [],
};

const routeDistanceSlice = createSlice({
  name: 'routeDistance',
  initialState,
  reducers: {
    addDistance(
      state,
      action: PayloadAction<{ driverId: number; distance: number }>
    ) {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addDistance } = routeDistanceSlice.actions;
export default routeDistanceSlice.reducer;
