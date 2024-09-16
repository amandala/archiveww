import { JumboHeading } from "@/components/Typography";
import styles from "./index.module.scss";
import PageHead from "@/components/PageHead";
import Gallery from "@/components/Gallery";
import slides from "../../data/pastEventsImages";
import PlaylistsEmbed from "@/components/PlaylistsEmbed";

export default function PastLineups() {
  return (
    <div className={styles.Wrapper}>
      <PageHead
        page="Past Lineups"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Check out some of our past lineups."
        url="wickedwoods.ca/past-events"
      />
      <div className={styles.Content}>
        <div className={styles.TitleWrapper}>
          <JumboHeading>Past Lineups</JumboHeading>
        </div>
        <div className={styles.Gallery}>
          <Gallery targetRowHeight={500} images={slides} />
        </div>
        <PlaylistsEmbed />
      </div>
    </div>
  );
}
