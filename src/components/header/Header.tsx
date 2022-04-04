import { Header as HeaderComponent, Text, Button } from "@mantine/core";
import { useMeQuery, useLogoutMutation } from "generated/graphql";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "@mantine/core";

export const Header = () => {
  const { data, isLoading } = useMeQuery();
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const onLogout = async () => {
    try {
      const data = await logout().unwrap();
      router.push("/login");
    } catch (error) {
      console.log({ error });
    }
  };

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
    body = (
      <Box sx={{ display: "flex" }}>
        <Text mr="xl">Logged in as {data.me.username}</Text>
        <Button onClick={onLogout}>Logout</Button>
      </Box>
    );
  }

  return (
    <HeaderComponent height={80} p="lg">
      {body}
    </HeaderComponent>
  );
};
