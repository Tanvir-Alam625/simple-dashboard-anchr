import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const getUsers = () =>
  createAsyncThunk("users/get", async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    return data.data;
  });
const usersSlice = () =>
  createSlice({
    name: "users",
    extraReducers: (builder) => {
      builder
        .addCase(getUsers.pending, (state, action) => {
          const newState = { ...state, isLoading: true, isError: false };
          state = newState;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
          const newState = {
            ...state,
            user: action.payload,
            isLoading: false,
            isError: false,
          };
          state = newState;
        })
        .addCase(getUsers.rejected, (state, action) => {
          const newState = {
            ...state,
            users: [],
            isLoading: false,
            isError: true,
            error: action.error.message,
          };
          state = newState;
        });
    },
  });

export default usersSlice.reducers;
