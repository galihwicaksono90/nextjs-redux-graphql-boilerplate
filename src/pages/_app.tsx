import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "app/store";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
