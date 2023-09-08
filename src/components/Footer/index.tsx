import Link from "next/link";
import styles from "./index.module.scss";
import TextLink from "../TextLink";
import { H4 } from "../Typography";
import Image from "next/image";

import { useWindowSize } from "@/helpers/useWindowSize";

import tree1 from "@/assets/Tree_1.png";
import tree2 from "@/assets/Tree_2.png";
import tree3 from "@/assets/Tree_3.png";
import pageBackground from "@/assets/backgrounds/orient_blue.png";

export default function Footer() {
  const windowSize = useWindowSize();

  return (
    <div
      className={styles.Footer}
      style={{ backgroundImage: `url(${pageBackground.src})` }}
    >
      <div className={styles.Content}>
        <div className={styles.Column}>
          <H4>Festival</H4>
          <ul className={styles.List}>
            <li>
              <TextLink href="/tickets">Tickets</TextLink>
            </li>
            <li>
              <TextLink href="/camping">Camping</TextLink>
            </li>
            <li>
              <TextLink href="/volunteer">Volunteer</TextLink>
            </li>
            <li>
              <TextLink href="/jobs">Jobs</TextLink>
            </li>
            <li>
              <TextLink href="/faq">FAQ</TextLink>
            </li>
          </ul>
        </div>
        <div className={styles.Column}>
          <H4>Experience</H4>
          <ul className={styles.List}>
            <li>
              <TextLink href="/stages">Stages</TextLink>
            </li>
            <li>
              <TextLink href="/vendors">Vendors</TextLink>
            </li>
            <li>
              <TextLink href="/workshops">Workshops</TextLink>
            </li>
            <li>
              <TextLink href="/art">Art Installations</TextLink>
            </li>
            <li>
              <TextLink href="/past-events">Past Lineups</TextLink>
            </li>
          </ul>
        </div>

        <div className={styles.Column}>
          <H4>Social</H4>
          <ul className={styles.List}>
            <li>
              <TextLink
                target="_blank"
                href="https://www.instagram.com/wickedwoodsmusicfestival/"
              >
                Instagram
              </TextLink>
            </li>
            <li>
              <TextLink
                target="_blank"
                href="https://www.facebook.com/wickedwoodsmusicfestival/"
              >
                Facebook
              </TextLink>
            </li>
            <li>
              <TextLink
                target="_blank"
                href="https://www.youtube.com/channel/UCf9jtHeCdWzm5Jw5EJRgUkQ"
              >
                YouTube
              </TextLink>
            </li>
            <li>
              <TextLink
                target="_blank"
                href="https://soundcloud.com/wickedwoodsmusicfestival"
              >
                Sound Cloud
              </TextLink>
            </li>
            <li>
              <TextLink
                target="_blank"
                href="https://open.spotify.com/user/3143apwuohawnuw3ujlij3ihrgbm"
              >
                Spotify
              </TextLink>
            </li>
          </ul>
        </div>
        <div className={styles.Column}>
          <H4>Contact</H4>
          <ul className={styles.List}>
            <li>
              <TextLink href="/about#directory">Directory</TextLink>
            </li>
            <li>
              <TextLink href="/code-of-conduct">Code of Conduct</TextLink>
            </li>
            <li>
              <TextLink href="/terms">Terms & Conditions</TextLink>
            </li>
          </ul>
        </div>
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
              right: "-80%",
              objectFit: windowSize.width <= 500 ? "cover" : "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
}
