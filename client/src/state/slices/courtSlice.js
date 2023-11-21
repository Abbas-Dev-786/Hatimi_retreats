import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courtData: {},
};

const court = createSlice({
  name: "court",
  initialState,
  reducers: {
    setCourtData(state, action) {
      state.courtData = action.payload;
    },
  },
});

export const { setCourtData } = court.actions;
export default court.reducer;
