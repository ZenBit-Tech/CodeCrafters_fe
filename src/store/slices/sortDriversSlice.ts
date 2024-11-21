import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchDriversInterface {
  value: 'ASC' | 'DESC';
  search: string;
}

const initialState: SearchDriversInterface = {
  value: 'ASC',
  search: '',
};

const sortDriversSlice = createSlice({
  name: 'sortDriversSlice',
  initialState,
  reducers: {
    toggleSortDriversByName(store) {
      if (store.value === 'ASC') {
        store.value = 'DESC';
      } else {
        store.value = 'ASC';
      }
    },
    setDriverSearchString(store, action: PayloadAction<string>) {
      store.search = action.payload;
    },
  },
});

export const { toggleSortDriversByName, setDriverSearchString } =
  sortDriversSlice.actions;
export default sortDriversSlice.reducer;
