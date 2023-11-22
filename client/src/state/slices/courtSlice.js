import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courtData: {},
  totalCounts: 0,
};

const court = createSlice({
  name: "court",
  initialState,
  reducers: {
    setCourtData(state, action) {
      state.courtData = action.payload;
    },

    setTotalCounts(state, action) {
      state.totalCounts = action.payload;
    },
  },
});

export const { setCourtData, setTotalCounts } = court.actions;
export default court.reducer;
