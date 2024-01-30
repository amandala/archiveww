import React from "react";
import { chunkyHeart } from "@/styles/fonts";
import styles from "./index.module.scss";
import cx from "classnames";
import Link from "next/link";

export default function Button({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      className={cx(chunkyHeart.className, styles.Link, className)}
      href={href}
    >
      <button className={cx(styles.Button)}>{children}</button>
    </Link>
  );
}
