import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const MernApi = createApi({
  reducerPath: 'MernApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAdminData: builder.query({
      query: (name) => `admin`,
    }),
    adminQuery: builder.mutation({
        query: (data) => ({
          url: `admin`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: data,
        }),
      }),
    mernQuery: builder.mutation({
        query: (data) => ({
          url: `MERN`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: data,
        }),
      }),
    profileQuery: builder.mutation({
        query: (data) => ({
          url: `profile`,
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: data,
        }),
      }),
      getProfileData: builder.query({
        query: (name) => `profile`,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAdminDataQuery,useAdminQueryMutation,useMernQueryMutation,useGetProfileDataQuery,useProfileQueryMutation } = MernApi