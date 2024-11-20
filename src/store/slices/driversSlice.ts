import { Customer } from '@/interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DriversSliceInterface {
  drivers: Customer[];
}

const initialState: DriversSliceInterface = {
  drivers: [],
};

const driversSlice = createSlice({
  name: 'driversSlice',
  initialState,
  reducers: {
    setDrivers(store, action: PayloadAction<Customer[]>) {
      store.drivers = action.payload;
    },
  },
});

export const { setDrivers } = driversSlice.actions;
export default driversSlice.reducer;
