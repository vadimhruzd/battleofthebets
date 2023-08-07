import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://player-auth.services.api.unity.com/v1/users";

export const deleteApi = createApi({
  reducerPath: "deleteApi",
  tagTypes: ["deleteApi"],
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers) => {
      const idtoken = localStorage?.getItem("idToken");
      headers.set("ProjectId", "62cdb128-3951-4c12-a5c3-9ba93bed190d");
      headers.set("Authorization", "Bearer "`${idtoken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    delete: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useDeleteMutation } = deleteApi;
