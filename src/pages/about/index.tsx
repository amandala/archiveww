import React from "react";
import Image from "next/image";

import Gallery from "@/components/Gallery";

import curiousBlue from "/public/assets/backgrounds/curious_blue-min.png";
import backgroundBlack from "/public/assets/backgrounds/wicked_black-min.png";
import hazyGreen from "/public/assets/backgrounds/green_haze-min.png";
import wordmark from "/public/assets/FONT_WITH_MF_2024.png";
import bananaPhone from "/public/assets/bananaPhone.jpg";
import hallowNights from "/public/assets/hallow-nights-min.jpg";
import eagle from "/public/assets/this_is_eagull.png";

import styles from "./index.module.scss";

import slides from "../../data/aboutImages";

import TextLink from "@/components/TextLink";
import { H4, Paragraph } from "@/components/Typography";
import YouTubePlayer from "@/components/YoutubePlayer";
import PageHead from "@/components/PageHead";

export default function About() {
  return (
    <div>
      <PageHead
        page="About"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Learn more about Wicked Woods Music Festival"
        url="wickedwoods.ca/about"
      />
      <div className={styles.Container}>
        <div className={styles.Hero}>
          <Image
            alt="Hallow stage at night with lasers"
            src={hallowNights}
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
            }}
            fill
            loading="eager"
            priority
            placeholder="blur"
          />
          <Image
            alt="Wicked Woods Music Festival Wordmark Logo"
            src={wordmark}
            style={{
              objectFit: "contain",
              zIndex: 20,
              paddingLeft: 20,
              paddingRight: 20,
              maxWidth: 800,
              margin: "0 auto",
            }}
            fill
          />
        </div>
        <div
          className={styles.Gallery}
          style={{ backgroundImage: `url(${backgroundBlack.src})` }}
        >
          <Gallery images={slides} targetRowHeight={300} />
        </div>
        <div>
          <div
            className={styles.Description}
            style={{ backgroundImage: `url(${curiousBlue.src})` }}
          >
            <div className={styles.TextWrapper}>
              <Paragraph>
                Held on traditional unceded territory of the Akisqnuk First
                Nation, Wicked Woods Music and Arts Festival is is an annual
                celebration of life through sight & sound.
              </Paragraph>
              <Paragraph>
                Nestled on the edge of the Canadian Rockies, our intimate
                festival is just minutes from Fairmont Hot Springs BC
                overlooking the Colombia Valley.
              </Paragraph>
              <Paragraph>
                We strongly value community, expression, and connection both
                with our fellow humans and the land on which we gather.
              </Paragraph>
            </div>
            <div className={styles.EagleContainer}>
              <Image
                alt="Eagle"
                src={eagle}
                fill
                style={{
                  objectFit: "contain",
                  zIndex: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  maxWidth: 800,
                  margin: "0 auto",
                }}
              />
            </div>
          </div>

          <div
            className={styles.VideoWrapper}
            style={{ backgroundImage: `url(${backgroundBlack.src})` }}
          >
            <YouTubePlayer videoId="v1bZlwG434Y" opts={{ loop: 1 }} />
          </div>
          <div
            className={styles.Contact}
            id="directory"
            style={{ backgroundImage: `url(${hazyGreen.src})` }}
          >
            <div>
              <h2>Contact Directory</h2>
              <Image
                src={bananaPhone}
                width={330}
                height={330}
                placeholder="blur"
                alt="DJ Benanas holding a giant inflatable banana as a phone"
                style={{ borderRadius: "200px", border: "20px solid #141313" }}
              />
            </div>
            <ul>
              <li>
                <H4>General Inquiries</H4>
                <TextLink href="mailto:info@wickedwoods.ca">
                  info@wickedwoods.ca
                </TextLink>
              </li>
              <li>
                <H4>Marketing</H4>
                <TextLink href="mailto:marketing@wickedwoods.ca">
                  marketing@wickedwoods.ca
                </TextLink>
              </li>
              <li>
                <H4>Volunteers</H4>
                <TextLink href="mailto:volunteers@wickedwoods.ca">
                  volunteers@wickedwoods.ca
                </TextLink>
              </li>
              <li>
                <H4>Vendors</H4>
                <TextLink href="mailto:vendors@wickedwoods.ca">
                  vendors@wickedwoods.ca
                </TextLink>
              </li>
              <li>
                <H4>Health & Safety / Harm Reduction Services</H4>
                <TextLink href="mailto:healthandsafety@wickedwoods.ca">
                  healthandsafety@wickedwoods.ca
                </TextLink>
              </li>
              <li>
                <H4>Media</H4>
                <TextLink href="mailto:media@wickedwoods.ca">
                  media@wickedwoods.ca
                </TextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
