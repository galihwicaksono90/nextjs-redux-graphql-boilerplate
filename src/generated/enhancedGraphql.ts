import { api as generatedApi } from "./graphql";

export const api = generatedApi.enhanceEndpoints({
  addTagTypes: ["Me"],
  endpoints: {
    Login: {
      invalidatesTags: ["Me"],
    },
    Me: {
      providesTags: ["Me"],
    },
  },
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
  useLazyMeQuery,
  useUsersQuery,
  useLazyUsersQuery,
} = api;
