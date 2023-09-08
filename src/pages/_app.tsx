import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { dinCondensed } from "@/styles/fonts";
import cx from "classnames";
// import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cx(dinCondensed.className)}>
      {/* <Navbar /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
