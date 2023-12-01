import Image from "next/image";

import styles from "./index.module.scss";

import wordmark from "/public/assets/FONT_WITH_MF_2024.png";
import datestamp from "/public/assets/DATE_STAMP2024.png";

import sky from "/public/assets/sunsetScene/PAPER_fun_ASSETS_8_back-min.png";
import sun from "/public/assets/sunsetScene/PAPER_fun_ASSETS_Sun-min.png";
import frontMountains from "/public/assets/sunsetScene/PAPER_fun_ASSETS_foreground-min.png";
import valley from "/public/assets/sunsetScene/PAPER_fun_ASSETS_valley-min.png";
import hills from "/public/assets/sunsetScene/PAPER_fun_ASSETS_rollinghills-min.png";
import grasses from "/public/assets/sunsetScene/PAPER_fun_ASSETS_grasses-min.png";
import mountains from "/public/assets/sunsetScene/PAPER_fun_ASSETS_mountains-min.png";
import cloud1 from "/public/assets/sunsetScene/Clouds1-min.png";
import cloud2 from "/public/assets/sunsetScene/Clouds2-min.png";
import cloud3 from "/public/assets/sunsetScene/Clouds3-min.png";
import cloud4 from "/public/assets/sunsetScene/Clouds4-min.png";
import cloud5 from "/public/assets/sunsetScene/Clouds5-min.png";

import TicketButton from "../TicketButton";

export default function SunsetScene() {
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.ArtContainer}>
          <Image src={sky} fill alt="Blue sky" priority unoptimized />
          <div className={styles.Sky}>
            <div className={styles.Overlay}>
              <div className={styles.WordmarkWrapper}>
                <div className={styles.TicketButtonWrap}>
                  <TicketButton />
                </div>
                <Image
                  alt="Wicked Woods Music Festival"
                  src={wordmark}
                  priority
                  style={{
                    objectFit: "contain",
                    zIndex: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    maxWidth: 1000,
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
                style={{ backgroundImage: `url(${cloud1.src})` }}
              >
                <Image
                  src={cloud1}
                  alt="Animated clouds"
                  priority
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className={styles.Cloud1}>
                <Image
                  src={cloud1}
                  alt="Animated Clouds"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className={styles.Cloud4}>
                <Image
                  src={cloud4}
                  alt="Clouds"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className={styles.Cloud3}>
                <Image
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
      </div>
    </>
  );
}
