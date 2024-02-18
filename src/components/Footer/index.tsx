import styles from "./index.module.scss";

import trees from "/public/assets/backgrounds/trees-min.png";
import sky from "/public/assets/backgrounds/sky_background-min.png";
import { ExperienceNav, FestivalNav, ContactNav, SocialNav } from "../Nav";

export default function Footer() {
  // const windowSize = useWindowSize();

  return (
    <div
      className={styles.FooterWrapper}
      style={{ backgroundImage: `url(${sky.src})` }}
    >
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
    </div>
  );
}
