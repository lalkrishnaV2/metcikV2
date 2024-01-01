import { configureStore } from "@reduxjs/toolkit";
import signgUpReducer from "./slices/user/userSignupSlice";
import signInReducer from "./slices/user/userSigninSlice";
import profileReducer from "./slices/user/userDetailsSlice";

export const store = configureStore({
  reducer: {
    signup: signgUpReducer,
    signin: signInReducer,
    profile: profileReducer,
  },
});
