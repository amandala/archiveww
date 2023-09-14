import { useState } from "react";
import Image from "next/image";

// import cx from "classnames";

import styles from "./index.module.scss";

import wordmark from "@/assets/FONT_WITH_MF_2024.png";
import datestamp from "@/assets/DATE_STAMP2024.png";

import sky from "@/assets/sunsetScene/PAPER_fun_ASSETS_8_back-min.png";
import sun from "@/assets/sunsetScene/PAPER_fun_ASSETS_Sun-min.png";
import frontMountains from "@/assets/sunsetScene/PAPER_fun_ASSETS_foreground-min.png";
import valley from "@/assets/sunsetScene/PAPER_fun_ASSETS_valley-min.png";
import hills from "@/assets/sunsetScene/PAPER_fun_ASSETS_rollinghills-min.png";
import grasses from "@/assets/sunsetScene/PAPER_fun_ASSETS_grasses-min.png";
import mountains from "@/assets/sunsetScene/PAPER_fun_ASSETS_mountains-min.png";
// import cloudTop from "@/assets/sunsetScene/cloudlayer_B-min.png";
import cloud1 from "@/assets/sunsetScene/Clouds1-min.png";
import cloud2 from "@/assets/sunsetScene/Clouds2-min.png";
import cloud3 from "@/assets/sunsetScene/Clouds3-min.png";
import cloud4 from "@/assets/sunsetScene/Clouds4-min.png";
import cloud5 from "@/assets/sunsetScene/Clouds5-min.png";

export default function SunsetScene() {
  const [imageLoadedCount, setImageLoadedCount] = useState(0);

  // const totalImages = 15;

  // if (imageLoadedCount < totalImages) {
  // }

  // console.log("loaded images", imageLoadedCount);

  return (
    <>
      <div className={styles.Main}>
        <div className={styles.ArtContainer}>
          <Image src={sky} fill alt="Blue sky" priority />
          <div className={styles.Sky}>
            <div className={styles.Overlay}>
              <div className={styles.WordmarkWrapper}>
                <Image
                  onLoadingComplete={() => {
                    setImageLoadedCount(imageLoadedCount + 1);
                  }}
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
                  onLoadingComplete={() =>
                    setImageLoadedCount(imageLoadedCount + 1)
                  }
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
                onLoadingComplete={() =>
                  setImageLoadedCount(imageLoadedCount + 1)
                }
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
                  onLoadingComplete={() =>
                    setImageLoadedCount(imageLoadedCount + 1)
                  }
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
                  onLoadingComplete={() =>
                    setImageLoadedCount(imageLoadedCount + 1)
                  }
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
                  onLoadingComplete={() =>
                    setImageLoadedCount(imageLoadedCount + 1)
                  }
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
                  onLoadingComplete={() =>
                    setImageLoadedCount(imageLoadedCount + 1)
                  }
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
                  onLoadingComplete={() =>
                    setImageLoadedCount(imageLoadedCount + 1)
                  }
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
                  onLoadingComplete={() =>
                    setImageLoadedCount(imageLoadedCount + 1)
                  }
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
      </div>
      {/* <div
        className={cx(styles.Loading, {
          // [styles.LoadingActive]: imageLoadedCount < 5,
        })}
      /> */}
    </>
  );
}
