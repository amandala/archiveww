import Image from "next/image";

import styles from "./index.module.scss";
import greenHazeBackground from "/public/assets/backgrounds/green_haze-min.png";
import { JumboHeading, Paragraph } from "../Typography";

import beaver from "/public/assets/Beavz3.png";

export default function UnderConstruction({
  title = "Under Construction",
  text = "We're rebuilding our website and haven't completed this page yet.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <>
      <div
        className={styles.Wrapper}
        style={{ backgroundImage: `url(${greenHazeBackground.src})` }}
      >
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
            }}
          />
        </div>
      </div>
    </>
  );
}
