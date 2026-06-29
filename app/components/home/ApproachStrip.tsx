import Link from "next/link";
import styles from "./ApproachStrip.module.css";

const PILLARS = [
  { label: "Trauma-aware practice" },
  { label: "Attachment-informed care" },
  { label: "High staffing ratios" },
  { label: "Consistent adults" },
  { label: "Structured routines" },
  { label: "ASD and LD capable" },
];

export default function ApproachStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <div className={styles.pillars}>
          {PILLARS.map((p, i) => (
            <span key={i} className={styles.pillar}>
              {p.label}
            </span>
          ))}
        </div>
        <Link href="/approach" className={styles.link}>
          Our approach
        </Link>
      </div>
    </div>
  );
}
