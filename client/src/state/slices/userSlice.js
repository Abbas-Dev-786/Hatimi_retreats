import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user"))?.user || {
    _id: "65696d6a9e8f67e7e74b2500",
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
    createdAt: "2023-12-01T05:21:46.339Z",
    __v: 0,
    id: "65696d6a9e8f67e7e74b2500",
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
