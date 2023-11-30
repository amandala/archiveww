import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { dinCondensed } from "@/styles/fonts";
import cx from "classnames";
import { Navbar } from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { META_PIXEL_ID } from "../lib/metaPixel";

import styles from "@/styles/App.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(META_PIXEL_ID || "");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });

  return (
    <div className={cx(dinCondensed.className, styles.App)}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}
