import { api } from 'features/api/apiSlice';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Auth = FieldErrors | User;

export type FieldError = {
  __typename?: 'FieldError';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type FieldErrors = {
  __typename?: 'FieldErrors';
  errors?: Maybe<Array<Maybe<FieldError>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostPayload;
  deletePost: Post;
  login?: Maybe<Auth>;
  logout?: Maybe<Scalars['Boolean']>;
  register: Auth;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostPayload = FieldErrors | Post;

export type Query = {
  __typename?: 'Query';
  getPostById: Post;
  getUserPosts: Array<Maybe<Post>>;
  me?: Maybe<User>;
  posts: Array<Post>;
  users: Array<User>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  posts: Array<Post>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename: 'FieldErrors', errors?: Array<{ __typename?: 'FieldError', message?: string | null, field?: string | null } | null> | null } | { __typename: 'Post', id: number, title: string } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: number, title: string, createdBy?: { __typename?: 'User', username: string, id: number } | null } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename: 'FieldErrors', errors?: Array<{ __typename?: 'FieldError', field?: string | null, message?: string | null } | null> | null } | { __typename: 'User', id: number, username: string } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: boolean | null };

export type RegisterMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename: 'FieldErrors', errors?: Array<{ __typename?: 'FieldError', message?: string | null, field?: string | null } | null> | null } | { __typename: 'User', id: number, username: string } };

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', getPostById: { __typename?: 'Post', id: number, title: string, createdAt: any, updatedAt: any, createdBy?: { __typename?: 'User', id: number, username: string } | null } };

export type GetUserPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserPostsQuery = { __typename?: 'Query', getUserPosts: Array<{ __typename?: 'Post', id: number, title: string, createdAt: any, updatedAt: any } | null> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: number, title: string }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, username: string }> };

export const RegularUserFragmentDoc = `
    fragment RegularUser on User {
  id
  username
}
    `;
export const CreatePostDocument = `
    mutation CreatePost($title: String!) {
  createPost(title: $title) {
    __typename
    ... on Post {
      id
      title
    }
    ... on FieldErrors {
      errors {
        message
        field
      }
    }
  }
}
    `;
export const DeletePostDocument = `
    mutation DeletePost($id: Int!) {
  deletePost(id: $id) {
    id
    title
    createdBy {
      username
      id
    }
  }
}
    `;
export const LoginDocument = `
    mutation Login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    __typename
    ... on FieldErrors {
      errors {
        field
        message
      }
    }
    ... on User {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export const LogoutDocument = `
    mutation logout {
  logout
}
    `;
export const RegisterDocument = `
    mutation Register($password: String!, $username: String!) {
  register(username: $username, password: $password) {
    __typename
    ... on User {
      id
      username
    }
    ... on FieldErrors {
      errors {
        message
        field
      }
    }
  }
}
    `;
export const GetPostByIdDocument = `
    query GetPostById($id: Int!) {
  getPostById(id: $id) {
    id
    title
    createdAt
    updatedAt
    createdBy {
      id
      username
    }
  }
}
    `;
export const GetUserPostsDocument = `
    query GetUserPosts {
  getUserPosts {
    id
    title
    createdAt
    updatedAt
  }
}
    `;
export const MeDocument = `
    query Me {
  me {
    id
    username
  }
}
    `;
export const PostsDocument = `
    query Posts {
  posts {
    id
    title
  }
}
    `;
export const UsersDocument = `
    query Users {
  users {
    id
    username
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    CreatePost: build.mutation<CreatePostMutation, CreatePostMutationVariables>({
      query: (variables) => ({ document: CreatePostDocument, variables })
    }),
    DeletePost: build.mutation<DeletePostMutation, DeletePostMutationVariables>({
      query: (variables) => ({ document: DeletePostDocument, variables })
    }),
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    logout: build.mutation<LogoutMutation, LogoutMutationVariables | void>({
      query: (variables) => ({ document: LogoutDocument, variables })
    }),
    Register: build.mutation<RegisterMutation, RegisterMutationVariables>({
      query: (variables) => ({ document: RegisterDocument, variables })
    }),
    GetPostById: build.query<GetPostByIdQuery, GetPostByIdQueryVariables>({
      query: (variables) => ({ document: GetPostByIdDocument, variables })
    }),
    GetUserPosts: build.query<GetUserPostsQuery, GetUserPostsQueryVariables | void>({
      query: (variables) => ({ document: GetUserPostsDocument, variables })
    }),
    Me: build.query<MeQuery, MeQueryVariables | void>({
      query: (variables) => ({ document: MeDocument, variables })
    }),
    Posts: build.query<PostsQuery, PostsQueryVariables | void>({
      query: (variables) => ({ document: PostsDocument, variables })
    }),
    Users: build.query<UsersQuery, UsersQueryVariables | void>({
      query: (variables) => ({ document: UsersDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useCreatePostMutation, useDeletePostMutation, useLoginMutation, useLogoutMutation, useRegisterMutation, useGetPostByIdQuery, useLazyGetPostByIdQuery, useGetUserPostsQuery, useLazyGetUserPostsQuery, useMeQuery, useLazyMeQuery, usePostsQuery, useLazyPostsQuery, useUsersQuery, useLazyUsersQuery } = injectedRtkApi;

