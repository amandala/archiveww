import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { PageWrapper } from "@/components/PageWrapper";
import { H1, JumboHeading, Paragraph } from "@/components/Typography";

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

export default function Volunteer() {
  return (
    <>
      <PageHead
        page="Volunteer"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Information on Wicked Woods volunteer roles and applications"
        url="wickedwoods.ca/volunteer"
      />
      <div>
        <PageWrapper className={styles.Page}>
          <div className={styles.PageInfo}>
            <div className={styles.Main}>
              <JumboHeading>Volunteer</JumboHeading>
              <div>
                <Paragraph>
                  Are you ready to be part of the heartbeat behind an
                  unforgettably wicked experience? We&apos;re calling on
                  passionate individuals like YOU to join our volunteer team for
                  the upcoming Wicked Woods Music Festival, August 30 -
                  September 1, 2024! Get ready to be immersed in a world of
                  music, creativity, nature, and vibrant energy.
                </Paragraph>
                <Paragraph>
                  Keep your eyes on our social media for the application release
                  details, and come back here for the volunteer application once
                  it&apos;s open.
                </Paragraph>
              </div>
            </div>
            <div className={styles.Perks}>
              <div>
                <H1>Experience the Magic ✨ </H1>
                <Paragraph>
                  Immerse yourself in the thrill of live event production and
                  help create the magic.
                </Paragraph>
              </div>
              <div>
                <H1>Connect with Like-Minded Souls ✨ </H1>
                <Paragraph>
                  Build lasting friendships with fellow music enthusiasts who
                  share your passion for creating memorable moments.
                </Paragraph>
              </div>
              <div>
                <H1>Exclusive Access ✨ </H1>
                <Paragraph>
                  Enjoy behind-the-scenes glimpses, exclusive perks, and a
                  unique perspective that festival-goers won&apos;t have.
                </Paragraph>
              </div>
              <div>
                <H1>Skill Enhancement ✨ </H1>
                <Paragraph>
                  Develop and enhance your organizational, teamwork, and
                  problem-solving skills in a dynamic and fast-paced
                  environment.
                </Paragraph>
              </div>
              <div>
                <H1>Free Festival Access ✨ </H1>
                <Paragraph>
                  Be part of the action while still having time to catch your
                  favorite performances.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className={styles.GalleryWrapper}>
            <Gallery images={galleryImages} targetRowHeight={300} />
          </div>
        </PageWrapper>
      </div>
    </>
  );
}
