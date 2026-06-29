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

export default function PropertyRailCard({ property, onClick }: PropertyRailCardProps) {
  const statusClass =
    property.status === "Open"
      ? styles.statusOpen
      : property.status === "Proposed"
      ? styles.statusProposed
      : styles.statusDev;

  return (
    <button
      className={styles.card}
      onClick={() => onClick(property)}
      type="button"
    >
      <div className={styles.media}>
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="80px"
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <span className={`${styles.status} ${statusClass}`}>
          {property.status}
        </span>
        <h3 className={styles.name}>{property.name}</h3>
        <p className={styles.location}>{property.location}</p>
        <div className={styles.spec}>
          <span className={styles.specItem}>
            <span className={styles.specLabel}>Beds</span>
            <span className={styles.specValue}>{property.beds}</span>
          </span>
          <span className={styles.specItem}>
            <span className={styles.specLabel}>Type</span>
            <span className={styles.specValue}>{property.type}</span>
          </span>
        </div>
        {property.highlight && (
          <p className={styles.highlight}>{property.highlight}</p>
        )}
      </div>
    </button>
  );
}
