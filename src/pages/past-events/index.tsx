import { H1, JumboHeading, Paragraph } from "@/components/Typography";
import Image from "next/image";
import styles from "./index.module.scss";
import PageHead from "@/components/PageHead";
import background from "/public/assets/backgrounds/prussian_blue-min.png";
import Gallery from "@/components/Gallery";
import slides from "../../data/pastEventsImages";

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
        <div className={styles.TextWrapper}>
          <Paragraph>
            We&apos;ve had some pretty wicked times in the woods over the years.
            Check out some of our past lineups below. Click on a poster to open
            it up in full screen view.
          </Paragraph>
        </div>
        <div>
          <Gallery targetRowHeight={500} images={slides} />
        </div>
        <div className={styles.Playlists}>
          <div className={styles.TitleWrapper}>
            <H1>2023 Spotify Playlists</H1>
          </div>
          <div className={styles.PlaylistsGrid}>
            <div className={styles.PlaylistEmbed}>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/5y2G5vi0HxJNld0wOLBRY0?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.PlaylistEmbed}>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/6c7Lj31UKxfH7I8Nlr72VX?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.PlaylistEmbed}>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/3WjcAPgYZeebqqDqtmYuHs?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.PlaylistEmbed}>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/5Ar8ZGtML9KMthcQUGg9rm?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Image
        className={styles.ImageWrapper}
        src={background}
        fill
        alt="Blue sky"
        priority
        style={{ zIndex: 0 }}
      />
    </div>
  );
}
