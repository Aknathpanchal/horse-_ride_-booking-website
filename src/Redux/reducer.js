import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
  bookingDetails: null,
};

const reducer = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    resetBooking: (state) => {
      state.step = 0;
      state.bookingDetails = null;
    },
  },
});

export const { setStep, setBookingDetails, resetBooking } = reducer.actions;

export default reducer.reducer;
