import { createSlice } from '@reduxjs/toolkit';

interface tokenModalInterface {
  isModalOpen: boolean;
}

const initialState: tokenModalInterface = {
  isModalOpen: false,
};

const tokenModalSlice = createSlice({
  name: 'tokenModal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = tokenModalSlice.actions;

export default tokenModalSlice.reducer;
