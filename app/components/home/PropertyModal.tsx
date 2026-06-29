import Image from "next/image";
import Link from "next/link";
import Modal from "../ui/Modal";
import { PropertyData } from "./PropertyRailCard";
import styles from "./PropertyModal.module.css";

interface PropertyModalProps {
  property: PropertyData | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  if (!property) return null;

  const statusClass =
    property.status === "Open"
      ? styles.statusOpen
      : property.status === "Proposed"
      ? styles.statusProposed
      : styles.statusDev;

  return (
    <Modal
      open={!!property}
      onClose={onClose}
      labelledBy="property-modal-title"
      maxWidth="680px"
    >
      <div className={styles.inner}>
        <div className={styles.media}>
          <Image
            src={property.image}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className={styles.img}
          />
          <span className={`${styles.status} ${statusClass}`}>
            {property.status}
          </span>
        </div>

        <div className={styles.body}>
          <h2 id="property-modal-title" className={styles.name}>
            {property.name}
          </h2>
          <p className={styles.location}>{property.location}</p>

          <div className={styles.specs}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Bedrooms</span>
              <span className={styles.specValue}>{property.beds}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Type</span>
              <span className={styles.specValue}>{property.type}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Status</span>
              <span className={styles.specValue}>{property.status}</span>
            </div>
          </div>

          <p className={styles.summary}>{property.summary}</p>

          {property.highlight && (
            <p className={styles.highlight}>{property.highlight}</p>
          )}

          <div className={styles.actions}>
            <Link href="/contact" className={styles.ctaPrimary}
                  onClick={onClose}>
              Make a referral
            </Link>
            <Link href={`/homes/${property.slug}`} className={styles.ctaSecondary}
                  onClick={onClose}>
              View full details
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
