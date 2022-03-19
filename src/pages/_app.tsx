import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import { wrapper } from "app/store";

export function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "dark",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default wrapper.withRedux(App);
