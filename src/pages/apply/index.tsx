import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { PageWrapper } from "@/components/PageWrapper";
import { JumboHeading, Paragraph, H2, Bold, H4 } from "@/components/Typography";

import wolf from "/public/assets/backgrounds/wolfMoon.png";

const images = require.context("/public/assets/gallery/crew", true);
const imageList = images.keys().map((image) => images(image));
const galleryImages = imageList.map((image) => {
  return {
    src: image.default.src,
    width: image.default.width,
    height: image.default.height,
  };
});

import styles from "./index.module.scss";
import Link from "next/link";

export default function Apply() {
  return (
    <>
      <PageHead
        page="Apply"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Information on Wicked Woods creative and crew applications"
        url="wickedwoods.ca/apply"
      />
      <div>
        <PageWrapper
          className={styles.Page}
          style={{ backgroundImage: `url(${wolf.src})` }}
        >
          <div className={styles.PageContent}>
            <JumboHeading className={styles.Title}>
              Apply at Wicked Woods
            </JumboHeading>
            <div className={styles.Intro}>
              <Paragraph>
                Are you ready to be part of the heartbeat behind an
                unforgettably wicked experience?
              </Paragraph>
              <Paragraph>
                We&apos;re calling on passionate individuals like YOU to join
                our wicked party!
              </Paragraph>
            </div>
            <div className={styles.Tables}>
              <div>
                <H2>Creative Applications</H2>
                <div className={styles.Table}>
                  <div></div>
                  <div>
                    <Paragraph>
                      <Bold>Open</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>
                      <Bold>Closed</Bold>
                    </Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Music</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://forms.gle/eDE1mPP8VvcpW1DH6"
                    >
                      <H4 className={styles.ApplyLink}>Apply</H4>
                    </Link>
                  </div>
                  <div>
                    <Paragraph>Mar 5</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Performance</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://forms.gle/1AFa9Y42snj27Wro8"
                    >
                      <H4 className={styles.ApplyLink}>Apply</H4>
                    </Link>
                  </div>
                  <div>
                    <Paragraph>Mar 30</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Installations</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://forms.gle/8ETUpR86m9mQae7w9"
                    >
                      <H4 className={styles.ApplyLink}>Apply</H4>
                    </Link>
                  </div>
                  <div>
                    <Paragraph>Jun 5</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Workshops</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href="https://forms.gle/Ar78ZjpDREQckhAp6"
                    >
                      <H4 className={styles.ApplyLink}>Apply</H4>
                    </Link>
                  </div>
                  <div>
                    <Paragraph>Jun 5</Paragraph>
                  </div>
                </div>
              </div>
              <div>
                <H2>Crew Applications</H2>
                <div className={styles.Table}>
                  <div></div>
                  <div>
                    <Paragraph>
                      <Bold>Open</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>
                      <Bold>Closed</Bold>
                    </Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Volunteer</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>Feb 20</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Aug 16</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Health & Safety</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>Feb 20</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Aug 16</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Medical</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>Feb 20</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Aug 16</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Vendor</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>Feb 20</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Jun 5</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Media</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>Feb 20</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Jun 5</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Site Decor</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>Feb 20</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Jun 5</Paragraph>
                  </div>

                  <div>
                    <Paragraph>
                      <Bold>Street Team</Bold>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph>Feb 20</Paragraph>
                  </div>
                  <div>
                    <Paragraph>Jun 5</Paragraph>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={styles.Perks}>
              <div>
                <Paragraph>Experience the Magic ✨ </Paragraph>
                <Paragraph>
                  Immerse yourself in the thrill of live event production and
                  help create the magic.
                </Paragraph>
              </div>
              <div>
                <H4>Connect with Like-Minded Souls ✨ </H4>
                <Paragraph>
                  Build lasting friendships with fellow music enthusiasts who
                  share your passion for creating memorable moments.
                </Paragraph>
              </div>
              <div>
                <H4>Exclusive Access ✨ </H4>
                <Paragraph>
                  Enjoy behind-the-scenes glimpses, exclusive perks, and a
                  unique perspective that festival-goers won&apos;t have.
                </Paragraph>
              </div>
              <div>
                <H4>Skill Enhancement ✨ </H4>
                <Paragraph>
                  Develop and enhance your organizational, teamwork, and
                  problem-solving skills in a dynamic and fast-paced
                  environment.
                </Paragraph>
              </div>
              <div>
                <H4>Free Festival Access ✨ </H4>
                <Paragraph>
                  Be part of the action while still having time to catch your
                  favorite performances.
                </Paragraph>
              </div>
            </div> */}
          </div>
        </PageWrapper>
        <div className={styles.GalleryWrapper}>
          <Gallery images={galleryImages} targetRowHeight={300} />
        </div>
      </div>
    </>
  );
}
