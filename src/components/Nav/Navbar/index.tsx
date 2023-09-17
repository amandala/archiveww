import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";

import styles from "./index.module.scss";
import Image from "next/image";

import ww from "/public/assets/WW-off_white.png";
import burger from "/public/assets/burger_menu_icon.png";
import close from "/public/assets/X_menu_icon.png";
import background from "/public/assets/backgrounds/mooonshotbanner.png";
import { ExperienceNav, FestivalNav, ContactNav } from "..";

export const Navbar = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeNav = () => {
    if (menuOpen) {
      toggleNav();
    }
  };

  useEffect(() => {
    closeNav();
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div className={styles.NavWrapper}>
      {/* <Link className={styles.HomeLink} href="/" onClick={closeNav}>
        <Image src={ww} width={50} height={50} alt="Orange WW logo" />
      </Link> */}
      <nav
        className={cx(styles.Nav, {
          [styles.NavOpen]: menuOpen,
        })}
      >
        {menuOpen && (
          <ul
            className={styles.list}
            style={{
              backgroundImage: menuOpen ? `url(${background.src})` : "",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FestivalNav />
            <ExperienceNav />
            <ContactNav />
          </ul>
        )}

        <Link className={styles.MainNavLogo} href="/" onClick={closeNav}>
          <Image
            style={{ marginRight: "10px" }}
            src={ww}
            height={50}
            alt="WW logo"
          />
        </Link>
        <button onClick={toggleNav} className={styles.btn}>
          {menuOpen ? (
            <Image src={close} width={40} height={40} alt="open menu" />
          ) : (
            <Image src={burger} width={40} height={40} alt="open menu" />
          )}
        </button>
      </nav>
    </div>
  );
};
