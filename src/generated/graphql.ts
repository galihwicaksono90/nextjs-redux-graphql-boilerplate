import { api as generatedApi } from "./baseGraphql";

export const injectedRtkApi = generatedApi.enhanceEndpoints({
  addTagTypes: ["Me", "Post"],
  endpoints: {
    CreatePost: {
      invalidatesTags: ["Post"],
    },
    Login: {
      invalidatesTags: ["Me"],
    },
    Register: {
      invalidatesTags: ["Me"],
    },
    logout: {
      invalidatesTags: ["Me"],
    },
    DeletePost: {
      invalidatesTags: [{ type: "Post", id: 1 }],
    },
    Me: {
      providesTags: ["Me"],
    },
    Posts: {
      providesTags: ["Post"],
    },
    GetUserPosts: {
      providesTags: [{ type: "Post", id: 1 }],
    },
  },
});

export const {
  endpoints,
  util: { getRunningOperationPromises },
} = injectedRtkApi;

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,
  useGetUserPostsQuery,
  useLazyGetUserPostsQuery,
  useMeQuery,
  useLazyMeQuery,
  usePostsQuery,
  useLazyPostsQuery,
  useUsersQuery,
  useLazyUsersQuery,
} = injectedRtkApi;
