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
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p className={cx(styles.Text, { [styles.Dark]: dark }, className)}>
      {children}
    </p>
  );
}

export function JumboHeading({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h1
      className={cx(
        chunkyHeart.className,
        styles.Jumbo,
        {
          [styles.Dark]: dark,
        },
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H1({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h1
      className={cx(
        dinBlack.className,
        styles.H1,
        { [styles.Dark]: dark },
        className
      )}
    >
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
    <h2 className={cx(dinBlack.className, styles.H2, { [styles.Dark]: dark })}>
      {children}
    </h2>
  );
}

export function H3({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h3
      className={cx(
        dinBlack.className,
        styles.H3,
        { [styles.Dark]: dark },
        className
      )}
    >
      {children}
    </h3>
  );
}

export function OList({
  children,
  dark = false,
  type,
}: {
  children: React.ReactNode;
  dark?: boolean;
  type?: "a" | "i" | "1" | "A" | "I";
}) {
  return (
    <ol type={type} className={cx(styles.OList, { [styles.Dark]: dark })}>
      {children}
    </ol>
  );
}

export function ListItem({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <li
      className={cx(styles.ListItem, {
        [styles.Dark]: dark,
      })}
    >
      {children}
    </li>
  );
}
