import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./index.module.scss";
import Image from "next/image";

import burger from "../../assets/burger_menu_icon.png";
import close from "../../assets/X_menu_icon.png";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const changeWidth = () => {
    setScreenWidth(window.innerWidth);
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
      <nav className={styles.Nav}>
        {(toggleMenu || screenWidth > 500) && (
          <ul className={styles.list}>
            <Link className={styles.items} href="/">
              Home
            </Link>
            <Link className={styles.items} href="/about">
              About
            </Link>
          </ul>
        )}
        <button onClick={toggleNav} className={styles.btn}>
          {toggleMenu ? (
            <Image src={close} width={40} height={40} alt="open menu" />
          ) : (
            <Image src={burger} width={40} height={40} alt="open menu" />
          )}
        </button>
      </nav>
    </div>
  );
};
