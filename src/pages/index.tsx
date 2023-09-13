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
          content="A three day arts and music festival located in the Colombia Valley just outside Fairmont BC, Canada."
        />

        <meta
          name="description"
          content="A three day arts and music festival located in the Colombia Valley just outside Fairmont BC, Canada."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wicked Woods Music Festival" />
        <meta
          property="og:description"
          content="A three day arts and music festival located in the Colombia Valley just outside Fairmont BC, Canada."
        />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?export=view&id=1tu5gOcH9hPoUD0chnC1H_7aI00DrJmi3"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wickedwoods.ca" />
        <meta property="twitter:url" content="https://wickedwoods.ca" />
        <meta name="twitter:title" content="Wicked Woods Music Festival" />
        <meta
          name="twitter:description"
          content="A three day arts and music festival located in the Colombia Valley just outside Fairmont BC, Canada."
        />
        <meta
          name="twitter:image"
          content="https://drive.google.com/uc?export=view&id=1tu5gOcH9hPoUD0chnC1H_7aI00DrJmi3"
        />
      </Head>
      <main>
        <SunsetScene />
      </main>
    </>
  );
}
