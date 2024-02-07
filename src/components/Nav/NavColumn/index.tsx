import TextLink from "../../TextLink";
import { H4 } from "../../Typography";
import styles from "./index.module.scss";

export default function NavColumn({
  links,
  title,
}: {
  title: string;
  links: Array<{ target?: string; href: string; text: string }>;
}) {
  return (
    <div className={styles.Column}>
      <H4 className={styles.NavHeading}>{title}</H4>
      <ul className={styles.List}>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <TextLink
                target={link.target}
                href={link.href}
                className={styles.Link}
              >
                {link.text}
              </TextLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
