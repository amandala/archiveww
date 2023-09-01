import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../assets/chunky_heart_solid.otf",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
