import { chunkyHeart } from "@/styles/fonts";
import styles from "./index.module.scss";
import cx from "classnames";
import Link from "next/link";

export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link className={cx(chunkyHeart.className, styles.Link)} href={href}>
      <button className={cx(styles.Button)}>{children}</button>
    </Link>
  );
}
