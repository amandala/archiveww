import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { dinCondensed } from "@/styles/fonts";
import cx from "classnames";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

import styles from "@/styles/App.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cx(dinCondensed.className, styles.App)}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </div>
  );
}
