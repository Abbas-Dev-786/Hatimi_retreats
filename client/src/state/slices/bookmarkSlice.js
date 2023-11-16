import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: JSON.parse(localStorage.getItem("bookmarks")) || [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark(state, action) {
      const existingBookmark = state.bookmarks.find(
        (id) => action.payload === id
      );

      if (!existingBookmark) {
        state.bookmarks.push(action.payload);
        localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
      }
    },

    removeBookmark(state, action) {
      state.bookmarks = state.bookmarks.filter((id) => id !== action.payload);

      localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
