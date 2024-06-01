import { H1 } from "@/components/Typography";

import styles from "./index.module.scss";
import SpotifyPlaylist from "../SpotifyPlaylist";

const PlaylistsEmbed = () => {
  return (
    <div className={styles.Playlists}>
      <div className={styles.TitleWrapper}>
        <H1>2023 Spotify Stage Playlists</H1>
      </div>
      <div className={styles.PlaylistsGrid}>
        <SpotifyPlaylist
          playlistId="5y2G5vi0HxJNld0wOLBRY0"
          className={styles.PlaylistEmbed}
        />
        <SpotifyPlaylist
          playlistId="6c7Lj31UKxfH7I8Nlr72VX"
          className={styles.PlaylistEmbed}
        />
        <SpotifyPlaylist
          playlistId="3WjcAPgYZeebqqDqtmYuHs"
          className={styles.PlaylistEmbed}
        />
        <SpotifyPlaylist
          playlistId="5Ar8ZGtML9KMthcQUGg9rm"
          className={styles.PlaylistEmbed}
        />
      </div>
    </div>
  );
};

export default PlaylistsEmbed;
