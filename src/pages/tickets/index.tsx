import Image from "next/image";

import PageHead from "@/components/PageHead";
import { JumboHeading, H1, H2, H3, Paragraph } from "@/components/Typography";

import sunne from "/public/assets/sunnE.png";
import orientBlueBg from "/public/assets/backgrounds/orient_blue-min.png";
import prussianBlueBG from "/public/assets/backgrounds/prussian_blue-min.png";

import styles from "./index.module.scss";

export default function Tickets() {
  return (
    <div
      className={styles.Wrapper}
      style={{ backgroundImage: `url(${orientBlueBg.src})` }}
    >
      <div>
        <PageHead
          page="Tickets"
          image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
          description="2024 Tickets on Sale November 17"
          url="wickedwoods.ca/tickets"
        />
        <div className={styles.Content}>
          <JumboHeading>2024 Tickets</JumboHeading>
          <H1>On Sale Dec. 1</H1>
          <section style={{ backgroundImage: `url(${prussianBlueBG.src})` }}>
            <H1>General Admission</H1>

            <div className={styles.TicketTier}>
              <Image
                alt="placeholder"
                src={sunne}
                width={200}
                height={200}
                className={styles.SunnE}
              />
              {/* <Image
                alt="placeholder"
                src={curiousBlue}
                width={100}
                height={100}
              /> */}
              <span>
                <H2>Tier 1</H2>
                <JumboHeading className={styles.Price}>$320</JumboHeading>
              </span>
            </div>
            <div className={styles.TicketTier}>
              {/* <Image
                alt="placeholder"
                src={curiousBlue}
                width={100}
                height={100}
              /> */}
              <span>
                <H2>Tier 2</H2>
                <JumboHeading className={styles.Price}>$345</JumboHeading>
              </span>
            </div>
            <div className={styles.TicketTier}>
              {/* <Image
                alt="placeholder"
                src={curiousBlue}
                width={100}
                height={100}
              /> */}
              <span>
                <H2>Tier 3</H2>
                <JumboHeading className={styles.Price}>$375</JumboHeading>
              </span>
            </div>
            <Paragraph>
              GA Tickets allow access between Friday and Monday
            </Paragraph>
          </section>
          <section style={{ backgroundImage: `url(${prussianBlueBG.src})` }}>
            <H1>Add Ons</H1>
            <div className={styles.CampGrid}>
              <div className={styles.Option}>
                <Paragraph>Thursday early entry</Paragraph>
                <JumboHeading className={styles.Price}>$65</JumboHeading>
              </div>

              <div className={styles.Option}>
                <Paragraph>Weekend shower pass</Paragraph>
                <JumboHeading className={styles.Price}>$32</JumboHeading>
              </div>
            </div>
          </section>
          <section style={{ backgroundImage: `url(${prussianBlueBG.src})` }}>
            <H1>Parking & Camping</H1>
            <div>
              <JumboHeading className={styles.CampLot}>
                Juniper Lot
              </JumboHeading>
              <div className={styles.CampGrid}>
                <div>
                  <H3 className={styles.FirstServe}>First serve basis</H3>
                  <div className={styles.Option}>
                    <Paragraph>Regular Vehicle/RV Pass under 21 feet</Paragraph>
                    <JumboHeading className={styles.Price}>$80</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <Paragraph>Large Vehicle/RV Pass 21-40 feet</Paragraph>
                    <JumboHeading className={styles.Price}>$160</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <Paragraph>Mega Vehicle/RV Pass 41 feet and over</Paragraph>
                    <JumboHeading className={styles.Price}>$300</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Reserved}>Reserved Camping</H3>
                  <div className={styles.Option}>
                    <Paragraph>Reserved Campsite 14x21</Paragraph>
                    <JumboHeading className={styles.Price}>$400</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <Paragraph>Reserved Campsite 14x41 feet</Paragraph>
                    <JumboHeading className={styles.Price}>$700</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.ReadySet}>Ready Set Camp</H3>
                  <div className={styles.Option}>
                    <Paragraph>
                      Five-person tent set up for 2 people with air mattress and
                      pump
                    </Paragraph>
                    <JumboHeading className={styles.Price}>$600</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <div className={styles.Option}>
                    <Paragraph>Juniper Lot Glamping</Paragraph>
                    <JumboHeading className={styles.Price}>$980</JumboHeading>
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
                  <div className={styles.Option}>
                    <Paragraph>Regular Vehicle/RV Pass under 21 feet</Paragraph>
                    <JumboHeading className={styles.Price}>$70</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <Paragraph>
                      Large Vehicle/RV Pass Hidden Ridge 21-30 feet
                    </Paragraph>
                    <JumboHeading className={styles.Price}>$115</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <div className={styles.Option}>
                    <Paragraph>Hidden Ridge Glamping</Paragraph>
                    <JumboHeading className={styles.Price}>$910</JumboHeading>
                  </div>
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
                  <div className={styles.Option}>
                    <Paragraph>Regular Vehicle/RV Pass under 21 feet</Paragraph>
                    <JumboHeading className={styles.Price}>$60</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <Paragraph>Large Vehicle/RV Pass 21-40 feet</Paragraph>
                    <JumboHeading className={styles.Price}>$120</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <Paragraph>Mega Vehicle/RV Pass 41 feet and over</Paragraph>
                    <JumboHeading className={styles.Price}>$180</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <div className={styles.Option}>
                    <Paragraph>Raven&apos;s Nest Glamping with power</Paragraph>

                    <JumboHeading className={styles.Price}>$860</JumboHeading>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <JumboHeading className={styles.CampLot}>
                Eagle&apos;s Nest
              </JumboHeading>
              <div className={styles.CampGrid}>
                <div>
                  <H3 className={styles.Reserved}>Reserved Camping</H3>
                  <div className={styles.Option}>
                    <Paragraph>Powered 16x50 foot RV site</Paragraph>
                    <JumboHeading className={styles.Price}>$1200</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <Paragraph>Powered 30x30 foot RV site</Paragraph>
                    <JumboHeading className={styles.Price}>$1050</JumboHeading>
                  </div>
                </div>
                <div>
                  <H3 className={styles.Glamping}>Glamping</H3>
                  <div className={styles.Option}>
                    <Paragraph>
                      Eagle&apos;s Nest Glamour Glamping with power
                    </Paragraph>
                    <JumboHeading className={styles.Price}>$1455</JumboHeading>
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
