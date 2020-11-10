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
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MRZ3XJS');`,
            }}
          />
          {/* End Google Tag Manager */}
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

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Etienne_dot_js" />
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
        {/* <Head>
        </Head> */}
        <Component {...pageProps} />
      </WindowSizeProvider>
    );
  }
}
