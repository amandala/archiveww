import { H1 } from "@/components/Typography";

import styles from "./index.module.scss";

const PlaylistsEmbed = () => {
  return (
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
  );
};

export default PlaylistsEmbed;
