import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: 0,
  bookingData: {},
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

    prev(state) {
      if (state.currentTab > 0) {
        state.currentTab -= 1;
      }
    },
  },
});

export const { next, prev, setFormData, reset } = checkout.actions;
export default checkout.reducer;
