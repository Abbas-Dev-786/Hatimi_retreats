import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import bookmarkReducer from "./slices/bookmarkSlice";
import checkoutReducer from "./slices/checkoutSlice";
import bookingReducer from "./slices/bookingSlice";
import courtReducer from "./slices/courtSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    bookmarks: bookmarkReducer,
    checkout: checkoutReducer,
    booking: bookingReducer,
    court: courtReducer,
  },
});
