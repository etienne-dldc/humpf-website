import "../style/index.css";
import App from "next/app";
import Head from "next/head";
import { WindowSizeProvider } from "../hooks/useWindowSize";
import PlausibleProvider from "next-plausible";

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <PlausibleProvider domain="humpf.etienne.tech">
        <WindowSizeProvider>
          <Head>
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
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#9f00a7" />
            <meta name="theme-color" content="#ffffff" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@EtienneTech" />
            <meta
              name="twitter:title"
              content="Humpf - Using Damped Springs for animations"
            />
            <meta
              name="twitter:description"
              content="Humpf is a TypeScript and JavaScript library to get the position and velocity of a damped spring as a continuous function of time"
            />
            <meta
              name="twitter:image"
              content="https://humpf.etienne.tech/twitter-card.png"
            />

            <title>Humpf</title>
          </Head>
          <Component {...pageProps} />
        </WindowSizeProvider>
      </PlausibleProvider>
    );
  }
}
