import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    return {
      user: JSON.parse(savedUser),
      isLoggedIn: true,
    };
  }

  return {
    user: null,
    isLoggedIn: false,
  };
};

const AuthSlice = createSlice({
  name: "auth",

  initialState: getInitialState(),

  reducers: {
    login: (state, action) => {
      const user = action.payload;

      state.user = user;
      state.isLoggedIn = true;

      localStorage.setItem("user", JSON.stringify(user));
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;

      localStorage.removeItem("user")

    },

    register: (state, action) => {
      const newUser = action.payload;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.some(
        (user) => user.userPhoneNumber === newUser.userPhoneNumber,
      );

      if (userExists) {
        return;
      }

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      state.user = newUser;
      state.isLoggedIn = true;

      localStorage.setItem("user", JSON.stringify(newUser));
    },
  },
});

export const { register, logout, login } = AuthSlice.actions;

export default AuthSlice.reducer;
