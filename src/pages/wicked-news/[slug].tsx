import { JumboHeading, Paragraph, H2 } from "@/components/Typography";
import { useRouter } from "next/router";

import { wickedNewsData } from "@/data/wicked-news";

import styles from "./article.module.scss";
import { useState } from "react";

import cx from "classnames";

export default function WickedNewsArticle() {
  const router = useRouter();
  const [nightMode, setNightMode] = useState<boolean>(true);

  const article = wickedNewsData.find(
    (item) => item.slug === router.query.slug
  );

  return (
    <div className={cx(styles.Page, { [styles.PageNight]: nightMode })}>
      <div className={styles.TitleWrapper}>
        <span>
          <button
            className={styles.nightToggle}
            onClick={() => setNightMode(!nightMode)}
          >
            <div
              id="moon"
              className={cx(nightMode ? styles.moon : styles.sun)}
            ></div>
          </button>
        </span>
        <JumboHeading dark={!nightMode}>{article?.title}</JumboHeading>
        <H2 dark={!nightMode}>{article?.subtitle}</H2>
        <Paragraph dark={!nightMode}>{article?.published}</Paragraph>
      </div>
      <div className={styles.Content}>
        {article?.text.map((paragraph) => (
          <Paragraph dark={!nightMode} key={paragraph.slice(3, 10)}>
            {paragraph}
          </Paragraph>
        ))}
      </div>
    </div>
  );
}
