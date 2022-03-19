import { wrapper } from "app/store";
import { MainLayout } from "components/layout";
import {
  Users,
  getRunningOperationPromises,
  useUsersQuery,
} from "generated/graphql";

export default function Home() {
  const { data: users, isFetching } = useUsersQuery();
  if (isFetching) {
    return <h1>Wakwekwok.......</h1>;
  }
  return (
    <MainLayout>
      <h1>Mantap djaya</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </MainLayout>
  );
}
/*
 * export const getServerSideProps = wrapper.getServerSideProps(
 *   (store) => async (context) => {
 *     console.log({ cookies: context.req.cookies });
 *     store.dispatch(Users.initiate());
 *     await Promise.all(getRunningOperationPromises());
 *     return {
 *       props: {},
 *     };
 *   }
 * ); */
