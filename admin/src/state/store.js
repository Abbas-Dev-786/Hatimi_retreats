import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import courtReducer from "./slices/courtSlice";
import amenityReducer from "./slices/amenitySlice";
import ruleReducer from "./slices/ruleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    court: courtReducer,
    amenity: amenityReducer,
    rule: ruleReducer,
  },
});
