import React, { useState, useEffect } from "react";
import Link from "next/link";
import cx from "classnames";

import styles from "./index.module.scss";
import Image from "next/image";

import { dinBlack } from "@/styles/fonts";

import burger from "@/assets/burger_menu_icon.png";
import close from "@/assets/X_menu_icon.png";
import background from "@/assets/sunsetScene/PAPER_fun_ASSETS_8_back.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const changeWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  const closeNav = () => {
    if (menuOpen) {
      toggleNav();
    }
  };

  useEffect(() => {
    changeWidth();
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className={styles.NavWrapper}>
      <nav className={cx(styles.Nav, dinBlack.className)}>
        {(menuOpen || screenWidth > 500) && (
          <ul
            className={styles.list}
            style={{ backgroundImage: `url(${background.src})` }}
          >
            <Link className={styles.items} href="/" onClick={closeNav}>
              Home
            </Link>
            <Link className={styles.items} href="/about" onClick={closeNav}>
              About
            </Link>
          </ul>
        )}
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
