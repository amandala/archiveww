import React from "react";
import Image from "next/image";

import Gallery from "@/components/Gallery";

import wordmark from "/public/assets/FONT_WITH_MF_2024.png";
import datestamp from "/public/assets/DATE_STAMP2024.png";
import heroImage from "/public/assets/skyvalley.jpg";
import { JumboHeading, Paragraph } from "@/components/Typography";
import YouTubePlayer from "@/components/YoutubePlayer";
import PageHead from "@/components/PageHead";

import sky from "/public/assets/backgrounds/sky_background-min.png";

import { generateGalleryImages } from "@/helpers/generateGalleryImages";

import styles from "./index.module.scss";
import TicketButton from "@/components/TicketButton";
import Link from "next/link";

const galleryA = require.context(`/public/assets/gallery/about/top`, true);
const galleryB = require.context(`/public/assets/gallery/about/b`, true);

export default function AboutPage() {
  return (
    <div>
      <PageHead
        page="Home"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="A three day arts and music festival located in the Columbia Valley just outside Fairmont BC, Canada."
        url="wickedwoods.ca"
      />
      <div className={styles.Container}>
        <div
          className={styles.Hero}
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <Image
            alt="Wicked Woods Music Festival Wordmark Logo"
            src={wordmark}
            className={styles.Wordmark}
            fill
          />
          <Image
            alt="Wicked Woods Music Festival Wordmark Logo"
            src={datestamp}
            className={styles.DateStamp}
            fill
          />
          <div className={styles.Button}>
            <TicketButton />
          </div>
        </div>

        <div className={styles.Gallery}>
          <Gallery
            images={generateGalleryImages(galleryA)}
            targetRowHeight={300}
          />
        </div>
        <div className={styles.DescriptionWrapper}>
          <div className={styles.Description}>
            <div className={styles.TextWrapper}>
              <Paragraph className={styles.DescriptionText}>
                Held on traditional unceded territory of the Akisqnuk First
                Nation, Wicked Woods Music and Arts Festival is is an annual
                celebration of life through sight & sound.
              </Paragraph>
              <Paragraph className={styles.DescriptionText}>
                Nestled on the edge of the Canadian Rockies, our intimate
                festival is just minutes from Fairmont Hot Springs BC
                overlooking the Columbia Valley.
              </Paragraph>
              <Paragraph className={styles.DescriptionText}>
                We strongly value community, expression, and connection both
                with our fellow humans and the land on which we gather.
              </Paragraph>
            </div>
          </div>
          <div className={styles.VideoWrapper}>
            <YouTubePlayer videoId="Ofp6omfL4r4" opts={{ loop: 1 }} />
          </div>

          <div className={styles.Gallery}>
            <Gallery
              images={generateGalleryImages(galleryB)}
              targetRowHeight={200}
            />
          </div>
        </div>
        <div className={styles.Applications}>
          <div>
            <JumboHeading>Calling all Creatives!!</JumboHeading>
            <Paragraph>Our Creative Applications are NOW OPEN!</Paragraph>
          </div>

          <Link href="/apply">
            <div
              style={{ backgroundImage: `url(${sky.src})` }}
              className={styles.ApplyButton}
            >
              <JumboHeading className={styles.ApButt}>APPLY</JumboHeading>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
