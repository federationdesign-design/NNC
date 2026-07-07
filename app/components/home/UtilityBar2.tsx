import Link from "next/link";
import styles from "./UtilityBar2.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-homes", label: "Our Homes" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
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
