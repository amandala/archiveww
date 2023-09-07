import Link from "next/link";
import styles from "./index.module.scss";

export default function TextLink({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Link className={styles.Link} href={href} target={target}>
      {children}
    </Link>
  );
}
