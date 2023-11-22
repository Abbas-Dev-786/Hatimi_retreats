import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user"))?.user || {
    _id: "654dd3ac51e42dde00c4e033",
    firstName: "Test",
    lastName: "user",
    email: "test@gmail.com",
    profileImg: "testImg",
    phone: "1234567890",
    city: "test",
    country: "test",
    address: "test address",
    role: "user",
    its: "12345678",
    createdAt: "2023-11-10T06:54:36.219Z",
    __v: 0,
    id: "654dd3ac51e42dde00c4e033",
  },
  token: JSON.parse(localStorage.getItem("user"))?.token,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout(state) {
      state.user = {};
      state.token = "";

      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
