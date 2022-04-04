import { wrapper } from "app/store";
import { MainLayout } from "components/layout";
import {
  getRunningOperationPromises,
  endpoints,
  usePostsQuery,
  useMeQuery,
} from "generated/graphql";
import { Text, Title, Button } from "@mantine/core";
import { CreatePostForm } from "components/form";
import { GetServerSideProps } from "next";
import Post from "components/Post";
import { gql, request, GraphQLClient } from "graphql-request";

const query = gql`
  query Posts {
    posts {
      id
      title
      createdBy {
        id
        username
      }
    }
  }
`;

export default function Home() {
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
    refetch,
  } = usePostsQuery();
  const { data: me, isLoading: meLoading } = useMeQuery();

  if (postsLoading) {
    return <div>Loading</div>;
  }

  const again = () => {
    refetch();
  };

  const rick = async () => {
    try {
      await request("http://localhost:4000/graphql", query);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <MainLayout>
      {me?.me ? <Title>Welcome {me.me.username}</Title> : null}
      <CreatePostForm />
      {posts?.posts
        ? posts.posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })
        : null}
      {postsError ? <pre>{JSON.stringify(postsError, null, 2)}</pre> : null}
      <Button onClick={again}>refetch</Button>
      <Button onClick={rick}>rick</Button>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (_context) => {
    await store.dispatch(endpoints.Posts.initiate());
    Promise.all(getRunningOperationPromises());
    return {
      props: {},
    };
  });
