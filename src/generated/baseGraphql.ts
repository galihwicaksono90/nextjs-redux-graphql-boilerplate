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

export type AuthObject = {
  __typename?: 'AuthObject';
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: User;
  register: User;
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
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  posts: Array<Post>;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: number, username: string } };

export type RegisterMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: number, username: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, username: string }> };

export const RegularUserFragmentDoc = `
    fragment RegularUser on User {
  id
  username
}
    `;
export const LoginDocument = `
    mutation Login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export const RegisterDocument = `
    mutation Register($password: String!, $username: String!) {
  register(password: $password, username: $username) {
    id
    username
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
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    Register: build.mutation<RegisterMutation, RegisterMutationVariables>({
      query: (variables) => ({ document: RegisterDocument, variables })
    }),
    Me: build.query<MeQuery, MeQueryVariables | void>({
      query: (variables) => ({ document: MeDocument, variables })
    }),
    Users: build.query<UsersQuery, UsersQueryVariables | void>({
      query: (variables) => ({ document: UsersDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useLoginMutation, useRegisterMutation, useMeQuery, useLazyMeQuery, useUsersQuery, useLazyUsersQuery } = injectedRtkApi;

