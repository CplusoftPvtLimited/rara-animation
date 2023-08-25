import { configureStore } from '@reduxjs/toolkit';
import donationReducer from './donationSlice';
import paymentFrequencyReducer from './paymentFrequencySlice';

const store = configureStore({
  reducer: {
    donation: donationReducer,
    paymentFrequency: paymentFrequencyReducer,
  },
});

export default store;
