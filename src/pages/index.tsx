import Head from "next/head";

import SunsetScene from "@/components/SunsetScene";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Home - Wicked Woods Music Festival</title>
        <meta
          id="description"
          name="description"
          content="Join us in the woods for a three day music and arts festival in the heart of the Colombia Valley, just outside of Fairmont BC."
        />
        <meta
          id="title"
          property="og:title"
          content="Wicked Woods Music Festival"
        />

        <meta
          property="og:image"
          content="https://drive.google.com/uc?export=view&id=1tu5gOcH9hPoUD0chnC1H_7aI00DrJmi3"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <main>
        <SunsetScene />
      </main>
    </>
  );
}
