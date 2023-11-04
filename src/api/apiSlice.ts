import { UserInterface } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookie from "js-cookie";
const production = "https://codestream.netlify.app/api/";
const local = "http://localhost:3000/api/";

const token = Cookie.get("codestreamToken");

// Define a service using a base URL and expected endpoints
export const MernApi = createApi({
  reducerPath: "MernApi",
  baseQuery: fetchBaseQuery({
    baseUrl: local,
    headers: {
      Authorization: `${token}`,
    },
  }),
  endpoints: (builder) => ({
    getAdminData: builder.query({
      query: (name) => `admin`,
    }),
    adminQuery: builder.mutation({
      query: (data) => ({
        url: `admin`,

        method: "POST",
        body: data,
      }),
    }),
    mernQuery: builder.mutation({
      query: (data) => ({
        url: `MERN`,
        method: "POST",
        body: data,
      }),
    }),
    profileQuery: builder.mutation({
      query: (data) => ({
        url: `profile`,

        method: "POST",
        body: data,
      }),
    }),
    sendPayment: builder.mutation({
      query: (data) => ({
        url: `profile`,

        method: "POST",
        body: data,
      }),
    }),
    getProfileData: builder.query({
      query: (name) => `profile`,
    }),
    signIn: builder.mutation<UserInterface, any>({
      query: (data) => ({
        url: `auth/login`,

        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => {
        Cookie.set("codestreamToken", response.token.value, {
          expires: new Date(response.token.expires),
        });
        Cookie.set("codestreamUserId", response.UserData.id, {
          expires: new Date(response.token.expires),
        });
        return response.UserData || {};
      },
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `auth/register`,

        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => {
        Cookie.set("codestreamToken", response.token.value, {
          expires: new Date(response.token.expires),
        });
        Cookie.set("codestreamUserId", response.UserData.id, {
          expires: new Date(response.token.expires),
        });
        return response.UserData || {};
      },
    }),
    getUser: builder.query({
      query: () => `users/getuser/${Cookie.get("codestreamUserId")}`,
      transformResponse: (response: any) => {
        return response;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAdminDataQuery,
  useAdminQueryMutation,
  useMernQueryMutation,
  useGetProfileDataQuery,
  useProfileQueryMutation,
  useSignInMutation,
  useSignUpMutation,
  useSendPaymentMutation,
  useGetUserQuery,
} = MernApi;
