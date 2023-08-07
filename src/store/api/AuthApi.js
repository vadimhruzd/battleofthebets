import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL =
  "https://player-auth.services.api.unity.com/v1/authentication/external-token/google.com";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["authApi"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (token) => {
        return {
          url: URL,
          method: "POST",
          body: {
            token: token,
            signInOnly: false,
          },
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            headers.set("ProjectId", "62cdb128-3951-4c12-a5c3-9ba93bed190d");
            headers.set("UnityEnvironment", "production");
            return headers;
          },
        };
      },
    }),
  }),
});

export const { useAuthMutation } = authApi;
