import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";
import { url } from "inspector";

const client = new GraphQLClient("http://localhost:4000/graphql", {
  credentials: "include",
});

const baseQuery = graphqlRequestBaseQuery({
  // url: "http://localhost:4000/graphql",
  client,
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
