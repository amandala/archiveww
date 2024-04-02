import PageHead from "@/components/PageHead";
import Image from "next/image";
import styles from "./index.module.scss";

import nostalgix from "/public/assets/spotlights/nostalgix.png";
import wreckno from "/public/assets/spotlights/wreckno.png";
import snrk from "/public/assets/spotlights/snrk.png";
import { JumboHeading } from "@/components/Typography";

export default function Lineup() {
  return (
    <>
      <PageHead
        page="2024 Lineup"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Follow us on social media for 2024 lineup announcements."
        url="wickedwoods.ca/lineup"
      />
      <div className={styles.Wrapper}>
        <div className={styles.DotWrapper}>
          <JumboHeading className={styles.Heading}>
            2024 Headliners
          </JumboHeading>
          <div className={styles.Headliners}>
            <Image
              src={nostalgix}
              alt="Nostalgix spotlight"
              width={300}
              height={300}
              className={styles.Spotlight}
              placeholder="blur"
            />
            <Image
              src={snrk}
              alt="Nostalgix spotlight"
              width={300}
              height={300}
              className={styles.Spotlight}
              placeholder="blur"
            />
            <Image
              src={wreckno}
              alt="Nostalgix spotlight"
              width={300}
              height={300}
              className={styles.Spotlight}
              placeholder="blur"
            />
          </div>
        </div>
        <JumboHeading className={styles.Heading}>
          Full Lineup Dropping Soon
        </JumboHeading>
      </div>
    </>
  );
}
