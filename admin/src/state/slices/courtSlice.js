import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
  isEdit: false,
  editForm: {},
};

const courtSlice = createSlice({
  name: "court",
  initialState,
  reducers: {
    setNewCourtData(state, action) {
      state.form = { ...state.form, ...action.payload };
    },

    resetNewCourtData(state) {
      state.form = initialState.form;
    },

    setEditCourtData(state, action) {
      state.editForm = { ...state.editForm, ...action.payload };
    },

    resetEditCourtData(state) {
      state.editForm = initialState.editForm;
    },
  },
});

export const {
  setNewCourtData,
  resetNewCourtData,
  setEditCourtData,
  resetEditCourtData,
} = courtSlice.actions;

export default courtSlice.reducer;
