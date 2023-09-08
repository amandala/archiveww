import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.scss";

import sky from "@/assets/PAPER_fun_ASSETS_8_back.png";
import wordmark from "@/assets/FONT_WITH_MF.png";
import datestamp from "@/assets/DATE_STAMP2.png";
import sun from "@/assets/PAPER_fun_ASSETS_Sun.png";
import frontMountains from "@/assets/PAPER_fun_ASSETS_foreground.png";
import valley from "@/assets/PAPER_fun_ASSETS_valley.png";
import hills from "@/assets/PAPER_fun_ASSETS_rollinghills.png";
import grasses from "@/assets/PAPER_fun_ASSETS_grasses.png";
import mountains from "@/assets/PAPER_fun_ASSETS_mountains.png";
import cloudTop from "@/assets/cloudlayer_B.png";
import cloud1 from "@/assets/Clouds1.png";
import cloud2 from "@/assets/Clouds2.png";
import cloud3 from "@/assets/Clouds3.png";
import cloud4 from "@/assets/Clouds4.png";
import cloud5 from "@/assets/Clouds5.png";

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
                  alt="Wicked Woods Music Festival"
                  src={wordmark}
                  priority
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
                  alt="August 29 to September 1 2024"
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
            <div
              className={styles.Sun}
              style={{ backgroundImage: `url(${sun.src})` }}
            ></div>
            <div className={styles.CloudsContainer}>
              <div
                className={styles.CloudTop}
                style={{ backgroundImage: `url(${cloudTop.src})` }}
              ></div>
              <div
                className={styles.Cloud1}
                style={{ backgroundImage: `url(${cloud1.src})` }}
              ></div>
              <div
                className={styles.Cloud4}
                style={{ backgroundImage: `url(${cloud4.src})` }}
              ></div>
              <div
                className={styles.Cloud3}
                style={{ backgroundImage: `url(${cloud3.src})` }}
              ></div>
              <div
                className={styles.Cloud2}
                style={{ backgroundImage: `url(${cloud2.src})` }}
              ></div>
              <div
                className={styles.Cloud5}
                style={{ backgroundImage: `url(${cloud5.src})` }}
              ></div>
            </div>
          </div>
          <div className={styles.Foreground}>
            <div
              className={styles.Mountains}
              style={{ backgroundImage: `url(${mountains.src})` }}
            ></div>
            <div
              className={styles.Grasses}
              style={{ backgroundImage: `url(${grasses.src})` }}
            ></div>
            <div
              className={styles.Hills}
              style={{ backgroundImage: `url(${hills.src})` }}
            ></div>
            <div
              className={styles.Valley}
              style={{ backgroundImage: `url(${valley.src})` }}
            ></div>
            <div
              className={styles.FrontMountains}
              style={{ backgroundImage: `url(${frontMountains.src})` }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}
