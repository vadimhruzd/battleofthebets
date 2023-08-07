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
            headers.set("ProjectId", "dd55fb39-3557-4a96-82fd-90e986cd5938");
            headers.set("UnityEnvironment", "production");
            return headers;
          },
        };
      },
    }),
  }),
});

export const { useAuthMutation } = authApi;
