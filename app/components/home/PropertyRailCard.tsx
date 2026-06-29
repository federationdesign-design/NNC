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
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1" y="5" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M1 7V3a1 1 0 011-1h8a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="4" cy="5" r="1" fill="currentColor"/>
  </svg>
);

const LOCATION_ICON = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
       xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 1a3.5 3.5 0 013.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 016 1z"
          stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="6" cy="4.5" r="1.2" fill="currentColor"/>
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
      <div className={styles.media}>
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="72px"
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{property.name}</h3>
          <span className={`${styles.status} ${statusClass}`}>{property.status}</span>
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
