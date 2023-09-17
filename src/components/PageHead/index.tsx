import Head from "next/head";

export default function PageHead({
  page,
  image = "https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3",
  description,
  url,
}: {
  page: string;
  image: string;
  description: string;
  url: string;
}) {
  const title = `${page} - Wicked Woods Music Festival`;
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta id="description" name="description" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="wickedwoods.ca" />
      <meta property="twitter:url" content={url || "https://wickedwoods.ca"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link
        rel="preload"
        href="/assets/sunsetScene/PAPER_fun_ASSETS_8_back-min.png"
        as="image"
      />
      <link
        rel="preload"
        href="/assets/sunsetScene/PAPER_fun_ASSETS_Sun-min.png"
        as="image"
      />
      <link
        rel="preload"
        href="/assets/backgrounds/mooonshotbanner-min.png"
        as="image"
      />
    </Head>
  );
}
