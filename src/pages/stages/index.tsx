import PageHead from "@/components/PageHead";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "./index.module.scss";
import { Paragraph, JumboHeading, Bold, H1 } from "@/components/Typography";

import Gallery from "@/components/Gallery";

export default function Stages() {
  return (
    <>
      <PageHead
        page="Stages"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="We have four unique stages: The Hallow, Ursus, Unicorn Lounge, and The Portal - each with their own magic and mystery."
        url="wickedwoods.ca/stages"
      />
      <PageWrapper className={styles.Wrapper}>
        <JumboHeading className={styles.Title}>Find your vibe</JumboHeading>
        <JumboHeading className={styles.Title}>
          at our 4 unique stages
        </JumboHeading>
        <div className={styles.Stages}>
          <div className={styles.Stage}>
            <div>
              <H1>The Hallow</H1>
              <div>
                <Paragraph>
                  When mother nature said she needed shelter from bad vibes, the
                  Wicked Woods answered and breathed life into{" "}
                  <Bold>The Hallow</Bold> – a crooked cabin where all are
                  welcome. Carefully hidden but easy to find; this structure
                  exists in synergy with the natural environment, providing a
                  heartbeat that compliments the song of an old and sacred land.
                </Paragraph>
                <Paragraph>
                  Prepare to be anchored and grounded in the center of our
                  collective experience, attune your senses to the magic within.
                  Feel the bass, see the light, be the vibe. They say the longer
                  you spend in The Hallow, the harder it is to leave.
                </Paragraph>
                <Paragraph>
                  The Hallow awaits. What happens at the cabin, stays at the
                  cabin.
                </Paragraph>
                {/* <Paragraph>
                  Powered by PK sound and visionary productions by INEO studios.
                </Paragraph> */}
              </div>
            </div>
            <div>
              <HallowGallery />
            </div>
          </div>
          <div className={styles.Stage}>
            <div>
              <UrsusGallery />
            </div>
            <div>
              <H1>Ursus</H1>
              <div>
                <Paragraph>
                  Situated on a magnificent plateau overlooking the Columbia
                  Valley, the mighty Ursus stands tall and powerful. Embodying
                  the spirit of the Bear which runs wild in our hearts; the
                  Wicked Woods embrace and enhance its thunderous roar, an
                  irresistible call to all who hear it.
                </Paragraph>
                <Paragraph>
                  <Bold>Ursus</Bold> is guardian of the Woods in which it
                  thrives, a reminder of our deep connection to nature and all
                  things Wicked. In this honored gathering place we dance,
                  stomp, and feel the release of our inner Bear – brought
                  together as one to celebrate all forms of live performance,
                  art, and inspired creation.
                </Paragraph>
                <Paragraph>
                  Ursus rests within us all, it&apos;s time to wake the Bear.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className={styles.Stage}>
            <div>
              <H1>Unicorn Lounge</H1>
              <div>
                <Paragraph>
                  Beneath the shadow of the Rocky Mountains, preserved within
                  the sacred land of the Akisqnuk First Nations, resides the
                  healing power of natural hot springs and infinite mystical
                  energy.
                </Paragraph>
                <Paragraph>
                  In this nexus of nature, it is said that the Wicked Woods
                  whisper and sing; attracting the last of the Unicorns to
                  convene and roam free. A Unicorn lives in us all - The Lounge
                  pulls us in with dazzling colors and lights, the rumble of
                  heavy bass, and mysterious funk-tastic vibes.
                </Paragraph>
                <Paragraph>
                  <Bold>Unicorn Lounge</Bold> is calling us come home. In this
                  ever-growing place of joy and wonder, your inner Unicorn runs
                  wild and untamed; dance on the soft earth, connect with
                  nature, fully embrace the weird and the wonderful creature
                  within.
                </Paragraph>
                <Paragraph>
                  Some people stop believing in Unicorns – but they never stop
                  believing in you.
                </Paragraph>
              </div>
            </div>
            <div>
              <UnicornGallery />
            </div>
          </div>
          <div className={styles.Stage}>
            <div>
              <PortalGallery />
            </div>
            <div>
              <H1>The Portal</H1>
              <div>
                <Paragraph>
                  <Bold>The Portal</Bold> began as a renegade stage nestled in
                  the bushes just outside of the Unicorn Lounge and quickly
                  became a fan favorite.
                </Paragraph>
                <Paragraph>
                  Tucked within the trees and overlooking the valley, The Portal
                  serenades us with deep bass and tantalizing visuals. Once you
                  enter The Portal, it&apos;s nearly impossible to leave.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

const HallowGallery = () => {
  const images = require.context("/public/assets/gallery/hallow", true);
  const imageList = images.keys().map((image) => images(image));
  const galleryImages = imageList.map((image) => {
    return {
      src: image.default.src,
      width: image.default.width,
      height: image.default.height,
    };
  });

  return (
    <div className={styles.Gallery}>
      <Gallery targetRowHeight={300} images={galleryImages} />
    </div>
  );
};

const UrsusGallery = () => {
  const images = require.context("/public/assets/gallery/ursus", true);
  const imageList = images.keys().map((image) => images(image));
  const galleryImages = imageList.map((image) => {
    return {
      src: image.default.src,
      width: image.default.width,
      height: image.default.height,
    };
  });

  return (
    <div className={styles.Gallery}>
      <Gallery targetRowHeight={300} images={galleryImages} />
    </div>
  );
};

const UnicornGallery = () => {
  const images = require.context("/public/assets/gallery/unicorn", true);
  const imageList = images.keys().map((image) => images(image));
  const galleryImages = imageList.map((image) => {
    return {
      src: image.default.src,
      width: image.default.width,
      height: image.default.height,
    };
  });

  return (
    <div className={styles.Gallery}>
      <Gallery targetRowHeight={300} images={galleryImages} />
    </div>
  );
};

const PortalGallery = () => {
  const images = require.context("/public/assets/gallery/portal", true);
  const imageList = images.keys().map((image) => images(image));
  const galleryImages = imageList.map((image) => {
    return {
      src: image.default.src,
      width: image.default.width,
      height: image.default.height,
    };
  });

  return (
    <div className={styles.Gallery}>
      <Gallery targetRowHeight={300} images={galleryImages} />
    </div>
  );
};
