import Link from "next/link";
import styles from "./ApproachStrip.module.css";

const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Our Homes", href: "/homes" },
  { label: "Team",      href: "/team" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
  { label: "Policies",  href: "/policies" },
];

export default function ApproachStrip() {
  return (
    <nav className={styles.strip} aria-label="Site navigation">
      <div className={styles.inner}>
        <div className={styles.links}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
