import "../styles/globals.css";

import { AppLayout } from "@ui";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Head>
        <title>Avro Schema Parser</title>
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
