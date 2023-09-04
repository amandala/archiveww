import { Navbar } from "@/components/Navbar";
import React from "react";

import bear from "../../assets/paper_bear_alpha.png";
import styles from "./index.module.scss";
import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.Container}>
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
            <h3 className={styles.Value}>
              We strongly value community, expression, and connection both with
              our fellow humans and the land on which we gather.
            </h3>
          </div>
          {/* <div className={styles.Gallery}>
          <Gallery />
        </div> */}
          <div className={styles.Description2}>
            <div className={styles.Bullets}>
              <div>
                <h2>Vision</h2>
                <p className={styles.Text}>
                  Inspired by our intimate and sacred venue, we provide a safe
                  and creative space for all individuals to express their
                  creativity alongside diverse curated performances,
                  awe-inspiring art installations, and educational workshops
                  that create a sense of discovery and wonder.
                </p>
              </div>
              <div>
                <h2>Mission</h2>
                <p className={styles.Text}>
                  To create unforgettable experiences and glimmering encounters
                  with a unique blend of performances and attractions set on
                  sacred grounds. We thoughtfully curate our talent lineup,
                  workshops, and art installations with the intention
                  facilitating glimmers of joy.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.Contact}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <span>General Inquiries</span>
                <a href="mailto:info@wickedwoods.ca">info@wickedwoods.ca</a>
              </li>
              <li>
                <span>Marketing</span>
                <a href="mailto:marketing@wickedwoods.ca">
                  marketing@wickedwoods.ca
                </a>
              </li>
              <li>
                <span>Volunteers</span>
                <a href="mailto:volunteers@wickedwoods.ca">
                  volunteers@wickedwoods.ca
                </a>
              </li>
              <li>
                <span>Vendors</span>
                <a href="mailto:vendors@wickedwoods.ca">
                  vendors@wickedwoods.ca
                </a>
              </li>
              <li>
                <span>Health & Safety / Harm Reduction Services</span>
                <a href="mailto:healthandsafety@wickedwoods.ca">
                  healthandsafety@wickedwoods.ca
                </a>
              </li>
              <li>
                <span>Media</span>
                <a href="mailto:media@wickedwoods.ca">media@wickedwoods.ca</a>
              </li>
            </ul>
          </div>
          <div className={styles.Bear}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
