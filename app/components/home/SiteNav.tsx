"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SiteNav.module.css";

const LINKS = [
  { href: "/homes", label: "Our Homes" },
  { href: "/vacancies", label: "Vacancies" },
  { href: "/ofsted", label: "Ofsted" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image src="/long logo copy.svg" alt="Nurturing Nests" width={180} height={36} style={{ objectFit: "contain", objectPosition: "left" }} />
        </Link>

        <nav className={styles.links} aria-label="Main navigation">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/" className={styles.referralBtn}>Make a referral</Link>
          <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Make a referral</Link>
        </div>
      )}
    </header>
  );
}
