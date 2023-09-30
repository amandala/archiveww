import BunchOfTrees from "@/components/BunchOfTrees";
import { JumboHeading } from "@/components/Typography";

import { wickedNewsData } from "@/data/wicked-news";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function WickedNews() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <JumboHeading>Wicked News</JumboHeading>
        <div className={styles.Articles}>
          {wickedNewsData.map((news) => {
            return (
              <Link href={`/wicked-news/${news.slug}`} key={news.slug}>
                <article className={styles.Article}>
                  <Image
                    className={styles.CoverImage}
                    src={news.cover.src}
                    alt={`${news.title} Cover Image`}
                    width={news.cover.width / 4}
                    height={news.cover.height / 4}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.TreesWrapper}>
        <BunchOfTrees />
      </div>
    </div>
  );
}
