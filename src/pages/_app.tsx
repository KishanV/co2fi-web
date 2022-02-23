import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { Modal } from "../components/atoms/model";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={"flex flex-col"}>
      <Head>
        <title>Co2fi</title>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
