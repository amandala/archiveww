import React from "react";

import { dinBold, chunkyHeart } from "@/styles/fonts";
import styles from "./index.module.scss";
import cx from "classnames";

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className={cx(dinBold.className, styles.Four)}>{children}</h4>;
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={styles.Text}>{children}</p>;
}

export function JumboHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={cx(chunkyHeart.className, styles.Jumbo)}>{children}</h1>
  );
}
