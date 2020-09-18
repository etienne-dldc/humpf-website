import React from "react";
import "../style/index.css";
import App from "next/app";
import Head from "next/head";
import { WindowSizeProvider } from "../hooks/useWindowSize";

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <WindowSizeProvider>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/sanitize.css@11.0.1/sanitize.css"
            rel="stylesheet"
          />
          <title>Humpf</title>
        </Head>
        {/* <Head>
        </Head> */}
        <Component {...pageProps} />
      </WindowSizeProvider>
    );
  }
}
