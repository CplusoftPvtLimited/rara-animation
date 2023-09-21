import { createSlice } from '@reduxjs/toolkit';

const initialState = 'once';

const paymentFrequencySlice = createSlice({
  name: 'paymentFrequency',
  initialState,
  reducers: {
    setFrequency: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setFrequency } = paymentFrequencySlice.actions;

export default paymentFrequencySlice.reducer;
