import React from "react";
import Image from "next/image";

import cx from "classnames";

import Gallery from "@/components/Gallery";

import logo from "/public/assets/2024logo.png";
import heroImage from "/public/assets/skyvalley.jpg";
import { H3, JumboHeading, Paragraph } from "@/components/Typography";
import YouTubePlayer from "@/components/YoutubePlayer";
import PageHead from "@/components/PageHead";

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
          <div className={styles.LogoWrapper}>
            <Image
              alt="Wicked Woods Music Festival Logo"
              src={logo}
              className={styles.Wordmark}
            />
          </div>
          <H3 className={styles.Date}>August 30 - September 1</H3>
          <div className={styles.Button}>
            <TicketButton />
          </div>
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
                <JumboHeading>Calling all Creatives!!</JumboHeading>
                <Paragraph>Our Creative Applications are NOW OPEN!</Paragraph>
              </div>

              <Link href="/apply">
                <div className={styles.ApplyButton}>
                  <JumboHeading className={styles.ApButt}>APPLY</JumboHeading>
                </div>
              </Link>
            </div>
            <div className={styles.Application}>
              <div>
                <JumboHeading>Join the Crew!</JumboHeading>
                <Paragraph>Our Crew Applications open Feb.20th!</Paragraph>
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
