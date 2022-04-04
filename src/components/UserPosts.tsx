import React from "react";
import { Post } from "generated/baseGraphql";
import { Button } from "@mantine/core";
import { useDeletePostMutation } from "generated/graphql";

interface Props {
  posts: Post[];
}

const UserPosts = ({ posts }: Props) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const onDeletePost = (id: number) => {
    deletePost({ id });
  };

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div style={styles.container}>
            {post.title}
            <Button onClick={() => onDeletePost(post.id)} loading={isLoading}>
              x
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: 600,
  } as React.CSSProperties,
};

export default UserPosts;
