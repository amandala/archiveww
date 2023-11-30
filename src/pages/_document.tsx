import { Html, Head, Main, NextScript } from "next/document";
import { META_PIXEL_ID } from "../lib/metaPixel";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="meta-pixel"
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
