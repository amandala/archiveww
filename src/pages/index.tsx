import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.scss";

const myFont = localFont({
  src: "../assets/chunky_heart_solid.otf",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Wicked Woods Music Festival</title>
        <meta
          name="description"
          content="Music and Arts Festival in the heart of the Colombia Valley, just outside of Fairmont BC."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.Main} ${myFont.className}`}>
        <div className={styles.Sky}>
          {/* <h1 className={styles.Title}>Wicked Woods</h1> */}
          <div className={styles.Sun}></div>
          <div className={styles.Cloud2}></div>
          <div className={styles.Cloud1}></div>
          <div className={styles.Cloud4}></div>

          <div className={styles.Cloud3}></div>

          <div className={styles.Cloud5}></div>
        </div>
        <div className={styles.Foreground}>
          <div className={styles.Mountains}></div>
          <div className={styles.Grasses}></div>
          <div className={styles.Hills}></div>
          <div className={styles.Valley}></div>
          <div className={styles.FrontMountains}></div>
        </div>

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  );
}
