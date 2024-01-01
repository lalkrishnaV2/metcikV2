import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface UserSignupPayload {
  full_name: string;
  user_name: string;
  email: string;
  password: string;
  phone_number: string;
  country_code: string;
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

export const SignupUser = createAsyncThunk<
  AxiosResponse<any>,
  UserSignupPayload
>("auth/signup", async (userData, { rejectWithValue }) => {
  console.log("backend", process.env.NEXT_APP_SERVER_URL);
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/login/user-signup`,
      userData,
      {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header
          Accept: "application/json", // Correct the Accept header
        },
      }
    );
    return response;
  } catch (error) {
    if ((error as any).response) {
      return rejectWithValue({
        stauts: "error",
        message: (error as any).response.data.message,
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

type RejectedAction = ReturnType<typeof SignupUser.rejected>;

const signupSlice = createSlice({
  name: "auth/signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignupUser.pending, (state) => {
        state.loading = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(
        SignupUser.fulfilled,
        (state, action: PayloadAction<AxiosResponse<any>>) => {
          state.loading = false;
          state.successMessage = action.payload.data.message;
        }
      )
      .addCase(SignupUser.rejected, (state, action: RejectedAction) => {
        state.loading = false;
        state.errorMessage = action.payload?.toString() ?? "";
      });
  },
});

export default signupSlice.reducer;
