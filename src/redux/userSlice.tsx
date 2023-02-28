import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: {
    isLogged: any;
    name: string;
    wallet: string;
  };
}

const initialState: UserState = {
  user: {
    isLogged: false,
    name: "",
    wallet: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user.isLogged = false;
      state.user.name = "";
      state.user.wallet = "";
    },
    logInTestUser: (state) => {
      state.user.isLogged = true;
      state.user.name = "Test";
      state.user.wallet = "Test-12345678";
    },
    addName: (state, action: PayloadAction<string>) => {
      state.user.name = action.payload;
    },
  },
});

export const { logInTestUser, addName } = userSlice.actions;

export default userSlice.reducer;
