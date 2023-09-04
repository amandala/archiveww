import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const chunkyHeart = localFont({
  src: "../styles/chunky_heart_solid.otf",
  display: "swap",
});

const dinCondensed = localFont({
  src: "../styles/DIN.ttf",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={dinCondensed.className}>
      <Component {...pageProps} />
    </div>
  );
}
