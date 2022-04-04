import React from "react";
import { GetServerSideProps } from "next";
import { wrapper } from "app/store";
import {
  getRunningOperationPromises,
  endpoints,
  useGetUserPostsQuery,
} from "generated/graphql";
import UserPosts from "components/UserPosts";

const User = () => {
  const { data: getUserPosts } = useGetUserPostsQuery();

  return (
    <div>
      {getUserPosts ? <UserPosts posts={getUserPosts.getUserPosts} /> : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (_context) => {
    await store.dispatch(endpoints.GetUserPosts.initiate());
    Promise.all(getRunningOperationPromises());
    return {
      props: {},
    };
  });

export default User;
