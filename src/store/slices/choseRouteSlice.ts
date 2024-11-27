import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ChoseRouteState {
  value: number | null;
}

const initialState: ChoseRouteState = {
  value: null,
};

const choseRouteSlice = createSlice({
  name: 'choseRoute',
  initialState,
  reducers: {
    toggleChooseRoute(state, action: PayloadAction<number | null>) {
      if (action.payload === null) {
        state.value = null;
      } else {
        state.value = action.payload;
      }
    },
  },
});

export const { toggleChooseRoute } = choseRouteSlice.actions;
export default choseRouteSlice.reducer;
