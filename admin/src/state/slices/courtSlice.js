import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
  isEdit: false,
};

const courtSlice = createSlice({
  name: "court",
  initialState,
  reducers: {
    setNewCourtData(state, action) {
      state.form = { ...state.form, ...action.payload };
    },

    resetNewCourtData(state) {
      state.form = initialState;
    },
  },
});

export const { setNewCourtData, resetNewCourtData } = courtSlice.actions;
export default courtSlice.reducer;
