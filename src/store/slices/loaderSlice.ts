import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface loaderState {
  isVisible: boolean;
}

const initialState: loaderState = {
  isVisible: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setisVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { setisVisible } = loaderSlice.actions;

export default loaderSlice.reducer;
