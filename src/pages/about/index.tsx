import { Navbar } from "@/components/Navbar";
import React from "react";

import bear from "../../assets/paper_bear_alpha.png";
import styles from "./index.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.Container}>
      <Navbar />
      <div>
        <div className={styles.Description}>
          <p className={styles.Text}>
            Nestled on the edge of the Canadian Rockies, minutes from Fairmont
            Hot Springs BC. Wicked Woods Music and Arts Festival is is an annual
            celebration of life through sight & sound held on traditional
            unceded territory of the Akisqnuk First Nation. This Kootenay
            location’s limitless views and comfortable surroundings makes Wicked
            Woods a precious environment for all imaginations.
          </p>
        </div>
        <div className={styles.Bear}>
          <Image
            src={bear}
            placeholder="blur"
            quality={100}
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
            alt="bear"
          />
        </div>
      </div>
    </div>
  );
}
