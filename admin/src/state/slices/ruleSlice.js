import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
  isNew: false,
};

const ruleSlice = createSlice({
  name: "rule",
  initialState,
  reducers: {
    setRuleData(state, action) {
      state.form = { ...state.form, ...action.payload };
      state.isNew = false;
    },

    setNew(state) {
      state.isNew = true;
      state.form = {};
    },
    resetRuleData(state) {
      state.form = {};
      state.isNew = false;
    },
  },
});

export const { setRuleData, resetRuleData, setNew } = ruleSlice.actions;
export default ruleSlice.reducer;
