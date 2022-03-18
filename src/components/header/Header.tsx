import { Header as HeaderComponent, Text, Button } from "@mantine/core";
import { useMeQuery } from "generated/graphql";
import Link from "next/link";

export const Header = () => {
  const { data, isLoading } = useMeQuery();

  let body = null;

  if (isLoading) {
    body = <h3>Loading...</h3>;
  } else if (!data?.me) {
    body = (
      <>
        <Link href="/login">
          <Button component="a">Login</Button>
        </Link>
        <Link href="/register">
          <Button component="a">Register</Button>
        </Link>
      </>
    );
  } else {
    body = <Text>Logged in as {data.me.username}</Text>;
  }

  return (
    <HeaderComponent height={50} p="lg">
      {body}
    </HeaderComponent>
  );
};
