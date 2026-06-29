import Link from "next/link";
import Image from "next/image";
import styles from "./SiteFooter.module.css";

const HOMES_LINKS = [
  { label: "Ivy Cottage",        href: "/homes/ivy-cottage" },
  { label: "Holly Tree Cottage", href: "/homes/holly-tree-cottage" },
];

const ABOUT_LINKS = [
  { label: "Our Approach", href: "/approach" },
  { label: "Senior Team",  href: "/team" },
  { label: "News",         href: "/news" },
  { label: "Contact",      href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",      href: "/privacy" },
  { label: "Cookie Policy",       href: "/cookies" },
  { label: "Complaints Procedure",href: "/complaints" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.brand}>
          <Link href="/" aria-label="Nurturing Nests home">
            <Image
              src="/header-logo.jpg"
              alt="Nurturing Nests"
              width={120}
              height={56}
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.strapline}>
            Specialist residential care for children and young people in Kent.
          </p>
          <p className={styles.ofsted}>Registered with Ofsted</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHead}>Our Homes</h3>
          <ul className={styles.colList} role="list">
            {HOMES_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.colLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHead}>About Us</h3>
          <ul className={styles.colList} role="list">
            {ABOUT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.colLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHead}>Contact</h3>
          <address className={styles.address}>
            <p>info@nurturingnests.co.uk</p>
            <p>0208 345 678</p>
          </address>
          <p className={styles.regNote}>
            Company No. 11223861
          </p>
        </div>

      </div>

      <div className={styles.legal}>
        <div className={styles.legalInner}>
          <span>&copy; {year} Nurturing Nests Ltd. All rights reserved.</span>
          <ul className={styles.legalLinks} role="list">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.legalLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
