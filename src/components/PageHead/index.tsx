import Head from "next/head";

export default function PageHead({
  page,
  image,
  description,
  url,
}: {
  page: string;
  image: string;
  description: string;
  url: string;
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{page ? `${page} - ` : null} - Wicked Woods Music Festival</title>
      <meta id="description" name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Wicked Woods Music Festival" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="wickedwoods.ca" />
      <meta property="twitter:url" content={url || "https://wickedwoods.ca"} />
      <meta name="twitter:title" content="Wicked Woods Music Festival" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
