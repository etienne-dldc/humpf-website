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

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#9f00a7" />
          <meta name="theme-color" content="#ffffff" />

          <title>Humpf</title>
        </Head>
        {/* <Head>
        </Head> */}
        <Component {...pageProps} />
      </WindowSizeProvider>
    );
  }
}
