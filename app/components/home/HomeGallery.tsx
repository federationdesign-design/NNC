"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./HomeGallery.module.css";

interface Props {
  images: string[];
  homeName: string;
}

export default function HomeGallery({ images, homeName }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : 0));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % images.length : 0));

  return (
    <>
      <div className={styles.gallery}>
        {images.map((src, i) => (
          <button
            key={i}
            className={styles.item}
            onClick={() => setLightbox(i)}
            aria-label={`View photo ${i + 1} of ${homeName}`}
          >
            <Image
              src={src}
              alt={`${homeName} — photo ${i + 1}`}
              fill
              sizes="(min-width: 1200px) 33vw, (min-width: 700px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className={styles.lightbox}
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button className={styles.lbClose} onClick={() => setLightbox(null)} aria-label="Close">×</button>
          <button className={styles.lbPrev} onClick={prev} aria-label="Previous">‹</button>
          <div className={styles.lbImg}>
            <Image
              src={images[lightbox]}
              alt={`${homeName} — photo ${lightbox + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <button className={styles.lbNext} onClick={next} aria-label="Next">›</button>
          <p className={styles.lbCount}>{lightbox + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}
