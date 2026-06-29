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
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="5.5" width="11" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M1 7.5V3.5a1 1 0 011-1h9a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="4.5" cy="5.5" r="1" fill="currentColor"/>
  </svg>
);

const LOCATION_ICON = (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6.5 1.5a4 4 0 014 4c0 3.5-4 7-4 7s-4-3.5-4-7a4 4 0 014-4z"
          stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="6.5" cy="5.5" r="1.3" fill="currentColor"/>
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
    <button className={styles.card} onClick={() => onClick(property)} type="button">
      {/* Full-width image stacked on top */}
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
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{property.name}</h3>
        </div>
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
  );
}
