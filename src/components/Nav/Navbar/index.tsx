import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";

import styles from "./index.module.scss";
import Image from "next/image";

import ww from "/public/assets/ww_white.png";
import burger from "/public/assets/burger_menu_icon.png";
import close from "/public/assets/X_menu_icon.png";
import background from "/public/assets/backgrounds/wolfMoon.png";
import { ExperienceNav, FestivalNav, ContactNav, SocialNav } from "..";
import TicketButton from "@/components/TicketButton";

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
  }, [router]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.NavWrapper}>
      <nav
        className={cx(styles.Nav, {
          [styles.NavOpen]: menuOpen,
        })}
      >
        {menuOpen && (
          <div
            className={styles.NavItems}
            style={{
              backgroundImage: menuOpen ? `url(${background.src})` : "",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={styles.TicketButton}>
              <TicketButton />
            </div>
            <div className={styles.list}>
              <FestivalNav />
              <ExperienceNav />
              <ContactNav />
              <span className={styles.Social}>
                <SocialNav />
              </span>
            </div>
          </div>
        )}

        <Link className={styles.MainNavLogo} href="/" onClick={closeNav}>
          <Image
            style={{ marginRight: "10px" }}
            src={ww}
            height={30}
            alt="WW logo"
            priority
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
