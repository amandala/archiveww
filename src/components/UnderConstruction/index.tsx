import cx from "classnames";
import Image from "next/image";

import styles from "./index.module.scss";
import Button from "@/components/Button";
import greenHazeBackground from "@/assets/backgrounds/green_haze.png";
import { JumboHeading, Paragraph } from "../Typography";

import beaver from "@/assets/Beavz3.png";

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
          <Paragraph>Follow us on Social Media for updates!</Paragraph>
          {/* <div className={styles.ButtonWrapper}>
          <Button href="/">Go back home</Button>
        </div> */}
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
