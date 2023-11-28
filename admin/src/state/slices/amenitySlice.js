import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
  isNew: false,
};

const amenitySlice = createSlice({
  name: "amenity",
  initialState,
  reducers: {
    setAmenityData(state, action) {
      state.form = { ...state.form, ...action.payload };
      state.isNew = false;
    },

    setNew(state) {
      state.isNew = true;
      state.form = {};
    },
    resetAmenityData(state) {
      state.form = {};
      state.isNew = false;
    },
  },
});

export const { setAmenityData, resetAmenityData, setNew } =
  amenitySlice.actions;
export default amenitySlice.reducer;
