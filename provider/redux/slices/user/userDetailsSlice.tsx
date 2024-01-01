import { createSlice, PayloadAction, AsyncThunkAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// interface UserProfilePayload {
//   email: string;
//   password: string;
// }

interface ProfileState {
  loading: boolean;
  successMessage: string;
  errorMessage: string;
}

const initialState: ProfileState = {
  loading: false,
  successMessage: "",
  errorMessage: "",
};

export const UserDetails = createAsyncThunk<AxiosResponse<any>>(
  "auth/profile",
  async (_, { rejectWithValue }) => {
    const userId = localStorage.getItem("USER_ID");

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/get-one-user/${userId}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // "Authorization":
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
  }
);

// Define the type for the rejected action
type RejectedAction = ReturnType<typeof UserDetails.rejected>;

const profileSlice = createSlice({
  name: "auth/profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserDetails.pending, (state) => {
        state.loading = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(
        UserDetails.fulfilled,
        (state, action: PayloadAction<AxiosResponse<any>>) => {
          state.loading = false;
          state.successMessage = action.payload?.data ?? "";
        }
      )
      .addCase(UserDetails.rejected, (state, action: RejectedAction) => {
        state.loading = false;
        state.errorMessage = action.payload?.toString() ?? "";
      });
  },
});

export default profileSlice.reducer;
