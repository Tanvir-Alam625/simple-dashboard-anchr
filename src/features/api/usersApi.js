import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    tagTypes: ["Users"],
    endpoints: (builder) =>({
        getUsers: builder.query({
            query: (page) => `users?page=${page}`,
            providesTags: ["Users"]
        }),

    })
});

export const {useGetUsersQuery} =usersApi;