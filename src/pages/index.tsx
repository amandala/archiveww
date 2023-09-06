import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.scss";

import sky from "@/assets/PAPER_fun_ASSETS_8_back.png";
import wordmark from "@/assets/FONT_WITH_MF.png";
import datestamp from "@/assets/DATE_STAMP2.png";

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
      <main className={styles.Main}>
        <div className={styles.ArtContainer}>
          <Image src={sky} fill alt="Blue sky" priority />
          <div className={styles.Sky}>
            <div className={styles.Overlay}>
              <div className={styles.WordmarkWrapper}>
                <Image
                  alt="Wicked Woods Music Festival Wordmark Logo"
                  src={wordmark}
                  style={{
                    objectFit: "contain",
                    zIndex: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    maxWidth: 800,
                    margin: "0 auto",
                  }}
                  fill
                />
              </div>
              <div className={styles.DatestampWrapper}>
                <Image
                  alt="Wicked Woods Music Festival Wordmark Logo"
                  src={datestamp}
                  style={{
                    objectFit: "contain",
                    zIndex: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                  fill
                />
              </div>
            </div>
            <div className={styles.Sun}></div>
            <div className={styles.CloudsContainer}>
              <div className={styles.CloudTop}></div>
              <div className={styles.Cloud1}></div>
              <div className={styles.Cloud4}></div>
              <div className={styles.Cloud3}></div>
              <div className={styles.Cloud2}></div>
              <div className={styles.Cloud5}></div>
            </div>
          </div>
          <div className={styles.Foreground}>
            <div className={styles.Mountains}></div>
            <div className={styles.Grasses}></div>
            <div className={styles.Hills}></div>
            <div className={styles.Valley}></div>
            <div className={styles.FrontMountains}></div>
          </div>
          {/* <div className={styles.Footer}>HI</div> */}
        </div>
      </main>
    </>
  );
}
