import { createSlice, PayloadAction, AsyncThunkAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface UserSigninPayload {
  email: string;
  password: string;
}

interface SigninState {
  loading: boolean;
  successMessage: string;
  errorMessage: string;
}

const initialState: SigninState = {
  loading: false,
  successMessage: "",
  errorMessage: "",
};

export const UserSignin = createAsyncThunk<
  AxiosResponse<any>,
  UserSigninPayload
>("auth/signin", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/login/user-signin`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    if ((error as any).response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      return rejectWithValue({
        status: "error",
        message: (error as any).response.data.message, // Access the error message here
      });
    } else if ((error as any).request) {
      // The request was made but no response was received
      return rejectWithValue({
        status: "error",
        message: "No response received from the server",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      return rejectWithValue({
        status: "error",
        message: "An unexpected error occurred",
      });
    }
  }
});

// Define the type for the rejected action
type RejectedAction = ReturnType<typeof UserSignin.rejected>;

const signinSlice = createSlice({
  name: "auth/signin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserSignin.pending, (state) => {
        state.loading = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(
        UserSignin.fulfilled,
        (state, action: PayloadAction<AxiosResponse<any>>) => {
          state.loading = false;
          state.successMessage = action.payload?.data ?? "";
        }
      )
      .addCase(UserSignin.rejected, (state, action: RejectedAction) => {
        state.loading = false;
        state.errorMessage = action.payload?.toString() ?? "";
      });
  },
});

export default signinSlice.reducer;
