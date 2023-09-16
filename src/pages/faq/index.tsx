import { useState, useEffect } from "react";
import { JumboHeading, Paragraph, H2 } from "@/components/Typography";
import Image from "next/image";
import PageHead from "@/components/PageHead";
// import background from "/public/assets/backgrounds/curious_blue-min.png";
import WW_Sandy_Brown from "/public/assets/WW -sandy brown.png";

import faqs from "./questions.json";

import styles from "./index.module.scss";

export default function CodeOfConduct() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredFaqs(faqs);
    } else {
      const filteredItems = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery) ||
          faq.answer.toLowerCase().includes(searchQuery)
      );

      setFilteredFaqs(filteredItems);
    }
  }, [searchQuery]);

  return (
    <div className={styles.Wrapper}>
      <PageHead
        page="FAQ"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Search for answers in our directory of frequently asked questions."
        url="wickedwoods.ca/faq"
      />
      <div className={styles.Content}>
        <div style={{ textAlign: "center" }}>
          <Image
            src={WW_Sandy_Brown}
            alt="Sandy Brown Wicked Woods Logo"
            priority
            style={{
              margin: "0 auto",
              maxWidth: "150px",
              height: "auto",
              display: "block",
              padding: "20px",
            }}
          />
          <JumboHeading>Frequently Asked Questions</JumboHeading>
        </div>
        <div className={styles.SearchWrapper}>
          <form>
            <label>
              <input
                placeholder="Enter a search term"
                className={styles.SearchInput}
                type="text"
                name="search"
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
              />
            </label>
          </form>
          {searchQuery && (
            <div className={styles.SearchTermNote}>
              <Paragraph>
                Showing results for <i>{searchQuery}</i>
              </Paragraph>
            </div>
          )}
        </div>

        <div>
          {filteredFaqs.length < 1 ? (
            <Paragraph>
              There are no matches for your search term. Please try again.
            </Paragraph>
          ) : null}
          {filteredFaqs.map((faq) => {
            return (
              <div className={styles.Question} key={faq.id}>
                <H2>{faq.question}</H2>
                <Paragraph>{faq.answer}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Image
        src={background}
        fill
        alt="Blue sky"
        priority
        style={{ zIndex: 0, backgroundPosition: "contain" }}
      /> */}
    </div>
  );
}
