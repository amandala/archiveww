import React from "react";
import Link from "next/link";

import cx from "classnames";

import { Paragraph } from "../Typography";

import styles from "./index.module.scss";

export default function TextLink({
  href,
  children,
  target,
  className,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}) {
  return (
    <Link className={styles.Link} href={href} target={target}>
      <Paragraph className={cx(styles.Para, className)}>{children}</Paragraph>
    </Link>
  );
}
