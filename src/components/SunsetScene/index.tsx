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

export default function SunsetScene() {
  return (
    <div className={styles.Main}>
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
    </div>
  );
}
