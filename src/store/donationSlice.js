import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPaymentMethod: null,
  selectedAmount: null,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.selectedPaymentMethod = action.payload;
    },
    setAmount: (state, action) => {
      state.selectedAmount = action.payload;
    },
  },
});

export const { setPaymentMethod, setAmount } = donationSlice.actions;

export default donationSlice.reducer;
