import Head from "next/head";

import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <>
      <Head key="index">
        <title>Wicked Woods Music Festival</title>
        <meta
          name="description"
          content="A music and arts festival in the heart of the Colombia Valley, just outside of Fairmont BC."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UnderConstruction />
        {/* <SunsetScene /> */}
      </main>
    </>
  );
}
