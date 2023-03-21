import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:{},
  isLoading: false,
  isError: false,
  error: "",
};
export const getUsers = createAsyncThunk("users/getUsers", async (page) => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await res.json();
    return data;
  });
const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(getUsers.pending, (state, action) => {
         state.isError = false;
         state.isLoading = true;
        })
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      builder.addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoading = {};
        state.isError = true;
        state.error = action.error.message
      });
    },
  });

export default usersSlice.reducer;
