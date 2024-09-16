import { useState, useEffect } from "react";
import { JumboHeading, Paragraph, H2, Bold } from "@/components/Typography";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import logo from "/public/assets/2024logo.png";

import faqs from "./questions.json";

import styles from "./index.module.scss";
import Link from "next/link";

interface FAQItem {
  section: string;
  question: string;
  answer: string;
  link?: {
    url: string;
    linkText: string;
    external: boolean;
  };
}

interface GroupedData {
  [section: string]: FAQItem[];
}

export default function CodeOfConduct() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredFaqs(faqs);
    } else {
      const filteredItems = faqs.filter(
        (faq) =>
          faq.question
            .toLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );

      setFilteredFaqs(filteredItems);
    }
  }, [searchQuery]);

  const groupDataBySection = (filteredFaqs: FAQItem[]): GroupedData => {
    return filteredFaqs.reduce((acc: GroupedData, obj: FAQItem) => {
      const { section } = obj;
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(obj);
      return acc;
    }, {});
  };
  const groupedData: GroupedData = groupDataBySection(filteredFaqs);

  return (
    <div>
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
              src={logo}
              alt="Wicked Woods Logo"
              priority
              style={{
                margin: "0 auto",
                maxWidth: "200px",
                height: "auto",
                display: "block",
                padding: "20px",
              }}
            />
            <JumboHeading>FAQ</JumboHeading>
          </div>
          <div className={styles.SearchWrapper}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSearchQuery(searchQuery);
              }}
              style={{ textAlign: "center" }}
            >
              <label style={{ display: "inline-flex" }}>
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
            {Object.keys(groupedData).map((section, index) => (
              <div key={index} className={styles.Section}>
                <H2 className={styles.SectionHeading}>{section}</H2>
                <div>
                  {groupedData[section].map((item, i) => (
                    <div key={i} className={styles.Question}>
                      <Paragraph>
                        <Bold>{item.question}</Bold>
                      </Paragraph>
                      <Paragraph>{item.answer}</Paragraph>
                      {item.link && (
                        <Link
                          className={styles.Link}
                          href={item.link.url}
                          target={item.link.external ? "_blank" : "_top"}
                        >
                          {item.link.linkText}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
