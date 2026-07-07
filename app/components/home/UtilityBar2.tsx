import Link from "next/link";
import styles from "./UtilityBar2.module.css";

const LINKS = [
  { href: "/homes", label: "Our Homes" },
  { href: "/vacancies", label: "Vacancies" },
  { href: "/ofsted", label: "Ofsted" },
  { href: "/contact", label: "Contact" },
];

export default function UtilityBar2() {
  return (
    <div className={styles.bar}>
      <nav className={styles.group} aria-label="Primary">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
      </nav>
    </div>
  );
}
