import styles from "./index.module.scss";
// import Image from "next/image";

// import { useWindowSize } from "@/helpers/useWindowSize";
import trees from "/public/assets/backgrounds/trees-min.png";

import { ExperienceNav, FestivalNav, ContactNav, SocialNav } from "../Nav";

export default function Footer() {
  // const windowSize = useWindowSize();

  return (
    <div
      className={styles.Footer}
      style={{ backgroundImage: `url(${trees.src})` }}
    >
      <div className={styles.Content}>
        <FestivalNav />
        <ExperienceNav />
        <SocialNav />
        <ContactNav />
      </div>
    </div>
  );
}
