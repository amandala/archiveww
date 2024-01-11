import Gallery from "@/components/Gallery";
import PageHead from "@/components/PageHead";
import { PageWrapper } from "@/components/PageWrapper";
import background from "/public/assets/backgrounds/prussian_blue-min.png";
import { H1, JumboHeading, Paragraph } from "@/components/Typography";

const images = require.context("/public/assets/gallery/vendors", true);
const imageList = images.keys().map((image) => images(image));
const galleryImages = imageList.map((image) => {
  return {
    src: image.default.src,
    width: image.default.width,
    height: image.default.height,
  };
});

import styles from "./index.module.scss";

export default function Vendors() {
  return (
    <>
      <PageHead
        page="Vendors"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Information on Wicked Woods vendors and vendor applications"
        url="wickedwoods.ca/vendors"
      />
      <div style={{ backgroundImage: `url(${background?.src})` }}>
        <PageWrapper className={styles.Page}>
          <div className={styles.PageInfo}>
            <div className={styles.Main}>
              <JumboHeading>Vendors</JumboHeading>
              <div>
                <Paragraph>
                  Applications for Artisan and Food Vendors open SOON!
                </Paragraph>
                <Paragraph>
                  Keep your eyes on our social media for the application release
                  details, and come back here for the vendor application once
                  it&apos;s open.
                </Paragraph>
              </div>
            </div>
            <div>
              <H1>Fabulous &apos;Fits</H1>
              <H1>Satisfying Snacks</H1>
              <H1>Treasured Trinkets</H1>
              <H1>Magnificent Meals</H1>
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
