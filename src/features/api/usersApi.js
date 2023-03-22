import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page) => `users?page=${page}`,
      providesTags: ["Users"],
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    userRegister: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getSingleUser: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useUserLoginMutation, useUserRegisterMutation, useGetSingleUserQuery } = usersApi;
