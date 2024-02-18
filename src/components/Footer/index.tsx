import styles from "./index.module.scss";
// import Image from "next/image";

// import { useWindowSize } from "@/helpers/useWindowSize";

import { ExperienceNav, FestivalNav, ContactNav, SocialNav } from "../Nav";

export default function Footer() {
  // const windowSize = useWindowSize();

  return (
    <div className={styles.Footer}>
      <div className={styles.Content}>
        <FestivalNav />
        <ExperienceNav />
        <SocialNav />
        <ContactNav />
      </div>
    </div>
  );
}
