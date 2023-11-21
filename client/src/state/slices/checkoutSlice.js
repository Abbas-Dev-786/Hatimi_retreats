import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: 0,
  bookingData: {},
  maxGuests: 0,
  additionalGuests: 0,
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

    setMaxGuests(state, action) {
      state.maxGuests = action.payload;
    },

    setAddtionalGuests(state, action) {
      state.additionalGuests = action.payload;
    },

    prev(state) {
      if (state.currentTab > 0) {
        state.currentTab -= 1;
      }
    },
  },
});

export const {
  next,
  prev,
  setFormData,
  setMaxGuests,
  setAddtionalGuests,
  reset,
} = checkout.actions;
export default checkout.reducer;
