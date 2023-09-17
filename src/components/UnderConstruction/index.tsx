import Image from "next/image";

import styles from "./index.module.scss";
import greenHazeBackground from "/public/assets/backgrounds/green_haze-min.png";
import { JumboHeading, Paragraph } from "../Typography";

import beaver from "/public/assets/Beavz3.png";
import tree from "/public/assets/Tree_1.png";
import tree2 from "/public/assets/Tree_2.png";
import tree3 from "/public/assets/Tree_3.png";

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
        <div className={styles.TreeWrapper}>
          <Image
            alt="A nice tree"
            src={tree}
            priority
            style={{
              objectFit: "contain",

              maxWidth: 800,
              margin: "0 auto",
              width: "100%",
              height: "auto",
              position: "absolute",
              bottom: 0,
              left: "-10%",
            }}
          />
          <Image
            alt="A nice tree"
            src={tree}
            priority
            style={{
              objectFit: "contain",

              maxWidth: 600,
              margin: "0 auto",
              width: "100%",
              height: "auto",
              position: "absolute",
              bottom: 0,
              left: "10%",
            }}
          />
          <Image
            alt="A nice tree"
            src={tree2}
            priority
            style={{
              objectFit: "contain",

              maxWidth: 700,
              margin: "0 auto",
              width: "100%",
              height: "auto",
              position: "absolute",
              bottom: 0,
              left: "-20%",
            }}
          />
          <Image
            alt="A nice tree"
            src={tree2}
            priority
            style={{
              objectFit: "contain",

              maxWidth: 700,
              margin: "0 auto",
              width: "100%",
              height: "auto",
              position: "absolute",
              bottom: 0,
              right: "-20%",
            }}
          />
          <Image
            alt="A nice tree"
            src={tree3}
            priority
            style={{
              objectFit: "contain",

              maxWidth: 800,
              margin: "0 auto",
              width: "100%",
              height: "auto",
              position: "absolute",
              bottom: 0,
              right: "-10%",
            }}
          />
          <Image
            alt="A nice tree"
            src={tree}
            priority
            style={{
              objectFit: "contain",

              maxWidth: 500,
              margin: "0 auto",
              width: "100%",
              height: "auto",
              position: "absolute",
              bottom: 0,
              right: "10%",
            }}
          />
        </div>
      </div>
    </>
  );
}
