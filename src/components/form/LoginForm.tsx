import React from "react";
import { useForm } from "@mantine/form";
import { Box, TextInput, Title, Container, Button } from "@mantine/core";
import { useLoginMutation } from "generated/graphql";
import { useRouter } from "next/router";
import { parseFieldErrors } from "utils";

export const LoginForm = () => {
  const router = useRouter();
  const [login, { isLoading, data: loginData }] = useLoginMutation();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    try {
      const response = await login(values).unwrap();

      if (response?.login?.__typename === "FieldErrors") {
        const { errors } = response.login;
        const fieldErrors = parseFieldErrors(errors);
        form.setErrors(fieldErrors);
        return;
      }

      router.push("/");
    } catch (error) {
      console.log({ error });
    }
  });

  return (
    <Container sx={{ maxWidth: "700px", padding: "100px" }}>
      <Box sx={{ marginBottom: 10 }}>
        <Title>Login</Title>
      </Box>
      <form onSubmit={onSubmit}>
        <TextInput
          required
          label="Username"
          placeholder="Username"
          {...form.getInputProps("username")}
        />
        <TextInput
          required
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
          type="password"
        />
        <Button type="submit" loading={isLoading}>
          Login
        </Button>
      </form>
    </Container>
  );
};
