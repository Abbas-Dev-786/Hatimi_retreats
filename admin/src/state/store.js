import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import courtReducer from "./slices/courtSlice";
import amenityReducer from "./slices/amenitySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    court: courtReducer,
    amenity: amenityReducer,
  },
});
