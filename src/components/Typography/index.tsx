import React from "react";

import { dinBold, chunkyHeart, dinBlack } from "@/styles/fonts";
import styles from "./index.module.scss";
import cx from "classnames";

export function H4({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h4 className={cx(dinBold.className, styles.Four, { [styles.Dark]: dark })}>
      {children}
    </h4>
  );
}

export function Paragraph({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return <p className={cx(styles.Text, { [styles.Dark]: dark })}>{children}</p>;
}

export function JumboHeading({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h1
      className={cx(chunkyHeart.className, styles.Jumbo, {
        [styles.Dark]: dark,
      })}
    >
      {children}
    </h1>
  );
}

export function H1({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h1 className={cx(dinBlack.className, styles.H1, { [styles.Dark]: dark })}>
      {children}
    </h1>
  );
}

export function H2({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h1 className={cx(dinBlack.className, styles.H2, { [styles.Dark]: dark })}>
      {children}
    </h1>
  );
}
