import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.scss";

import wordmark from "@/assets/FONT_WITH_MF.png";
import datestamp from "@/assets/DATE_STAMP2.png";

import sky from "@/assets/sunsetScene/PAPER_fun_ASSETS_8_back.png";
import sun from "@/assets/sunsetScene/PAPER_fun_ASSETS_Sun.png";
import frontMountains from "@/assets/sunsetScene/PAPER_fun_ASSETS_foreground.png";
import valley from "@/assets/sunsetScene/PAPER_fun_ASSETS_valley.png";
import hills from "@/assets/sunsetScene/PAPER_fun_ASSETS_rollinghills.png";
import grasses from "@/assets/sunsetScene/PAPER_fun_ASSETS_grasses.png";
import mountains from "@/assets/sunsetScene/PAPER_fun_ASSETS_mountains.png";
import cloudTop from "@/assets/sunsetScene/cloudlayer_B.png";
import cloud1 from "@/assets/sunsetScene/Clouds1.png";
import cloud2 from "@/assets/sunsetScene/Clouds2.png";
import cloud3 from "@/assets/sunsetScene/Clouds3.png";
import cloud4 from "@/assets/sunsetScene/Clouds4.png";
import cloud5 from "@/assets/sunsetScene/Clouds5.png";

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
                  placeholder="blur"
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
                  priority
                  placeholder="blur"
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
            <div className={styles.Sun}>
              <Image
                src={sun}
                alt="Blue sky"
                priority
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "100%",
                }}
              />
            </div>
            <div className={styles.CloudsContainer}>
              <div
                className={styles.CloudTop}
                style={{ backgroundImage: `url(${cloudTop.src})` }}
              >
                <Image
                  src={cloudTop}
                  alt="Blue sky"
                  priority
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.Cloud1}>
                <Image
                  placeholder="blur"
                  src={cloud1}
                  alt="Clouds"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.Cloud4}>
                <Image
                  placeholder="blur"
                  src={cloud4}
                  alt="Clouds"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.Cloud3}>
                <Image
                  placeholder="blur"
                  src={cloud3}
                  alt="Clouds"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.Cloud2}>
                <Image
                  placeholder="blur"
                  src={cloud2}
                  alt="Clouds"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.Cloud5}>
                <Image
                  placeholder="blur"
                  src={cloud5}
                  alt="Clouds"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.Foreground}>
            <div className={styles.Mountains}>
              <Image
                placeholder="blur"
                src={mountains}
                alt="Mountains"
                fill
                priority
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.Grasses}>
              <Image
                placeholder="blur"
                src={grasses}
                alt="Grasses"
                fill
                priority
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.Hills}>
              <Image
                placeholder="blur"
                src={hills}
                alt="Hills"
                fill
                priority
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.Valley}>
              <Image
                placeholder="blur"
                src={valley}
                alt="Valley"
                fill
                priority
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.FrontMountains}>
              <Image
                placeholder="blur"
                src={frontMountains}
                alt="Front Mountains"
                fill
                priority
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
