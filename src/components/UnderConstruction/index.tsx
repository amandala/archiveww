import { JumboHeading, Paragraph } from "../Typography";

import wolf from "/public/assets/backgrounds/wolfMoon.png";

import styles from "./index.module.scss";

export default function UnderConstruction({
  title = "Under Construction",
  text = "We're rebuilding our website and haven't completed this page yet.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <>
      <div
        className={styles.Wrapper}
        style={{ backgroundImage: `url(${wolf.src})` }}
      >
        <div className={styles.Content}>
          <JumboHeading>{title}</JumboHeading>
          <Paragraph>{text}</Paragraph>
        </div>
      </div>
    </>
  );
}
