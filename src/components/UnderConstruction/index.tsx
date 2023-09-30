import Image from "next/image";

import greenHazeBackground from "/public/assets/backgrounds/green_haze-min.png";
import { JumboHeading, Paragraph } from "../Typography";

import beaver from "/public/assets/Beavz3.png";

import styles from "./index.module.scss";
import BunchOfTrees from "../BunchOfTrees";

export default function UnderConstruction({
  title = "Under Construction",
  text = "We're rebuilding our website and haven't completed this page yet.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <>
      <div className={styles.Wrapper}>
        <Image
          src={greenHazeBackground}
          priority
          alt="Green construction paper background"
          fill
        />
        <div className={styles.Content}>
          <JumboHeading>{title}</JumboHeading>
          <Paragraph>{text}</Paragraph>
        </div>
        <div className={styles.BeavsWrapper}>
          <Image
            alt="Beaver in a yellow hard hat"
            src={beaver}
            priority
            style={{
              objectFit: "contain",
              paddingLeft: 20,
              paddingRight: 20,
              maxWidth: 800,
              margin: "0 auto",
              width: "100%",
              height: "auto",
              transform: "scaleX(-1)",
            }}
          />
        </div>
        <BunchOfTrees />
      </div>
    </>
  );
}
