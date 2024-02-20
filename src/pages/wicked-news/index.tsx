import { JumboHeading } from "@/components/Typography";

import { wickedNewsData } from "@/data/wicked-news";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

import background from "/public/assets/backgrounds/sky_background-min.png";

export default function WickedNews() {
  return (
    <div
      className={styles.Wrapper}
      style={{ backgroundImage: `url(${background.src})` }}
    >
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
    </div>
  );
}
