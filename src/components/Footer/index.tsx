import styles from "./index.module.scss";
import Image from "next/image";

import { useWindowSize } from "@/helpers/useWindowSize";

import raabWink from "/public/assets/raabwink.gif";
import tree1 from "/public/assets/Tree_1.png";
import tree2 from "/public/assets/Tree_2.png";
import tree3 from "/public/assets/Tree_3.png";
import meesey from "/public/assets/meesey.png";
import pageBackground from "/public/assets/backgrounds/orient_blue-min.png";
import { ExperienceNav, FestivalNav, ContactNav, SocialNav } from "../Nav";

export default function Footer() {
  const windowSize = useWindowSize();

  return (
    <div
      className={styles.Footer}
      style={{ backgroundImage: `url(${pageBackground.src})` }}
    >
      <div className={styles.Content}>
        <FestivalNav />
        <ExperienceNav />
        <SocialNav />
        <ContactNav />
      </div>
      <div className={styles.Trees}>
        <div className={styles.TreesRelative}>
          <Image
            alt="A tree"
            src={tree1}
            fill
            style={{
              margin: "0 auto",
              left: "-90%",
              objectFit: windowSize.width <= 500 ? "cover" : "contain",
            }}
          />
          <Image
            alt="A tree"
            src={tree3}
            fill
            style={{
              margin: "0 auto",
              left: "-80%",
              bottom: "0",
              objectFit: windowSize.width <= 500 ? "cover" : "contain",
            }}
          />
          <Image
            alt="A tree"
            src={tree2}
            fill
            style={{
              margin: "0 auto",
              right: "-90%",
              objectFit: windowSize.width <= 500 ? "cover" : "contain",
            }}
          />
          <Image
            alt="A tree"
            src={tree2}
            fill
            style={{
              margin: "0 auto",
              right: "-70%",
              objectFit: windowSize.width <= 500 ? "cover" : "contain",
            }}
          />{" "}
          <Image
            alt="Raab the rabbit"
            src={raabWink}
            width={200}
            height={200}
            className={styles.Raab}
          />
          <Image
            alt="Meesey the moose"
            src={meesey}
            width={116}
            height={200}
            className={styles.Meesey}
          />
        </div>
      </div>
    </div>
  );
}
