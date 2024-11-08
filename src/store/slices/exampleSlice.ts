import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  message: string;
}

const initialState: ExampleState = {
  message: 'Hello from Redux!',
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    updateMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { updateMessage } = exampleSlice.actions;

export default exampleSlice.reducer;
