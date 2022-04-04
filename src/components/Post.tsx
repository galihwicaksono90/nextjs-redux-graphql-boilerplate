import { Title } from "@mantine/core";
import React from "react";
import Link from "next/link";

interface Props {
  post: {
    title: string;
    id: number;
  };
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <Title>
        <Link href={`/post/${post.id}`}>{post.title}</Link>
      </Title>
    </div>
  );
};

export default Post;
