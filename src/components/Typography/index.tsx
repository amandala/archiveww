import React from "react";

import { dinBold, chunkyHeart, dinBlack } from "@/styles/fonts";
import styles from "./index.module.scss";
import cx from "classnames";

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
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={cx(
        dinBlack.className,
        styles.H2,
        { [styles.Dark]: dark },
        className
      )}
    >
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

export function H4({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <h4
      className={cx(
        dinBold.className,
        styles.H4,
        { [styles.Dark]: dark },
        className
      )}
    >
      {children}
    </h4>
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

export function UList({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <ul className={cx(styles.UList, { [styles.Dark]: dark })}>{children}</ul>
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

export function Bold({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <li
      className={cx(styles.Bold, dinBold.className, {
        [styles.Bold]: dark,
      })}
    >
      {children}
    </li>
  );
}
