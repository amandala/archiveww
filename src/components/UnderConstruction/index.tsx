import { chunkyHeart, dinCondensed } from "@/styles/fonts";
import cx from "classnames";

import styles from "./index.module.scss";
import Button from "@/components/Button";
import { Paragraph } from "../Typography";

export default function UnderConstruction() {
  return (
    <>
      <div className={styles.Wrapper}>
        <h1 className={cx(chunkyHeart.className, styles.Number)}>
          Under Construction
        </h1>
        <Paragraph>
          We're rebuilding our website and haven't completed this page yet.
        </Paragraph>
        <Paragraph>Check back often for updates!</Paragraph>
        <div className={styles.ButtonWrapper}>
          <Button href="/">Go back home</Button>
        </div>
      </div>
    </>
  );
}
