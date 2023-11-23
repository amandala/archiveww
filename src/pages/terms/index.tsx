import {
  H2,
  H4,
  Paragraph,
  // OList,
  // ListItem,
  JumboHeading,
} from "@/components/Typography";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import WW_Sandy_Brown from "/public/assets/WW-sandy_brown.png";

import background from "/public/assets/backgrounds/prussian_blue-min.png";

import styles from "./index.module.scss";

export default function Terms() {
  return (
    <div
      className={styles.Wrapper}
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <PageHead
        page="Terms"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Wicked Woods Music Festival Terms and Conditions."
        url="wickedwoods.ca/terms"
      />
      <div className={styles.Content}>
        <Image
          className={styles.Logo}
          src={WW_Sandy_Brown}
          alt="Sandy Brown Wicked Woods Logo"
          priority
          style={{
            margin: "0 auto",
            maxWidth: "300px",
            height: "auto",
            display: "block",
            padding: "20px",
          }}
        />
        <div className={styles.HeaderWrapper}>
          <JumboHeading>Terms and Conditions</JumboHeading>
        </div>
        <div>
          <Paragraph className={styles.Ack}>
            Wicked Woods Music Festival acknowledges and expresses its gratitude
            to the Akisqnuk First Nations on whose sacred land we work, live,
            and celebrate. We recognize that our global community converges
            amongst the landscapes of Raven&apos;s Nest Resort and Campground,
            situated in the traditional territories of the Akisqnuk First
            Nations. It is here, amidst the Kootenay region&apos;s mountains,
            forests, and waters, that we craft the magic that is Wicked Woods
            Music Festival. We hope our guests will deeply resonate with and pay
            respect to the past, present, and future of the Akisqnuk peoples
            upon their arrival at the venue.
          </Paragraph>
          <H2>
            2024 Wicked Woods Music Festival Rules & Ticket Sales Policies
          </H2>
        </div>
        <H4>Revised November 22, 2023</H4>
      </div>
    </div>
  );
}
