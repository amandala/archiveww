import React from "react";

import cx from "classnames";

import Gallery from "@/components/Gallery";

import { JumboHeading, Paragraph } from "@/components/Typography";
import YouTubePlayer from "@/components/YoutubePlayer";
import PageHead from "@/components/PageHead";

import bgStatic from "public/assets/backgrounds/bg-static.png";

import { generateGalleryImages } from "@/helpers/generateGalleryImages";

import styles from "./index.module.scss";
// import TicketButton from "@/components/TicketButton";
import Link from "next/link";
import TicketButton from "../TicketButton";

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
        <div className={styles.Hero}>
          <video
            autoPlay
            muted
            className={styles.HeroVid}
            poster={bgStatic.src}
          >
            <source src="/assets/heroAnimation.mp4" type="video/mp4" />
            Your browser does not support embedded video
          </video>
        </div>
        <div className={styles.TicketButton}>
          <TicketButton />
        </div>
        <div className={styles.PageContent}>
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

            <div className={cx(styles.Gallery, styles.HideMobile)}>
              <Gallery
                images={generateGalleryImages(galleryB)}
                targetRowHeight={200}
              />
            </div>
          </div>
          <div className={styles.Applications}>
            <div className={styles.Application}>
              <div>
                <JumboHeading className={styles.ApplicationText}>
                  Calling all Creatives
                </JumboHeading>
                <Paragraph>
                  We are accepting applications for Music, Art, Performance, and
                  Workshops. Apply today to showcase your creativity at the
                  Wickedest party in the Woods.
                </Paragraph>
              </div>

              <Link href="/apply">
                <div className={styles.ApplyButton}>
                  <JumboHeading className={styles.ApButt}>APPLY</JumboHeading>
                </div>
              </Link>
            </div>
            <div className={styles.Application}>
              <div>
                <JumboHeading className={styles.ApplicationText}>
                  Join our wicked Crew
                </JumboHeading>
                <Paragraph>
                  Our beloved crew are the real magic behind Wicked Woods. It
                  takes hundreds of passionate individuals to put on our party.
                  Apply today and help create the best Wicked Woods yet!
                </Paragraph>
              </div>

              <Link href="/apply">
                <div className={styles.ApplyButton}>
                  <JumboHeading className={styles.ApButt}>APPLY</JumboHeading>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.Gallery}>
            <Gallery
              images={generateGalleryImages(galleryA)}
              targetRowHeight={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
