import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: 0,
  bookingData: {},
  courtData: {},
  additionalGuests: 0,
  totalGuests: 0,
};

const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    next(state) {
      if (state.currentTab < 2) {
        state.currentTab += 1;
      }
    },

    reset(state) {
      state.currentTab = initialState.currentTab;
      state.bookingData = initialState.bookingData;
    },

    setFormData(state, action) {
      state.bookingData = action.payload;
    },

    setCourtData(state, action) {
      state.courtData = action.payload;
    },

    setTotalGuests(state, action) {
      state.totalGuests = action.payload.totalGuests;
      state.additionalGuests = action.payload.additionalGuests;
    },

    prev(state) {
      if (state.currentTab > 0) {
        state.currentTab -= 1;
      }
    },
  },
});

export const { next, prev, setFormData, setCourtData, setTotalGuests, reset } =
  checkout.actions;
export default checkout.reducer;
