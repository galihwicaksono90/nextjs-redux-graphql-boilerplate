import { api as generatedApi } from "./baseGraphql";

export const api = generatedApi.enhanceEndpoints({
  addTagTypes: ["Me"],
  endpoints: {
    Login: {
      invalidatesTags: ["Me"],
    },
    Register: {
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

export const {
  util: { getRunningOperationPromises },
} = api;

export const { Users } = api.endpoints;
