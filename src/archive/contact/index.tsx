import React from "react";
import Image from "next/image";

import bananaPhone from "/public/assets/bananaPhone.jpg";

import TextLink from "@/components/TextLink";
import { H4, JumboHeading } from "@/components/Typography";
import PageHead from "@/components/PageHead";

import background from "/public/assets/backgrounds/sky_background-min.png";

import styles from "./index.module.scss";

export default function Contact() {
  return (
    <div>
      <PageHead
        page="Contact Us"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Find email addresses to our departments on our contact page"
        url="wickedwoods.ca/contact"
      />
      <div
        className={styles.Container}
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className={styles.Contact} id="directory">
          <div>
            <JumboHeading className={styles.Heading}>
              Contact Directory
            </JumboHeading>
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
  );
}
