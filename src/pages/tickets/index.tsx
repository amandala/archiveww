import Image from "next/image";

import cx from "classnames";

import PageHead from "@/components/PageHead";
import { JumboHeading, H1, H2, Paragraph, Bold } from "@/components/Typography";
import { SoldOutStamp } from "@/components/SoldOutStamp";

import tent from "/public/assets/tent.png";
import largeVeh from "/public/assets/LargeVehicle.png";
import regularVeh from "/public/assets/RegularVehicle.png";
import MegaVeh from "/public/assets/MegaVehicle.png";

import background from "/public/assets/backgrounds/sky_background-min.png";

import siteMap from "/public/assets/public-map.png";

import Gallery from "@/components/Gallery";

import styles from "./index.module.scss";
import TicketButton from "@/components/TicketButton";
import classNames from "classnames";
import { LowStockStamp } from "@/components/LowStockStamp";

const images = require.context("/public/assets/gallery/camping", true);
const imageList = images.keys().map((image) => images(image));
const galleryImages = imageList.map((image) => {
  return {
    src: image.default.src,
    width: image.default.width,
    height: image.default.height,
  };
});

export default function Tickets() {
  return (
    <div
      className={styles.Wrapper}
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div>
        <PageHead
          page="Tickets"
          image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
          description="2024 Tickets on Sale December 1"
          url="wickedwoods.ca/tickets"
        />
        <div className={styles.Content}>
          <JumboHeading className={styles.PageTitle}>2024 Tickets</JumboHeading>
          <div className={styles.TicketButtonWrapper}>
            <TicketButton />
          </div>

          <section>
            <JumboHeading className={styles.SectionHeading}>
              General Admission
            </JumboHeading>
            <Paragraph className={styles.SectionInfo}>
              GA Tickets are valid for entry Friday August 30, 2024 and can be
              used for re-entry until Sunday September 1, 2024.
            </Paragraph>
            <div className={styles.TierWrapper}>
              <div className={styles.TicketTier}>
                <span>
                  <H2>Tier 1</H2>
                  <JumboHeading
                    className={classNames(styles.Price, styles.PriceSoldOut)}
                  >
                    $320
                  </JumboHeading>
                  <SoldOutStamp />
                </span>
              </div>
              <div className={styles.TicketTier}>
                <span>
                  <H2>Tier 2</H2>
                  <JumboHeading className={styles.Price}>$345</JumboHeading>
                </span>
              </div>
              <div className={styles.TicketTier}>
                <span>
                  <H2>Tier 3</H2>
                  <JumboHeading className={styles.Price}>$375</JumboHeading>
                </span>
              </div>
            </div>
          </section>
          {/* <div className={styles.PaymentPlans}>
            <H2>Payment Plans Available!</H2>
            <Paragraph>
              Secure your ticket on a payment plan and spread out the cost over
              multiple months.{" "}
              <Link
                href="/terms#payment-plan"
                style={{ display: "block", marginTop: "8px" }}
              >
                <Bold>Learn More</Bold>
              </Link>
            </Paragraph>
          </div> */}
          <section>
            <JumboHeading className={styles.SectionHeading}>
              Add Ons
            </JumboHeading>
            <div className={styles.CampGrid}>
              <div className={styles.Option}>
                <span>
                  <H2>Thursday early entry</H2>
                  <Paragraph>Valid for entry August 29, 2024</Paragraph>
                </span>
                <JumboHeading className={styles.Price}>$65</JumboHeading>
              </div>

              <div className={styles.Option}>
                <span>
                  <H2>Weekend shower pass</H2>
                  <Paragraph>
                    Grants weekend shower access. Showers open 8:00am - 8:00pm
                    daily.
                  </Paragraph>
                </span>
                <JumboHeading className={styles.Price}>$32</JumboHeading>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.CampGrid}>
              <Gallery targetRowHeight={400} images={[siteMap]} />
              <div className={styles.Zones}>
                <div>
                  <span>
                    <Paragraph>
                      <Bold>Juniper</Bold> is the closest camping to the stages,
                      ideal for those who want to be amongst the action. Juniper
                      is our most sought after zone and is one of the first
                      zones to sell out!
                    </Paragraph>
                  </span>
                </div>

                <div>
                  <span>
                    <Paragraph>
                      <Bold>Hidden Ridge</Bold> is a short walk to the stages
                      but gives you a little more distance from the party. This
                      zone is heavily treed and nice for those seeking a shady
                      spot.
                    </Paragraph>
                  </span>
                </div>

                <div>
                  <span>
                    <Paragraph>
                      <Bold>Raven&apos;s Nest</Bold> is perfect for those
                      wanting a quieter camp zone to take a break from the bass.
                      It takes roughly 15 minutes to walk to Raven&apos;s Nest
                      from downtown, so bring a water bottle for the trek!
                    </Paragraph>
                  </span>
                </div>

                <div>
                  <span>
                    <Paragraph>
                      <Bold>Eagle&apos;s Nest</Bold> is set along the ridge
                      overlooking the valley with a bit more privacy, beautiful
                      views, and a close proximity to downtown. We have limited
                      space in Eagle&apos;s Nest and these sites get scooped up
                      quickly!
                    </Paragraph>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <Image
              alt="Car"
              src={regularVeh}
              width={200}
              height={200}
              className={cx(styles.Vehicle, styles.Car)}
            />
            <Image
              alt="RV"
              src={largeVeh}
              width={200}
              height={200}
              className={cx(styles.Vehicle, styles.RV)}
            />
            <Image
              alt="Buss"
              src={MegaVeh}
              width={200}
              height={200}
              className={cx(styles.Vehicle, styles.Buss)}
            />
            <JumboHeading className={styles.SectionHeading}>
              Park n&apos; Camp
            </JumboHeading>
            <Paragraph className={styles.SectionInfo}>
              A vehicle pass is required to bring a vehicle past the free
              parking lot.
            </Paragraph>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Juniper</H1>
              <div className={styles.CampGrid}>
                <div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Regular Vehicle Pass</H2>
                      <Paragraph>under 21 feet</Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>$80</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Large Vehicle Pass</H2>
                      <Paragraph>21-41 feet, including tow vehicle</Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>
                      $160
                      <LowStockStamp />
                    </JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Mega Vehicle Pass</H2>
                      <Paragraph>
                        41 feet and over, including tow vehicle
                      </Paragraph>
                    </span>

                    <JumboHeading className={styles.Price}>
                      $300 <LowStockStamp />
                    </JumboHeading>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Hidden Ridge</H1>
              <div className={styles.CampGrid}>
                <div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Regular Vehicle Pass</H2>
                      <Paragraph>under 21 feet</Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>$70</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Large Vehicle Pass</H2>
                      <Paragraph>21-41 feet, including tow vehicle</Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>
                      $115
                      <LowStockStamp />
                    </JumboHeading>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Raven&apos;s Nest</H1>
              <div className={styles.CampGrid}>
                <div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Regular Vehicle Pass</H2>
                      <Paragraph>under 21 feet</Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>$60</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Large Vehicle Pass</H2>
                      <Paragraph>21-41 feet, including tow vehicle</Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>$120</JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Mega Vehicle Pass</H2>
                      <Paragraph>
                        41 feet and over, including tow vehicle
                      </Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>$180</JumboHeading>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <Image
              alt="Tent"
              src={tent}
              width={200}
              height={200}
              className={cx(styles.Vehicle, styles.Tent)}
            />
            <JumboHeading className={styles.SectionHeading}>
              Camping Packages
            </JumboHeading>
            <Paragraph className={styles.SectionInfo}>
              Elevate your Wicked Woods camping experience with one of our new
              Camping or Glamping Packages.
            </Paragraph>
            <Paragraph className={styles.SectionInfo}>
              Each package includes a regular vehicle pass. If you plan to bring
              a larger vehicle on site, you will be required to purchase the
              appropriate sized vehicle pass in addition to your package. Please
              note that you will also be required to purchase a GA ticket for
              entry to the festival.
            </Paragraph>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Juniper</H1>
              <div className={styles.CampGrid}>
                <div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Regular Reserved Camping Package</H2>
                      <Paragraph>
                        Reserved 20&apos;x20&apos; Campsite in Juniper. Includes
                        one regular vehicle pass.
                      </Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>
                      $400
                      <SoldOutStamp />
                    </JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Large Reserved Camping Package</H2>
                      <Paragraph>
                        Reserved 20&apos;x40&apos; Campsite in Juniper. Includes
                        one regular vehicle pass.
                      </Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>
                      $700
                      <LowStockStamp />
                    </JumboHeading>
                  </div>
                  <div className={styles.Option}>
                    <span>
                      <H2>Ready-Set-Camp Package</H2>
                      <Paragraph>
                        Pre-Assembled Campsite in Juniper. Includes a
                        five-person tent, air mattress, bedding, and pump. Max
                        two people. Includes one regular vehicle pass.
                      </Paragraph>
                    </span>
                    <JumboHeading className={styles.Price}>$600</JumboHeading>
                  </div>
                </div>
                <div className={styles.Option}>
                  <span>
                    <H2>Glamping Package</H2>
                    <Paragraph>
                      Glamping Package in Juniper with 5 meter bell tent.
                      Includes a queen bed fully set up with bedding for two,
                      one regular vehicle pass, and early entry for two people.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>
                    $980
                    <LowStockStamp />
                  </JumboHeading>
                </div>
              </div>
            </div>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Hidden Ridge</H1>
              <div className={styles.CampGrid}>
                <div className={styles.Option}>
                  <span>
                    <H2>Glamping Package</H2>
                    <Paragraph>
                      Glamping Package in Hidden Ridge with 5 meter bell tent.
                      Includes a queen bed fully set up with bedding for two,
                      one regular vehicle pass, and early entry for two people.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>$910</JumboHeading>
                </div>
              </div>
            </div>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Raven&apos;s Nest</H1>
              <div className={styles.CampGrid}>
                <div className={styles.Option}>
                  <span>
                    <H2>Glamping Package</H2>
                    <Paragraph>
                      Glamping Package in Raven&apos;s Nest with 5 meter bell
                      tent. Includes a queen bed fully set up with bedding for
                      two, one regular vehicle pass, and early entry for two
                      people.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>$860</JumboHeading>
                </div>
              </div>
            </div>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Eagle&apos;s Nest</H1>
              <div className={styles.CampGrid}>
                <div className={styles.Option}>
                  <span>
                    <H2>Powered RV Package</H2>

                    <Paragraph>
                      Reserved 16&apos;x50&apos; Powered RV Site in Eagle&apos;s
                      Nest. Includes one mega vehicle pass. Limit of one RV per
                      site.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>
                    $1200 <SoldOutStamp />
                  </JumboHeading>
                </div>
                <div className={styles.Option}>
                  <span>
                    <H2>Large Reserved Campsite Package</H2>
                    <Paragraph>
                      Reserved 30&apos;x30&apos; Campsite in Eagle&apos;s Nest.
                      Includes one regular vehicle pass.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>
                    $1050
                    <SoldOutStamp />
                  </JumboHeading>
                </div>
                <div className={styles.Option}>
                  <span>
                    <H2>Prime Glamping Package</H2>
                    <Paragraph>
                      Prime Glamping Package in Eagle&apos;s Nest with 5m Bell
                      Tent and power. Includes a queen bed fully set up with
                      bedding for two, one regular vehicle pass, and early entry
                      for two people.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>$1455</JumboHeading>
                </div>
              </div>
            </div>
            <div className={styles.CampLot}>
              <H1 className={styles.CampLotTitle}>Camping Package Add-ons</H1>
              <div className={styles.CampGrid}>
                <div className={styles.Option}>
                  <span>
                    <H2>Camping Cooler Rental</H2>
                    <Paragraph>
                      Keep it cool. Enjoy the convenience of picking up your
                      camping cooler on-site at our HR office.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>$50</JumboHeading>
                </div>
                <div className={styles.Option}>
                  <span>
                    <H2>Camping Chair Rental</H2>
                    <Paragraph>
                      Take a load off. Enjoy the convenience of picking up your
                      camping chair on-site at our HR office.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>$30</JumboHeading>
                </div>
                <div className={styles.Option}>
                  <span>
                    <H2>Bedding Rental</H2>
                    <Paragraph>
                      Rest and relax. Enjoy the convenience of picking up Queen
                      sheets, two pillows, and a Queen blanket on-site at our HR
                      office.
                    </Paragraph>
                  </span>
                  <JumboHeading className={styles.Price}>$90</JumboHeading>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.TicketButtonWrapper}>
          <TicketButton />
        </div>
      </div>
      <div
        style={{
          marginLeft: "-24px",
          marginRight: "-24px",
          position: "relative",
        }}
      >
        <div className={styles.Gallery}>
          <Gallery images={galleryImages} targetRowHeight={300} />
        </div>
      </div>
    </div>
  );
}
