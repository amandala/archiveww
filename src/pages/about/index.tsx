import React from "react";
import Image from "next/image";
import cx from "classnames";

import Gallery from "@/components/Gallery";

import wordmark from "@/assets/FONT_WITH_MF.png";
import bananaPhone from "@/assets/bananaPhone.jpg";
import hallowNights from "@/assets/hallow-nights-min.jpg";

import styles from "./index.module.scss";

import { dinBold } from "@/styles/fonts";
import TextLink from "@/components/TextLink";
import { H4 } from "@/components/Typography";

export default function About() {
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.Hero}>
          <Image
            alt="Hallow stage at night with lasers"
            src={hallowNights}
            style={{
              objectFit: "cover",
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
        <div>
          <div className={styles.Description}>
            <p className={styles.Text}>
              Held on traditional unceded territory of the Akisqnuk First
              Nation, Wicked Woods Music and Arts Festival is is an annual
              celebration of life through sight & sound.
            </p>
            <p className={styles.Text}>
              Nestled on the edge of the Canadian Rockies, our intimate festival
              is just minutes from Fairmont Hot Springs BC overlooking the
              Colombia Valley.
            </p>

            <p className={styles.Text}>
              This Kootenay location’s limitless views and comfortable
              surroundings makes Wicked Woods a precious environment for all
              imaginations.
            </p>

            <p className={styles.Text}>
              We aim to provide a safe and welcoming space for all individuals
              to express their individuality alongside diverse performances,
              awe-inspiring art installations, and educational workshops, all
              curated to create a sense of discovery and wonder.
            </p>
            <p className={styles.Text}>
              We strongly value community, expression, and connection both with
              our fellow humans and the land on which we gather.
            </p>
          </div>
          <div className={styles.Gallery}>
            <Gallery />
          </div>
          <div className={styles.Contact} id="directory">
            <div>
              <h2>Contact Directory</h2>
              <Image
                src={bananaPhone}
                width={330}
                height={330}
                alt="Man holding a giant inflatable banana as a phone"
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
          {/* <div className={styles.Bear}>
            <Image
              src={bear}
              placeholder="blur"
              quality={100}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
              alt="bear"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
