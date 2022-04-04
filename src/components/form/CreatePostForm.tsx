import { Button, TextInput, Notification } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCreatePostMutation } from "generated/graphql";

export const CreatePostForm = () => {
  const form = useForm({
    initialValues: {
      title: "",
    },
  });
  const [createPost, { isLoading: createPostLoading, error, data, isSuccess }] =
    useCreatePostMutation();

  const onSubmit = form.onSubmit(async (values) => {
    await createPost(values);
  });

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Title"
        placeholder="Title"
        {...form.getInputProps("title")}
      />
      <Button type="submit" loading={createPostLoading}>
        Submit
      </Button>
      <Notification>Whoops</Notification>
    </form>
  );
};
