import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import bookmarkReducer from "./slices/bookmarkSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    bookmarks: bookmarkReducer,
  },
});
