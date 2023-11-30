import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user"))?.user || {
    _id: "6568a223e5c51de608a59f45",
    firstName: "Huzaifa",
    lastName: "Tayyab Ali",
    email: "test@gmail.com",
    profileImg: "vmuwrstidlwabjhqivhu.jpg",
    phone: "1234567890",
    city: "Indore",
    country: "India",
    address: "test address",
    role: "user",
    its: "12345678",
    createdAt: "2023-11-30T14:54:27.071Z",
    __v: 0,
    id: "6568a223e5c51de608a59f45",
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
