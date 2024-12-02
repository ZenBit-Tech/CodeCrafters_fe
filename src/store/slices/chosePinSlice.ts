import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LatLngExpression } from 'leaflet';

interface ChosePinState {
  value: string | null;
  coordinates: LatLngExpression | null;
}

const initialState: ChosePinState = {
  value: null,
  coordinates: null,
};

const chosePinSlice = createSlice({
  name: 'chosePinSlice',
  initialState,
  reducers: {
    toggleChosePin(
      state,
      action: PayloadAction<{
        value: string | null;
        coordinates: LatLngExpression | null;
      }>
    ) {
      state.value = action.payload.value;
      state.coordinates = action.payload.coordinates;
    },
  },
});

export const { toggleChosePin } = chosePinSlice.actions;
export default chosePinSlice.reducer;
