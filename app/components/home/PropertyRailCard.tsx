import Image from "next/image";
import styles from "./PropertyRailCard.module.css";

export interface PropertyData {
  slug: string;
  name: string;
  location: string;
  beds: number;
  type: string;
  status: string;
  summary: string;
  image: string;
  highlight?: string;
}

interface PropertyRailCardProps {
  property: PropertyData;
  onClick: (property: PropertyData) => void;
}

const BED_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="6" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M1 8V4a1 1 0 011-1h10a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="5" cy="6" r="1.1" fill="currentColor"/>
  </svg>
);

const LOCATION_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7 1.5a4.5 4.5 0 014.5 4.5C11.5 9.5 7 12.5 7 12.5S2.5 9.5 2.5 6A4.5 4.5 0 017 1.5z"
          stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="7" cy="6" r="1.5" fill="currentColor"/>
  </svg>
);

export default function PropertyRailCard({ property, onClick }: PropertyRailCardProps) {
  const statusClass =
    property.status === "Open"
      ? styles.statusOpen
      : property.status === "Proposed"
      ? styles.statusProposed
      : styles.statusDev;

  return (
    <div className={styles.cardWrapper}>
      <button className={styles.card} onClick={() => onClick(property)} type="button">
        {/* Full-width image with rounded corners */}
        <div className={styles.media}>
          <Image
            src={property.image}
            alt={property.name}
            fill
            sizes="(min-width: 900px) 420px, 100vw"
            className={styles.img}
          />
          <span className={`${styles.status} ${statusClass}`}>{property.status}</span>
        </div>

        {/* Text below image */}
        <div className={styles.info}>
          <h3 className={styles.name}>{property.name}</h3>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              {LOCATION_ICON}
              {property.location}
            </span>
            <span className={styles.metaItem}>
              {BED_ICON}
              {property.beds} bed
            </span>
          </div>
          <p className={styles.summary}>{property.summary}</p>
        </div>
      </button>
      {/* View home button outside the main click target */}
      <div className={styles.viewHomeRow}>
        <button className={styles.viewHomeBtn} onClick={() => onClick(property)} type="button">
          View home &rarr;
        </button>
      </div>
      <div className={styles.divider} />
    </div>
  );
}
