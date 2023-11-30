import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { dinCondensed } from "@/styles/fonts";
import cx from "classnames";
import { Navbar } from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

import * as fbq from "../lib/metaPixel";

import styles from "@/styles/App.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={cx(dinCondensed.className, styles.App)}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}
