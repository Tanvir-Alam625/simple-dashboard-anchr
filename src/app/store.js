import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../features/api/usersApi";

const store = configureStore({
    reducer: {
      // users: usersSlice,
      [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)
  });
export default store;
