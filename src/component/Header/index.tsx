import React from "react";
import styles from "./styles.module.sass";
import Image from "next/image";
import logo from "../../../public/images/hotel.png";

import ActiveLink from "../ActiveLink";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink legacyBehavior href="/" activeClassName={styles.active}>
          <a>
            <Image src={logo} alt="Logo" />
          </a>
        </ActiveLink>

        <nav>
          <ActiveLink legacyBehavior href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink
            legacyBehavior
            href="/posts"
            activeClassName={styles.active}
          >
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink
            legacyBehavior
            href="/sobre"
            activeClassName={styles.active}
          >
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>

        <a className={styles.readyButton} type="button" href="#">
          COMEÇAR
        </a>
      </div>
    </header>
  );
}

export default Header;
