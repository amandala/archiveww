import Image from "next/image";

import styles from "./index.module.scss";
import greenHazeBackground from "/public/assets/backgrounds/green_haze-min.png";
import { JumboHeading, Paragraph } from "../Typography";

import beaver from "/public/assets/Beavz3.png";
import Button from "../Button";

export default function UnderConstruction() {
  return (
    <>
      <div
        className={styles.Wrapper}
        style={{ backgroundImage: `url(${greenHazeBackground.src})` }}
      >
        <div className={styles.Content}>
          <JumboHeading>Under Construction</JumboHeading>
          <Paragraph>
            We&apos;re rebuilding our website and haven&apos;t completed this
            page yet.
          </Paragraph>

          <div className={styles.ButtonWrapper}>
            <Button href="/">Go home</Button>
          </div>
        </div>
        <div className={styles.BeavsWrapper}>
          <Image
            alt="Beaver in a yellow hard hat"
            src={beaver}
            priority
            // fill
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
