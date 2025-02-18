import PageHead from "@/components/PageHead";
import Image from "next/image";
import styles from "./index.module.scss";

import nostalgix from "/public/assets/spotlights/nostalgix.png";
import wreckno from "/public/assets/spotlights/wreckno.png";
import snrk from "/public/assets/spotlights/snrk.png";
import wuki from "/public/assets/spotlights/wuki_final.png";
import poster from "/public/assets/posters/2024.jpg";

import { JumboHeading } from "@/components/Typography";
import SpotifyPlaylist from "@/components/SpotifyPlaylist";

export default function Lineup() {
  return (
    <>
      <PageHead
        page="2024 Lineup"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Our 2024 Performance Lineup is WICKED! Come check it out"
        url="wickedwoods.ca/lineup"
      />
      <div className={styles.Wrapper}>
        <div className={styles.PosterWrapper}>
          <Image
            className={styles.Poster}
            src={poster}
            alt="2024 Performance Lineup"
            placeholder="blur"
          />
        </div>
        <SpotifyPlaylist
          playlistId="5Tix0DD521M3hQUnynd7wh"
          className={styles.Playlist}
        />
        <JumboHeading className={styles.Heading}>2024 Headliners</JumboHeading>
        <div className={styles.DotWrapper}>
          <div className={styles.Headliners}>
            <Image
              src={wuki}
              alt="Wuki spotlight"
              width={300}
              height={300}
              className={styles.Spotlight}
              placeholder="blur"
            />
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
      </div>
    </>
  );
}
