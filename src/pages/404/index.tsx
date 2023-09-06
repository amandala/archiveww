import { Navbar } from "@/components/Navbar";
import { chunkyHeart, dinCondensed } from "@/styles/fonts";
import cx from "classnames";

import styles from "./index.module.scss";
import Link from "next/link";
import Button from "@/components/Button";

export default function FourOhFour() {
  return (
    <>
      <div className={styles.Wrapper}>
        <h1 className={cx(chunkyHeart.className, styles.Number)}>404</h1>
        <h2 className={cx(dinCondensed.className, styles.Heading)}>
          Nothing to see here!
        </h2>
        <div className={styles.ButtonWrapper}>
          <Button href="/">Go back home</Button>
        </div>
      </div>
    </>
  );
}
