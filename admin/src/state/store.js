import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import courtReducer from "./slices/courtSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    court: courtReducer,
  },
});
