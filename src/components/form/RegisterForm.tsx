import React from "react";
import { useForm } from "@mantine/form";
import { Box, Input, TextInput, Title, Container, Button } from "@mantine/core";
import { useRegisterMutation } from "generated/graphql";
import { useRouter } from "next/router";

export const RegisterForm = () => {
  const router = useRouter();
  const [register, { data, isLoading }] = useRegisterMutation();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    try {
      const response = await register(values).unwrap();

      if (response?.register?.__typename === "FieldErrors") {
        const { errors } = response.register;
        const fieldErrors = {};
        for (let i = 0; i < errors.length; i++) {
          fieldErrors[errors[i].field] = errors[i].message;
        }

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
        <Title>Register</Title>
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
        <Button type="submit">Register</Button>
      </form>
    </Container>
  );
};
