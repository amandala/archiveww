import Image from "next/image";

import PageHead from "@/components/PageHead";
import { JumboHeading, H1, H2, H3, Paragraph } from "@/components/Typography";
import cloud1 from "/public/assets/sunsetScene/Clouds1-min.png";

import curiousBlue from "/public/assets/WW-curious_blue.png";

import styles from "./index.module.scss";

export default function Tickets() {
  return (
    <div className={styles.Wrapper}>
      <div
        className={styles.CloudTop}
        style={{ backgroundImage: `url(${cloud1.src})` }}
      >
        <PageHead
          page="Tickets"
          image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
          description="Follow us on social media for ticket drop announcements"
          url="wickedwoods.ca/tickets"
        />
        <div className={styles.Content}>
          <JumboHeading>2024 Ticket Info</JumboHeading>
          <H1>Tickets on sale Nov. 17</H1>
          <section>
            <H1>General Admission</H1>
            <div className={styles.TicketTier}>
              <Image
                alt="placeholder"
                src={curiousBlue}
                width={100}
                height={100}
              />
              <span>
                <H2>Tier 1</H2>
                <JumboHeading>$320</JumboHeading>
              </span>
            </div>
            <div className={styles.TicketTier}>
              <Image
                alt="placeholder"
                src={curiousBlue}
                width={100}
                height={100}
              />
              <span>
                <H2>Tier 2</H2>
                <JumboHeading>$345</JumboHeading>
              </span>
            </div>
            <div className={styles.TicketTier}>
              <Image
                alt="placeholder"
                src={curiousBlue}
                width={100}
                height={100}
              />
              <span>
                <H2>Tier 3</H2>
                <JumboHeading>$375</JumboHeading>
              </span>
            </div>
          </section>
          <section>
            <H1>Add Ons</H1>
            <div>
              <H2>Early Entry</H2>
              <Paragraph>
                Gain early entry onto the festival grounds Wednesday August 28
              </Paragraph>
              <JumboHeading>$65</JumboHeading>
            </div>
            <div>
              <H2>Showers</H2>
              <Paragraph>
                Access the shower trailer throughout the weekend at designated
                times.
              </Paragraph>
              <JumboHeading>$32</JumboHeading>
            </div>
          </section>
          <section>
            <H1>Parking & Camping</H1>
            <div>
              <JumboHeading className={styles.CampLot}>Juniper</JumboHeading>
              <div className={styles.CampGrid}>
                <div>
                  <H3 className={styles.FirstServe}>First serve basis</H3>
                  <div>
                    <Paragraph>Regular Vehicle/RV Pass under 21 feet</Paragraph>
                    <JumboHeading>$80</JumboHeading>
                  </div>
                  <div>
                    <Paragraph>Large Vehicle/RV Pass 21-40 feet</Paragraph>
                    <JumboHeading>$80</JumboHeading>
                  </div>
                  <div>
                    <Paragraph>Mega Vehicle/RV Pass 41 feet and over</Paragraph>
                    <JumboHeading>$300</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Reserved}>Reserved Camping</H3>
                  <div>
                    <Paragraph>Reserved Campsite 14x21 - No Power</Paragraph>
                    <JumboHeading>$400</JumboHeading>
                  </div>
                  <div>
                    <Paragraph>
                      Reserved Campsite 14x41 feet - No Power
                    </Paragraph>
                    <JumboHeading>$700</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.ReadySet}>Ready Set Camp</H3>
                  <div>
                    <Paragraph>
                      Five-person tent set up for 2 people with air matress and
                      pump
                    </Paragraph>
                    <JumboHeading>$600</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <div>
                    <Paragraph>
                      Basic Glamping 10x10&apos; and 5m Bell Tent{" "}
                    </Paragraph>
                    <JumboHeading>$980</JumboHeading>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <JumboHeading className={styles.CampLot}>
                Hidden Ridge
              </JumboHeading>
              <div className={styles.CampGrid}>
                <div>
                  <H3 className={styles.FirstServe}>First serve basis</H3>
                  <div>
                    <Paragraph>Regular Vehicle/RV Pass under 21 feet</Paragraph>
                    <JumboHeading>$70</JumboHeading>
                  </div>
                  <div>
                    <Paragraph>
                      Large Vehicle/RV Pass Hidden Ridge 21-30 feet
                    </Paragraph>
                    <JumboHeading>$115</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <Paragraph>
                    Basic Glamping 10x10&apos; lot and 5m Bell Tent
                  </Paragraph>
                  <JumboHeading>$910</JumboHeading>
                </div>
              </div>
            </div>
            <div>
              <JumboHeading className={styles.CampLot}>
                Raven&apos;s Nest
              </JumboHeading>
              <div className={styles.CampGrid}>
                <div>
                  <H3 className={styles.FirstServe}>First serve basis</H3>
                  <div>
                    <Paragraph>Regular Vehicle/RV Pass under 21 feet</Paragraph>
                    <JumboHeading>$60</JumboHeading>
                  </div>
                  <div>
                    <Paragraph>Large Vehicle/RV Pass 21-40 feet</Paragraph>
                    <JumboHeading>$120</JumboHeading>
                  </div>
                  <div>
                    <Paragraph>Mega Vehicle/RV Pass 41 feet and over</Paragraph>
                    <JumboHeading>$180</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <div>
                    <Paragraph>
                      Basic Glamping 20x20&apos; and 5m Bell Tent with power
                    </Paragraph>
                    <JumboHeading>$860</JumboHeading>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <JumboHeading className={styles.CampLot}>
                Eagles Nest
              </JumboHeading>
              <div className={styles.CampGrid}>
                <div>
                  <H3 className={styles.Reserved}>Reserved Camping</H3>
                  <div>
                    <Paragraph>Powered 16x50 foot RV site</Paragraph>
                    <JumboHeading>$1200</JumboHeading>
                  </div>
                  <div>
                    <Paragraph>Powered 30x30 foot RV site</Paragraph>
                    <JumboHeading>$1050</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <div>
                    <Paragraph>
                      Glamour Glamping 10x10&apos; and 5m Bell Tent with power
                    </Paragraph>
                    <JumboHeading>$1455</JumboHeading>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
