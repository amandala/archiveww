import React from "react";
import Image from "next/image";
import cx from "classnames";

import Gallery from "@/components/Gallery";

import wordmark from "@/assets/FONT_WITH_MF.png";
import bear from "@/assets/paper_bear_alpha.png";
import hallowNights from "@/assets/hallow-nights-min.jpg";

import styles from "./index.module.scss";

import { dinBold } from "@/styles/fonts";

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
              celebration of life through sight & sound. Our intimate festival
              is nestled on the edge of the Canadian Rockies, just minutes from
              Fairmont Hot Springs BC, overlooking the Colombia Valley. This
              Kootenay location’s limitless views and comfortable surroundings
              makes Wicked Woods a precious environment for all imaginations.
            </p>

            <p className={styles.Text}>
              Inspired by our intimate and sacred venue, we provide a safe and
              welcoming space for all individuals to express their individuality
              alongside diverse performances, awe-inspiring art installations,
              and educational workshops, all curated to create a sense of
              discovery and wonder.
            </p>
            <h3 className={styles.Value}>
              We strongly value community, expression, and connection both with
              our fellow humans and the land on which we gather.
            </h3>
          </div>
          <div className={styles.Gallery}>
            <Gallery />
          </div>
          <div className={styles.Contact}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <span className={cx(styles.DirectoryName, dinBold.className)}>
                  General Inquiries
                </span>
                <a href="mailto:info@wickedwoods.ca">info@wickedwoods.ca</a>
              </li>
              <li>
                <span className={cx(styles.DirectoryName, dinBold.className)}>
                  Marketing
                </span>
                <a href="mailto:marketing@wickedwoods.ca">
                  marketing@wickedwoods.ca
                </a>
              </li>
              <li>
                <span className={cx(styles.DirectoryName, dinBold.className)}>
                  Volunteers
                </span>
                <a href="mailto:volunteers@wickedwoods.ca">
                  volunteers@wickedwoods.ca
                </a>
              </li>
              <li>
                <span className={cx(styles.DirectoryName, dinBold.className)}>
                  Vendors
                </span>
                <a href="mailto:vendors@wickedwoods.ca">
                  vendors@wickedwoods.ca
                </a>
              </li>
              <li>
                <span className={cx(styles.DirectoryName, dinBold.className)}>
                  Health & Safety / Harm Reduction Services
                </span>
                <a href="mailto:healthandsafety@wickedwoods.ca">
                  healthandsafety@wickedwoods.ca
                </a>
              </li>
              <li>
                <span className={cx(styles.DirectoryName, dinBold.className)}>
                  Media
                </span>
                <a href="mailto:media@wickedwoods.ca">media@wickedwoods.ca</a>
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
