import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingData: {},
};

const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingData(state, action) {
      state.bookingData = action.payload;
    },
  },
});

export const { setBookingData } = booking.actions;
export default booking.reducer;
