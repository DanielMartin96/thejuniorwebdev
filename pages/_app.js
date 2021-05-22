import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

import Layout from "../components/layout/Layout";
import { createContext } from "react";
import * as gtag from "../lib/gtag";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { global } = pageProps;

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <GlobalContext.Provider value={global}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

export default MyApp;
